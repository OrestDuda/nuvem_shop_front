import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./heroes-actions";

const heroes = createReducer([], {
  [actions.fetchHeroesSuccess]: (state, action) => {
    return action.payload.data;
  },
  [actions.addHeroSuccess]: (state, action) => {
    return [...state, action.payload.data];
  },
  [actions.deleteHeroSuccess]: (state, action) => {
    return state.filter(({ _id }) => _id !== action.payload);
  },
  [actions.changeHeroSuccess]: (state, action) => {
    return state.map((hero) => {
      if (hero._id !== action.payload.data._id) {
        return hero;
      }
      return action.payload.data;
    });
  },
});

const loading = createReducer(false, {
  [actions.fetchHeroesRequest]: () => true,
  [actions.fetchHeroesSuccess]: () => false,
  [actions.fetchHeroesError]: () => false,
  [actions.addHeroRequest]: () => true,
  [actions.addHeroSuccess]: () => false,
  [actions.addHeroError]: () => false,
  [actions.deleteHeroRequest]: () => true,
  [actions.deleteHeroSuccess]: () => false,
  [actions.deleteHeroError]: () => false,
  [actions.changeHeroRequest]: () => true,
  [actions.changeHeroSuccess]: () => false,
  [actions.changeHeroError]: () => false,
});

export default combineReducers({
  heroes,
  loading,
});
