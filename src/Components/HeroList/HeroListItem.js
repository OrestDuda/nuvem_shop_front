import React from "react";
import { useDispatch, useSelector } from "react-redux";
import heroesOperations from "../../Redux/Nuvem/heroes-operations";
import { useNavigate } from "react-router-dom";
import styles from "../HeroList/heroList.module.css";
import heroesSelectors from "../../Redux/Nuvem/heroes-selectors";

function HeroListItem({ hero, openModal }) {
  const heroes = useSelector(heroesSelectors.getHeroes);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const routeChange = (hero, id) => {
    navigate("/edit", {
      state: { hero: hero, heroId: id },
    });
  };

  const editHero = function (id, body) {
    const heroToEdit = heroes.find((hero) => hero._id === id);
    routeChange(heroToEdit, id);
  };
  return (
    <div className={"list_item"}>
      <img src={hero.Images} height={75} alt={hero.nickname} />
      <h2 className={styles.heroName}>{hero.nickname}</h2>
      <div className={styles.buttonContainer}>
        <button
          className={styles.buttonMain}
          onClick={() => {
            openModal(hero);
          }}
        >
          View
        </button>
        <button
          className={styles.buttonMain}
          onClick={() => {
            editHero(hero._id);
          }}
        >
          Edit
        </button>
        <button
          className={styles.buttonMain}
          onClick={() => dispatch(heroesOperations.deleteHero(hero._id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default HeroListItem;
