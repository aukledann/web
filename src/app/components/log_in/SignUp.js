"use client"
import { SlUserFemale } from "react-icons/sl";
import './login.css'

import { SlEnvolope } from "react-icons/sl";
import  {SlKey}  from "react-icons/sl";
import { SlClose } from "react-icons/sl";
import { useState, useEffect } from "react";

export default function SignUp(){

    const [signBar, setSignBar] = useState([]);
    const [signUpBar, setSignUpBar] = useState(false);
    const showSignBar = () => setSignBar(!signBar);


    useEffect (() =>{
        if(signBar){
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

    useEffect (() =>{
        if(signBar){
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
            <div className='signup'>
                <SlUserFemale className="UserIcon" onClick={showLoginBar}></SlUserFemale>
                <p className="TextLog"> Sign Up</p>
            </div>

            {signBar && <div className="overlay" onClick={showSignBar}></div>}


            <nav className={signBar ? 'lnav-login active' : 'lnav-login'}>

                <ul className="lnav-login-items">
                    <li className="lnavbar-login-toggle">
                        <SlClose className="LoginIconCross" size={30} onClick={showSignBar} />
                    </li>

                    <div className='login-container'>

                        <div className="header">
                            <div className='login-text'>Sign Up</div>
                        </div>

                        <form className='inputs'>
                            <div className="name">Name</div>
                            <input type="text" name="name" placeholder="Name"></input>

                            <div className="surname">Surname</div>
                            <input type="text" name="surname" placeholder="Surname"></input>

                            <div className="age">Age</div>
                            <input type="text" name="age" placeholder="Age"></input>

                            <div className="address">Address</div>
                            <input type="text" name="address" placeholder="Address"></input>

                            <div className="number">Phone Number</div>
                            <input type="text" name="number" placeholder="Number"></input>

                            <div className="email">Email</div>
                            <input type="text" name="email" placeholder="Email"></input>

                            <div className="password">Password</div>
                            <input type="text" name="password" placeholder="Password"></input>

                            <input type="login" value="Login"></input>

                            
                            <div className="signUp">Don't have an account? Sign Up!</div>
                        </form>
                    </div>
                </ul>
            </nav>


            <nav className={signUpBar ? 'lnav-login active' : 'lnav-login'}>
                <ul className="lnav-login-items">
                    <li className="lnavbar-login-toggle">
                        <SlClose className="LoginIconCross" size={30} onClick={showSignUpBar} />
                    </li>

                    <div className='login-container'>
                        <div className="header">
                            <div className='login-text'>Sign Up</div>
                        </div>

                        <form className='inputs'>
                            <div className="name">Name</div>
                            <input type="text" name="name" placeholder="Name" />

                            <div className="surname">Surname</div>
                            <input type="text" name="surname" placeholder="Surname" />

                            <div className="age">Age</div>
                            <input type="text" name="age" placeholder="Age" />

                            <div className="address">Address</div>
                            <input type="text" name="address" placeholder="Address" />

                            <div className="number">Phone Number</div>
                            <input type="text" name="number" placeholder="Number" />

                            <div className="email">Email</div>
                            <input type="text" name="email" placeholder="Email" />

                            <div className="password">Password</div>
                            <input type="password" name="password" placeholder="Password" />

                            <input type="submit" value="Sign Up" />

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