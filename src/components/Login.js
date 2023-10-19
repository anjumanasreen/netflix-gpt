import { useRef, useState } from "react"
import Header from "./Header"
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {USER_AVATAR} from "../utils/constants"


const Login = () => {

    const [isSignIn,setIsSignIn] = useState(true);

    const name = useRef(null);
    const email = useRef(null)
    const password = useRef(null)
    const [errorMessage,setErrorMessage] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }
    
    const handleButtonClick = () => {
        //Validate form data
        const message = checkValidData(email.current.value,password.current.value)
        setErrorMessage(message)

        if(message ) return

        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/browse")
                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: USER_AVATAR
                })
                .then(() => {
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(
                        addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                        })
                    )
                })
                .catch((error) => {
                    setErrorMessage(error.message)
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)

            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
        }
    }


    return(
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img" />    
            </div>

            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 text-white" onSubmit={(e) => e.preventDefault()}>
                <h1 className="font-bold text-3xl p-2 mb-6">{isSignIn ? "Sign In" : "SignUp"}</h1>

                {!isSignIn && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-gray-700 rounded"/>}

                <input ref={email} type="text" placeholder="email id" className="p-4 my-2 w-full bg-gray-700 rounded"/>
                <input ref={password} type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-700 rounded"/>
                <p className="text-red-500 font-bold tex-lg py-2">{errorMessage}</p>

                <button className="p-4 my-6 rounded font-bold bg-red-700 w-full" onClick={handleButtonClick}>{isSignIn ? "Sign In" : "SignUp"}</button>

                {/* <p className="py-4 text-gray-500">New to Netflix? <span className="text-white cursor-pointer hover:underline" onClick={toggleSignInForm}>Sign up now.</span></p> */}

                <p className="py-4 text-white cursor-pointer hover:underline" onClick={toggleSignInForm}>
                    {isSignIn ? "New to Netflix? Sign up now." : "Already registered? Sign In now"}
                </p>
                    
                
            </form>

        </div>
    )
}
export default Login