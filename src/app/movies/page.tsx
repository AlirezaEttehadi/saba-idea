"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import GenreFilter from "@saba-idea/components/genre-filter";
import MovieCard from "@saba-idea/components/movie-card";
import RateFilter from "@saba-idea/components/rete-filter";

import moviesData from "@saba-idea/data/index.json";

export default function MoviesPage() {
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
        {moviesData.map((movie) => {
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
