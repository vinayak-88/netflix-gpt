import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {
  const trailer = useSelector((store)=>store.movies?.backgroundTrailer);
  useMovieTrailer(movieId);
  return (
    <div>
      
    </div>
  )
}

export default VideoBackground