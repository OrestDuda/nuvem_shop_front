import React, { useState } from "react";
import { useDispatch } from "react-redux";
import heroOperations from "../../Redux/Nuvem/heroes-operations";
import styles from "../NewHero/newHero.module.css";
import { useNavigate } from "react-router-dom";

function NewHero() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newHero, setNewHero] = useState({
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
    Images: "",
  });

  const routeChange = () => {
    navigate("/");
  };
  const handleChange = (event) => {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    setNewHero((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitForm = (event) => {
    event.preventDefault();
    dispatch(heroOperations.addHero(newHero));
    setNewHero({
      nickname: "",
      real_name: "",
      origin_description: "",
      superpowers: "",
      catch_phrase: "",
      Images: "",
    });
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
          value={newHero.nickname}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="real_name">
          Real name
        </label>
        <input
          className={styles.input}
          type="text"
          name="real_name"
          value={newHero.real_name}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="origin_description">
          Origin description
        </label>
        <input
          className={styles.input}
          type="text"
          name="origin_description"
          value={newHero.origin_description}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="superpowers">
          Superpowers
        </label>
        <input
          className={styles.input}
          type="text"
          name="superpowers"
          value={newHero.superpowers}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="catch_phrase">
          Catch phrase
        </label>
        <input
          className={styles.input}
          type="text"
          name="catch_phrase"
          value={newHero.catch_phrase}
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
          value={newHero.Images}
          onChange={handleChange}
        />
      </div>

      <div className={styles.btn_wrapper}>
        <button type="submit" className={styles.buttonAdd}>
          Add New hero
        </button>
      </div>
    </form>
  );
}
export default NewHero;
