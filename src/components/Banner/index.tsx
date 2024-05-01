import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFilePath } from "../../utils/get-file-path";
import styles from "./Banner.module.css";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import movieList from "../../data/movie-list.json";
import M from "materialize-css";

const Banner = () => {
  const [title, setTitle] = useState("");
  const [style, setStyle] = useState({});
  const changeBg = (bg: string, title: string) => {
    setStyle({ backgroundImage: `url(${getFilePath(bg)})` });
    setTitle(title);
  };
  useEffect(() => {
    changeBg(movieList[0].imagePathBg, movieList[0].title);
    setTitle(movieList[0].title);
  }, []);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    // @ts-ignore
    M.Carousel.init(carousel, {
      onCycleTo: (current) => {
        const referense = current.getAttribute("href");
        const movie = movieList.find((m) => m.href === referense);
        changeBg(movie?.imagePathBg || "", movie?.title || "");
      },
    });
  }, []);

  return (
    <section className={styles.banner} style={style}>
      <div className={styles.banner_content + " " + styles.active}>
        <img src={getFilePath(title)} className={styles.banner_title} alt="" />
        <h4 className={styles.banner_details}>
          <span>2024</span>
          <span>
            <i>12+</i>
          </span>
          <span>2h 14min</span>
          <span>Romance</span>
        </h4>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet
          cupiditate, similique dolore deserunt accusantium non repellat
          doloremque neque libero dolor, suscipit rerum voluptate commodi saepe
          odit reiciendis adipisci? Hic!
        </p>
        <div className={styles.banner_buttons}>
          <a href="#">
            <FontAwesomeIcon icon={faPlay} /> Watch
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPlus} /> My List
          </a>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default Banner;
