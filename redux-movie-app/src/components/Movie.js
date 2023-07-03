import PropTypes from "prop-types"; 
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({loading, movies}) {
    console.log(movies);
    return(
        <>
        {loading ? <h1>Loading...</h1> : 
        <>
        <h1 className={styles.title}><strong>All Movies</strong></h1>
        <div className={styles.MoviePage}>
        {movies.map( movie => 
        <div key={movie.id}>
            <div className={styles.thum}>
                <Link to={`/movie/${movie.id}`}> 
                <img src={movie.large_cover_image} className={styles.img} alt="영화 포스터"></img>
                </Link>
            </div>
            <div className={styles.subject}>{movie.title}</div> 
            <div className={styles.summary}>{movie.summary.length > 50 ? movie.summary.substr(0, 50) + `.....`: movie.summary }</div> 
        </div>)}
        </div>
        </> }
        </> 
    );
} 

export default Movie;