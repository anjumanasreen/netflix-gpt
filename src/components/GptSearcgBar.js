import { useSelector, useDispatch } from "react-redux"
import language from "../utils/languageConstant"
import { useRef } from "react"
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/constants"
import {addGptMovieResult} from "../utils/gptSlice"

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.language)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&page=1", API_OPTIONS
        )
        const json = await data.json()
    }

    const handleGptSearchClick = async () => {
        

        const gptQuery = "Act as a Movie Recommendation systema nd suggest some movies for the query" +  searchText.current.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Shole, Don, Khushi, Jawan"
        //API call
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: searchText.current.value}],
            model: "gpt-3.5-turbo"
        })
        if(!gptResults.choices){
            return
        }
         
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
        const promiseArray = gptMovies.map()(movies=>searchMovieTMDB(movies)) 

        const tmdbResults = await Promise.all(promiseArray)
        
        dispatch(addGptMovieResult({movieNames: gptMovies, movieReults: tmdbResults}))

    }

    return(
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
            <form className="bg-black w-full md:w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type="text" placeholder={language[langKey].gptSearchPlaceHolder} className="p-4 m-4 rounded col-span-9"/>
                <button className="py-2 px-4 bg-red-700 text-white col-span-3 m-4 rounded" onClick={handleGptSearchClick}>{language[langKey].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar