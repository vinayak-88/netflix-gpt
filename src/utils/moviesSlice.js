import { createSlice } from "@reduxjs/toolkit";
import usePopularMovies from "../hooks/usePopularMovies";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    backgroundTrailer: null,
    topRatedMovies:null,
    upcomingMovies:null,
    popularMovies:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addBackgroundTrailer: (state, action) => {
      state.backgroundTrailer = action.payload;
    },
    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload;
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload;
    }
  },
});

export const { addNowPlayingMovies, addBackgroundTrailer,addTopRatedMovies,addUpcomingMovies,addPopularMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
