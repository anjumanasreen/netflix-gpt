import MovieList from "./MovieList"
import { UseSelector, useSelector } from "react-redux"

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    return(
        <div className="bg-black">
            <div className="mt-0 md:mt-[140px] lg:-mt-[10px] xl:-mt-[140px] pl-12 relative z-20">
                <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Trending"} movies={movies.trendingMovies}/>
                <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>          
            </div>
        </div>
        
    )
}
export default SecondaryContainer