import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
 
  const nowPlayingMovies=useSelector((state)=>state.movies?.nowPlayingMovies);
  const topRatedMovies=useSelector((state)=>state.movies?.topRatedMovies);
  const popularMovies=useSelector((state)=>state.movies?.popularMovies);
  const upcomingMovies=useSelector((state)=>state.movies?.upcomingMovies);

  if(nowPlayingMovies===null){
    return <div>Loading...</div>
  }

  return (
    <div>
      {/*
      MovieList - Popular Movies
        MovieCard * n
      MovieList - Now Playing Movies
      MovieList - Trending Movies
      MovieList - Horror Movies
    */}
      <div className="bg-black">
      <div className="bg-transparent -mt-40 z-50 relative">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      </div>
      <MovieList title={"Popular"} movies={topRatedMovies} />
      <MovieList title={"Top Rated"} movies={popularMovies} />
      <MovieList title={"Upcoming"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
