import React from "react";
import Link from "next/link";
import Image from "next/image";

const Movies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <h1>Movies</h1>
      {res.results.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <Link href={`/${movie.id}`}>
            <Image
              src={imagePath + movie.backdrop_path}
              alt={movie.title}
              width={100}
              height={100}
            />
          </Link>
        </div>
      ))}
      <Link href="/">Home</Link>
    </div>
  );
};

export default Movies;
