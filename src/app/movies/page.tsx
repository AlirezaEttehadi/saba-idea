"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import GenreFilter from "@saba-idea/components/genre-filter";
import MovieCard from "@saba-idea/components/movie-card";
import RateFilter from "@saba-idea/components/rete-filter";
import moviesData from "@saba-idea/data/index.json";
import { Movie } from "@saba-idea/models";

// Function to filter by genre
function filterByGenre(movies: Movie[], genres: string[]): Movie[] {
  return movies.filter((movie) =>
    movie.categories.some((category) =>
      genres.includes(category.title_en.toLowerCase())
    )
  );
}

// Function to sort by average rating
function sortByRating(movies: Movie[], order: "asc" | "desc"): Movie[] {
  return movies.sort((a, b) => {
    const rateA = parseFloat(a.rate_avrage);
    const rateB = parseFloat(b.rate_avrage);
    return order === "asc" ? rateA - rateB : rateB - rateA;
  });
}

// Combine filters and sorting
function filterAndSortMovies(
  movies: Movie[],
  genres: string[],
  order: "asc" | "desc"
): Movie[] {
  let filteredMovies = movies;
  if (genres.length > 0) {
    filteredMovies = filterByGenre(
      filteredMovies,
      genres.map((genre) => genre.toLowerCase())
    );
  }
  return sortByRating(filteredMovies, order);
}

export default function MoviesPage() {
  const searchParams = useSearchParams();

  const selectedRateMode = searchParams.get("order_dir");
  const selectedGenre = searchParams.get("genre") ?? "";
  const selectedGenreList = selectedGenre.split(",");

  const selectedMovies = useMemo(() => {
    return filterAndSortMovies(
      moviesData,
      selectedGenreList.filter((item) => item.length),
      (selectedRateMode as "asc" | "desc") ?? "asc"
    );
  }, [selectedRateMode, selectedGenreList]);

  return (
    <div>
      <div className="flex items-center gap-4 justify-center">
        <GenreFilter />
        <RateFilter />
      </div>
      <div className="text-gray-200 text-xs font-bold mt-12 mb-4">
        لیست تمامی فیلم و سریال‌ها
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4">
        {selectedMovies.map((movie: any) => {
          return (
            <MovieCard
              movieName={movie.movie_title}
              movieImage={movie.pic.movie_img_s}
              movieRate={movie.rate_avrage}
            />
          );
        })}
      </div>
    </div>
  );
}
