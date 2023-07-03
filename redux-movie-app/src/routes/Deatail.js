import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Detail.module.css";

function Detail() {
  const { movie_id } = useParams();
  console.log(movie_id);
  const [myMovie, SetmyMovie] = useState(null);
  const { movies } = useSelector((state) => state.MovieStore);
  const navigate = useNavigate();

  useEffect(() => {
    const movie = movies.filter((item, index) => String(item.id) === movie_id);
    console.log(movie);
    if (movie.length > 0) {
      SetmyMovie(movie[0]);
    }
  }, [movies]);
  return (
    <div className={styles.DetailPage}>
      <div onClick={() => navigate(-1)} className={styles.back}>
        뒤로가기
      </div>
      {myMovie && (
        <>
          <div className={styles.thum}>
            <img
              src={myMovie.large_cover_image}
              className={styles.img}
              alt="영화 포스터"
            ></img>
          </div>
          <div className={styles.inner}>
            <div className={styles.detail}>
              영화 제목
              <span className={styles.detailspan}>{myMovie.title}</span>
            </div>
            <div className={styles.detail}>
              영화 ID
              <span className={styles.detailspan}>{myMovie.id}</span>
            </div>
            <div className={styles.detail}>
              영화 소개
              <span className={styles.detailspan}>
                {myMovie.description_full}
              </span>
            </div>
            <div className={styles.detail}>
              개봉 날짜
              <span className={styles.detailspan}>{myMovie.date_uploaded}</span>
            </div>
            <div className={styles.detail}>
              요약
              <span className={styles.detailspan}>{myMovie.summary}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Detail;
