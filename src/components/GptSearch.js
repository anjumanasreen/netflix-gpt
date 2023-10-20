import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearcgBar"
import {BG_URL} from "../utils/constants"

const GptSearch = () => {
    return(
        <>
            <div className="fixed -z-10">
                <img className="object-cover h-screen w-screen"  src={BG_URL} alt="background-img" />    
            </div>
            <div className="">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}
export default GptSearch