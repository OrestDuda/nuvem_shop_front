import React, { useState } from "react";
import HeroListItem from "./HeroListItem";
import Pagination from "../Pagination/Pagination";
import heroesSelectors from "../../Redux/Nuvem/heroes-selectors";
import { useSelector } from "react-redux";

function HeroList({ openModal }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [heroesPerPage] = useState(5);
  const heroes = useSelector(heroesSelectors.getHeroes);

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentHero = heroes.slice(indexOfFirstHero, indexOfLastHero);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ul>
        {currentHero.map((hero) => (
          <li key={hero._id}>
            <HeroListItem hero={hero} openModal={openModal} />
          </li>
        ))}
      </ul>
      <Pagination
        heroesPerPage={heroesPerPage}
        totalHeroes={heroes.length}
        paginate={paginate}
      />
    </>
  );
}
export default HeroList;
