"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import GenreFilter from "@saba-idea/components/genre-filter";
import MovieCard from "@saba-idea/components/movie-card";
import RateFilter from "@saba-idea/components/rete-filter";
import moviesData from "@saba-idea/data/index.json";
import { filterAndSortMovies } from "@saba-idea/helper/movies";

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
