import MovieList from "./MovieList"
import { UseSelector, useSelector } from "react-redux"

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    return(
        <div className="bg-black -mt-52 pl-12 relative z-20">
           
                <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Trending"} movies={movies.trendingMovies}/>
                <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>          
        </div>
    )
}
export default SecondaryContainer