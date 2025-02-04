import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ( {movieId} ) => {
  const trailer = useSelector((store) => store.movies?.backgroundTrailer);
  useMovieTrailer(movieId);

  // if(trailer.key==null) return null;
  return (
    <div className="absolute overflow-hidden inset-0">
      {trailer?.key?(
        <iframe
        className="w-[150%] h-[150%] absolute -translate-x-[16%] -translate-y-[16%]"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&vq=hd1080&modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
     ):null}
    </div>
  );
};

export default VideoBackground;
