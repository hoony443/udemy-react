import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};
//  Redux 상태 관리를 간편하게 해주는 도구입니다.
// createSlice 함수를 사용하면 Redux 액션과 리듀서를 하나의 객체 안에 정의할 수 있습니다
const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    updateMoviestore: (state, action) => {
      console.log(action);
      return (state = {
        ...state,
        ...action.payload,
      });
    },
    resetMoviestore: (state, action) => {
      return initialState;
    },
  },
});

export const { updateMoviestore, resetMoviestore } = MovieSlice.actions;
console.log(MovieSlice.actions);
export default MovieSlice.reducer;
console.log(MovieSlice.reducer);

// toolkit
