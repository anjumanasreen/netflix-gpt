import { useDispatch, useSelector } from 'react-redux';
import logo from '../logo.png'
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {onAuthStateChanged,signOut} from "firebase/auth"
import { addUser, removeUser } from "../utils/userSlice"
import {SUPPORTED_LANGUAGES, USER_AVATAR} from "../utils/constants"
import {toggleGptSearchView} from "../utils/gptSlice"
import language from '../utils/languageConstant';
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);


    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error")          
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({uid:user.uid, email:user.email, displayName:user.displayName, photoUrl: user.photoURL}))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });

        //this will be called when component unmount
        return () => unsubscribe()
    },[])
    
    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }


    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img className="w-64 mx-auto md:mx-0" src={logo} alt="logo" />
            {user && (
                <div className='flex'>
                    {showGptSearch && <select className='rounded py-2 bg-gray-900 text-white px-4 h-12' onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map(language => 
                            <option key={language.identifier} value={language.identifier}>{language.name}</option>)
                        }
                    </select>}
                    <button className='bg-purple-800 h-12 py-2 px-4 mx-4 text-white rounded'  onClick={handleGptSearchClick}> {showGptSearch ? "Homepage" : "GPT Search"}</button>
                    <img className='w-12 h-12' src={USER_AVATAR} alt="use-icon" />
                    <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
                </div>)
            }
        </div>
    )
}
export default Header