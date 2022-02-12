import heroesReducer from "./Nuvem/heroes-reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const middleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    heroes: heroesReducer,
  },
  middleware,
});

export default store;
