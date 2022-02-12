import axios from "axios";
import actions from "./heroes-actions";

axios.defaults.baseURL = "https://nuvem-shop.herokuapp.com/api/heroes/";

const fetchHeroes = () => (dispatch) => {
  dispatch(actions.fetchHeroesRequest());
  axios
    .get("/")
    .then(({ data }) => dispatch(actions.fetchHeroesSuccess(data)))
    .catch((error) => dispatch(actions.fetchHeroesError()));
};

const addHero = (newHero) => (dispatch) => {
  dispatch(actions.addHeroRequest());
  axios
    .post("/", newHero)
    .then(({ data }) => dispatch(actions.addHeroSuccess(data)))
    .catch((error) => dispatch(actions.addHeroError()));
};

const changeHero = (heroId, changedHero) => (dispatch) => {
  dispatch(actions.changeHeroRequest());
  axios
    .patch(`/${heroId}`, changedHero)
    .then(({ data }) => dispatch(actions.changeHeroSuccess(data)))
    .catch((error) => dispatch(actions.changeHeroError()));
};

const deleteHero = (heroID) => (dispatch) => {
  dispatch(actions.deleteHeroRequest());
  axios
    .delete(`/${heroID}`)
    .then(() => dispatch(actions.deleteHeroSuccess(heroID)))
    .catch((error) => dispatch(actions.deleteHeroError()));
};

export default { addHero, deleteHero, fetchHeroes, changeHero };
