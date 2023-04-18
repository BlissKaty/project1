import React from "react";

const page = async ({ params }) => {
  const { movie } = params;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie${movie}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <div>
        <h1 className="text-pink-600 text-5xl">{res.title}</h1>
        <h1>{res.release_date}</h1>
      </div>
    </div>
  );
};

export default page;
