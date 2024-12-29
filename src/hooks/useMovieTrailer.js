import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addbackgroundTrailer } from "../store/moviesSlice";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();   
  async function fetchVideo() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    const filteredData = data.results.filter(
      (video) => video.type === "filter"
    );
    const trailer = filteredData.length ? filteredData[0] : data.results[0];
    dispatch(addbackgroundTrailer(trailer));
  }
  useEffect(() => {
    fetchVideo();
  }, []);
};
export default useMovieTrailer;
