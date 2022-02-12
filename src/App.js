import React, { useEffect, useState } from "react";
import HeroList from "./Components/HeroList/HeroList";
import Modal from "react-modal";
import Header from "./Components/Header/Header";
import heroesOperations from "./Redux/Nuvem/heroes-operations";
import { useDispatch } from "react-redux";
import HeroDetailsView from "./Components/HeroList/HeroDetailsView";
import { Routes, Route } from "react-router-dom";
import NewHero from "./Components/NewHero/newHero";
import EditHero from "./Components/EditHero/EditHero";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [hero, setHero] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(heroesOperations.fetchHeroes());
  }, [dispatch]);

  function openModal(foundedHero) {
    setIsOpen(true);
    setHero(foundedHero);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header />
      <div className={"container"}>
        <Routes>
          <Route path="/" element={<HeroList openModal={openModal} />} />
          <Route path="/new" element={<NewHero />} />
          <Route path="/edit" element={<EditHero />} />
        </Routes>
        <Modal
          className={"modal"}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div>
            <button onClick={closeModal}>Close</button>
          </div>
          {hero !== {} && <HeroDetailsView hero={hero} />}
        </Modal>
      </div>
    </>
  );
}
export default App;
