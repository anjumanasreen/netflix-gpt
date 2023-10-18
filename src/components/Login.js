import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const [isSignIn,setIsSignIn] = useState(true);

    const toggleSignInForm = () => {
        console.log("toggle")
        setIsSignIn(!isSignIn)
    }


    return(
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img" />    
            </div>

            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 text-white">
                <h1 className="font-bold text-3xl p-2 mb-6">{isSignIn ? "Sign In" : "SignUp"}</h1>

                {!isSignIn && <input type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-gray-700 rounded"/>}

                
                <input type="text" placeholder="email id" className="p-4 my-2 w-full bg-gray-700 rounded"/>
                <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-700 rounded"/>

                <button className="p-4 my-6 rounded font-bold bg-red-700 w-full">{isSignIn ? "Sign In" : "SignUp"}</button>

                {/* <p className="py-4 text-gray-500">New to Netflix? <span className="text-white cursor-pointer hover:underline" onClick={toggleSignInForm}>Sign up now.</span></p> */}

                <p className="py-4 text-white cursor-pointer hover:underline" onClick={toggleSignInForm}>
                    {isSignIn ? "New to Netflix? Sign up now." : "Already registered? Sign In now"}
                </p>
                    
                
            </form>

        </div>
    )
}
export default Login