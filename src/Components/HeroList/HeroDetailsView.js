import styles from "../HeroList/heroList.module.css";

function HeroDetailsView({ hero }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src={hero.Images} alt={hero.nickname} />
        </div>
        <div className={styles.dataContainer}>
          <p>{hero.nickname}</p>
          <p>{hero.real_name}</p>
          <p>{hero.superpowers}</p>
          <p>{hero.origin_description}</p>
          <p>{hero.catch_phrase}</p>
        </div>
      </div>
    </>
  );
}
export default HeroDetailsView;
