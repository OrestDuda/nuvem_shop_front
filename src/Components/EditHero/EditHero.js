import React, { useState } from "react";
import { useDispatch } from "react-redux";
import heroOperations from "../../Redux/Nuvem/heroes-operations";
import styles from "../NewHero/newHero.module.css";
import { useLocation, useNavigate } from "react-router-dom";

function EditHero() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const hero = location.state.hero;
  const heroId = location.state.heroId;

  const [updHero, setUpdHero] = useState({
    _id: heroId,
    nickname: hero.nickname,
    real_name: hero.real_name,
    origin_description: hero.origin_description,
    superpowers: hero.superpowers,
    catch_phrase: hero.catch_phrase,
    Images: hero.Images,
  });

  const routeChange = () => {
    navigate("/");
  };

  const handleChange = (event) => {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    setUpdHero((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitForm = (event) => {
    event.preventDefault();
    dispatch(heroOperations.changeHero(heroId, updHero));
    routeChange();
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor="nickname">
          Nickname
        </label>
        <input
          className={styles.input}
          type="text"
          name="nickname"
          required
          value={updHero.nickname}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="real_name">
          Real name
        </label>
        <input
          className={styles.input}
          type="text"
          name="real_name"
          required
          value={updHero.real_name}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="origin_description">
          Origin description
        </label>
        <input
          className={styles.input}
          type="text"
          name="origin_description"
          required
          value={updHero.origin_description}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="superpowers">
          Superpowers
        </label>
        <input
          className={styles.input}
          type="text"
          name="superpowers"
          required
          value={updHero.superpowers}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="catch_phrase">
          Catch phrase
        </label>
        <input
          className={styles.input}
          type="text"
          name="catch_phrase"
          required
          value={updHero.catch_phrase}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="Images">
          Images
        </label>
        <input
          className={styles.input}
          type="text"
          name="Images"
          required
          value={updHero.Images}
          onChange={handleChange}
        />
      </div>

      <div className={styles.btn_wrapper}>
        <button type="submit" className={styles.buttonAdd}>
          Save Update
        </button>
      </div>
    </form>
  );
}
export default EditHero;
