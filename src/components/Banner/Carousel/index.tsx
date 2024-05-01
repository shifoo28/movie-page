import {
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import { getFilePath } from "../../../utils/get-file-path";
import styles from "./Carousel.module.css";
import movieList from "../../../data/movie-list.json";

const Carousel = () => {
  const [active, setActive] = useState(false);

  const toggleVideo = () => {
    setActive(!active);
  };

  return (
    <Fragment>
      <div className={styles.carousel_box}>
        <div className={`carousel ${styles.carousel}`}>
          {movieList.map((movie, index) => {
            return (
              <a
                className={`carousel-item ${styles.carousel_item}`}
                href={movie.href}
                key={index}
              >
                <img src={getFilePath(movie.imagePathCarousel)} alt="" />
              </a>
            );
          })}
        </div>
      </div>
      <a href="#" className={styles.play} onClick={toggleVideo}>
        <FontAwesomeIcon icon={faPlayCircle} className={styles.play_image} />
        Watch Trailer
      </a>
      <ul className={styles.sci}>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
      <div className={`${styles.trailer} ${active && styles.active}`}>
        <video src={getFilePath("city.mp4")} muted controls></video>
        <img
          src={getFilePath("close.png")}
          className={styles.close}
          alt=""
          onClick={toggleVideo}
        />
      </div>
    </Fragment>
  );
};

export default Carousel;
