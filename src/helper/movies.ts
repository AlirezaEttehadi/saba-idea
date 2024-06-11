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
export function filterAndSortMovies(
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
