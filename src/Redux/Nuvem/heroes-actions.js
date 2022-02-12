import { createAction } from "@reduxjs/toolkit";

const fetchHeroesRequest = createAction("heroes/fetchHeroesRequest");
const fetchHeroesSuccess = createAction("heroes/fetchHeroesSuccess");
const fetchHeroesError = createAction("heroes/fetchHeroesError");

const addHeroRequest = createAction("heroes/addHeroRequest");
const addHeroSuccess = createAction("heroes/addHeroSuccess");
const addHeroError = createAction("heroes/addHeroError");

const deleteHeroRequest = createAction("heroes/deleteHeroRequest");
const deleteHeroSuccess = createAction("heroes/deleteHeroSuccess");
const deleteHeroError = createAction("heroes/deleteHeroError");

const getHeroRequest = createAction("heroes/getHeroRequest");
const getHeroSuccess = createAction("heroes/getHeroSuccess");
const getHeroError = createAction("heroes/getHeroError");

const changeHeroRequest = createAction("heroes/changeHeroRequest");
const changeHeroSuccess = createAction("heroes/changeHeroSuccess");
const changeHeroError = createAction("heroes/changeHeroError");

export default {
  fetchHeroesRequest,
  fetchHeroesSuccess,
  fetchHeroesError,
  addHeroRequest,
  addHeroSuccess,
  addHeroError,
  deleteHeroRequest,
  deleteHeroSuccess,
  deleteHeroError,
  getHeroRequest,
  getHeroSuccess,
  getHeroError,
  changeHeroRequest,
  changeHeroSuccess,
  changeHeroError,
};
