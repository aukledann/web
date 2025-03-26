"use client"
import { SlUserFemale } from "react-icons/sl";
import './login.css'

import { SlEnvolope } from "react-icons/sl";
import  {SlKey}  from "react-icons/sl";
import { SlClose } from "react-icons/sl";
import { useState, useEffect } from "react";
import { Siemreap } from "next/font/google";
import SignUp from "./SignUp";
import Link from "next/link";


export default function Login(){

    const [loginBar, setLoginBar] = useState(false);
    const [signUpBar, setSignUpBar] = useState(false);

    const showLoginBar = () => {
        setLoginBar(!loginBar);
        setSignUpBar(false);
    };

    
    const showSignUpBar = () => {
        setSignUpBar(!signUpBar);
        setLoginBar(false); 
    };

    useEffect (() =>{
        if(loginBar || signUpBar){
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; 
            document.body.style.height = '100%';  
        }
        else{
            document.body.style.overflow = 'auto'; 
            document.documentElement.style.overflow = 'auto'; 
            document.body.style.height = 'auto'; 
        }
    });
    
    return(
        <div>
            <div className='login'>
                <SlUserFemale className="UserIcon" onClick={showLoginBar}></SlUserFemale>
                <p className="TextLog"> Log in</p>
            </div>

            {loginBar && <div className="overlay" onClick={showLoginBar}></div>}
            {signUpBar && <div className="overlay" onClick={showSignUpBar}></div>}



            <nav className={loginBar ? 'lnav-login active' : 'lnav-login'}>

                <ul className="lnav-login-items" onCanPlay={showLoginBar}>
                    <li className="lnavbar-login-toggle">
                        <SlClose className="LoginIconCross" size={30} onClick={showLoginBar} />
                    </li>

                    <div className='login-container'>

                        <div className="header">
                            <div className='login-text'>Log In</div>
                        </div>

                        <form className='inputs'>
                            
                            <input type="text" name="email" placeholder="Email"></input>

                            <input type="text" name="password" placeholder="Password"></input>

                            <input type="login" value="Login" readOnly></input>

                            <div className="signUp" onClick={showSignUpBar}>
                                Don't have an account? Sign Up!
                            </div>
                        </form>
                    </div>
                </ul>
            </nav>

            <nav className={signUpBar ? 'snav-sign active': 'snav-sign'}>
                <ul className="snav-sign-items">
                    <li className="snavbar-sign-toggle">
                        <SlClose className="SignIconCross" size={30} onClick={showSignUpBar} />
                    </li>

                    <div className='sign-container'>
                        <div className="header">
                            <div className='sign-text'>Sign Up</div>
                        </div>

                        <form className='inputs'>
                     
                            <input type="text" name="name" placeholder="Name" />


                            <input type="text" name="surname" placeholder="Surname" />

            
                            <input type="text" name="age" placeholder="Age" />

                         
                            <input type="text" name="address" placeholder="Address" />

                           
                            <input type="text" name="number" placeholder="Phone Number" />

                           
                            <input type="text" name="email" placeholder="Email" />

                      
                            <input type="password" name="password" placeholder="Password" />

                            <input type="signup" value="SignUp" readOnly></input>

                            <div className="signUp" onClick={showLoginBar}>
                                Already have an account? Log In!
                            </div>
                        </form>
                    </div>
                </ul>
            </nav>
        </div>
    );
};