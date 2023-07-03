import { useState,useEffect } from "react";
import Movie from "../components/Movie";

function Home({loading, movies}) {

    return(
        <div>
            <Movie loading={loading} movies={movies}/>
        </div>
    );
}

export default Home;