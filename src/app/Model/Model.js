import React, { useState } from 'react'
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
// import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../Firebaseconfig/Firebaseconfig';

export default function Model({ setshowModel }) {

    
    let googleLogin = () => {
        // const auth = getAuth(app);
        // signInWithPopup(auth, provider)
        //     .then((result) => {
        //         // This gives you a Google Access Token. You can use it to access the Google API.
        //         const credential = GoogleAuthProvider.credentialFromResult(result);
        //         const token = credential.accessToken;
        //         // The signed-in user info.
        //         const user = result.user;
        //         // IdP data available using getAdditionalUserInfo(result)
        //         // ...
        //         console.log(token,user)

        //     })
        console.log("neeshu")
    }
    return (
        <>
            <section>

                <div className={` h-[100vh] fixed z-20 w-[100%] bg-[rgba(0,0,0,.8)] text-center  text-white flex justify-center items-center `} >
                    <span className='text-4xl absolute top-[17%] right-[8%] lg:top-[20%] lg:right-[25%] md:top-[15%] md:right-[20%] cursor-pointer text-white z-30' onClick={() => setshowModel(false)}>  &times;</span>
                    <div className='border py-5  lg:w-[40%]  md:w-[50%] bg-white rounded-lg'>
                        <form >
                            <div className='p-5'>

                                <input type="text" id="first_name" name='Paitiant_name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" />
                            </div>
                            <div className='p-5'>

                                <input type="text" id="first_name" name='Paitiant_name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                            </div>
                            <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[82%] lg:w-[52%] sm:w-auto px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                        </form>
                        <h2 className='text-black py-5 text-2xl'>or</h2>
                        <div className='flex justify-center items-center border-2 py-3 px-5 w-[80%] lg:w-[52%] m-auto rounded-lg lg:gap-5 gap-1 '>
                            <AiOutlineGooglePlus className='text-3xl text-green-800' />
                            <button className='text-black' onClick={googleLogin}>
                                Google Login</button>
                        </div>
                        <div className='mt-5 flex justify-center items-center border-2 py-3 px-5 w-[80%] lg:w-[52%] m-auto rounded-lg lg:gap-5 gap-1 '>
                            <FaFacebookF className='text-2xl text-green-800' />
                            <button className='text-black'>
                                Facebook Login</button>
                        </div>
                        <div className='mt-5 flex justify-center items-center border-2 py-3 px-5 w-[80%] lg:w-[52%] m-auto rounded-lg lg:gap-5 gap-1 '>
                            <SiInstagram className='text-2xl me-[20px] text-green-800' />
                            <button className='text-black'>
                                Insta Login</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
