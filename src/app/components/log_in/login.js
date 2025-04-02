"use client"
import { SlUserFemale } from "react-icons/sl";
import './login.css'

import { SlEnvolope } from "react-icons/sl";
import  {SlKey}  from "react-icons/sl";
import { SlClose } from "react-icons/sl";
import { useState, useEffect } from "react";
import { Siemreap } from "next/font/google";
import Link from "next/link";
import axios from "axios";


export default function Login(){

    const [loginBar, setLoginBar] = useState(false);
    const [logoutBar, setLogoutBar] = useState(false);
    const [signUpBar, setSignUpBar] = useState(false);
      
    const [isLogged, setIsLogged] = useState(false); 
    //console.log(`is logged: ${isLogged}`);

     
   const [currLoggedName, setCurrLoggedName] = useState("");
   const [currLoggedSurname, setCurrLoggedSurname] = useState("");
   const [currLoggedAddress, setCurrLoggedAddress] = useState("");
   const [currLoggedPhone, setCurrLoggedPhone] = useState("");
   const [currLoggedEmail, setCurrLoggedEmail] = useState("");
   const [currLoggedAge, setCurrLoggedAge] = useState("");
   const [currLoggedPassword, setCurrLoggedPassword] = useState("");
                               

    const showLoginBar = () => {
        setLoginBar(!loginBar);
        setSignUpBar(false);
        setLogoutBar(false);
    };

    const showLogoutBar = () => {
        setLogoutBar(!logoutBar);
        setLoginBar(false); 
        setSignUpBar(false);
    };

    const showSignUpBar = () => {
        setSignUpBar(!signUpBar);
        setLoginBar(false); 
        setLogoutBar(false);
    };

    useEffect (() =>{
        if(loginBar || signUpBar || logoutBar){
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



    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [surnameRegister, setSurnameRegister] = useState('');
    const [ageRegister, setAgeRegister] = useState('');
    const [addressRegister, setAddressRegister] = useState('');
    const [phoneRegister, setPhoneRegister] = useState('');
 


    const register = async () => {
        if (!nameRegister || !surnameRegister || !ageRegister || !addressRegister || !phoneRegister || !emailRegister || !passwordRegister) {
            alert("All fields are required.");
            return;  
        }

        try {
            const response = await axios.post("/api/register", {
                name: nameRegister,
                surname: surnameRegister,
                age: parseInt(ageRegister),
                address: addressRegister,
                phone: phoneRegister,
                email: emailRegister,
                password: passwordRegister
            });

            alert("Registration successful!");
            showSignUpBar();
            setIsLogged(true);
            //console.log(`is logged: ${isLogged} after registrtion`);

            const data = response.data;
             
            setCurrLoggedName(data.data.cust_name)
            setCurrLoggedSurname(data.data.cust_surname)
            setCurrLoggedAddress(data.data.cust_address)
            setCurrLoggedAge(data.data.cust_age)
            setCurrLoggedPhone(data.data.cust_phone)
            setCurrLoggedEmail(data.data.cust_email)
            setCurrLoggedPassword(data.data.cust_password)
            
        
            setNameRegister('');
            setSurnameRegister('');
            setAgeRegister('');
            setAddressRegister('');
            setPhoneRegister('');
            setEmailRegister('');
            setPasswordRegister('');

        } catch (error) {
            console.error("Error registering user:", error.response?.data || error.message);
            alert(error.response?.data?.error || "Error registering. Please try again.");
        }

    }

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState(''); 

    const [loginStatus, setLoginStatus] = useState('');

    const log = async() =>{
        if (!emailLogin || !passwordLogin) {
            alert("All fields are required.");
            return;  
        }

        try {
            const response = await axios.post("/api/login", {
                email: emailLogin,
                password: passwordLogin
            });
    
            alert("Login successful!");
            showLoginBar();
            setIsLogged(!isLogged);
            console.log(`is logged: ${isLogged} after login`);
            
            if (!response || !response.data) {
                throw new Error("No data received from server");
            }

            const data = response.data;
            console.log("DATA RETURNED:", data);
            //console.log("DATA RETURNED:", data.data.cust_name);
            
            setCurrLoggedName(data.data.cust_name)
            setCurrLoggedSurname(data.data.cust_surname)
            setCurrLoggedAddress(data.data.cust_address)
            setCurrLoggedAge(data.data.cust_age)
            setCurrLoggedPhone(data.data.cust_phone)
            setCurrLoggedEmail(data.data.cust_email)
            setCurrLoggedPassword(data.data.cust_password)
           
            if(response.data.message){
                setLoginStatus(response.data.message);
            }
            else{
                setLoginStatus(response.data[0].email);
            } 
            
    
        } catch (error) {
            console.error("Log in error", error.response?.data || error.message);
            alert(error.response?.data?.error || "Login error. Please try again.");
        }
    }

    const logout = async() =>{
        showLogoutBar();
        setIsLogged(false);
        //console.log(`is logged: ${isLogged} after logout`);
    }



    const save = async() =>{

        try{

            const response =  await axios.put('/api/save', {
                name: nameRegister,
                surname: surnameRegister,
                age: parseInt(ageRegister),
                address: addressRegister,
                phone: phoneRegister,
                email: emailRegister,
                password: passwordRegister
            });

            const data = response.data;
            console.log("DATA RETURNED:", data);
            setCurrLoggedName(data.data.cust_name)
            setCurrLoggedSurname(data.data.cust_surname)
            setCurrLoggedAddress(data.data.cust_address)
            setCurrLoggedAge(data.data.cust_age)
            setCurrLoggedPhone(data.data.cust_phone)
            setCurrLoggedEmail(data.data.cust_email)
            setCurrLoggedPassword(data.data.cust_password)
        }catch(error){ 
            console.error("Saving error", error.response?.data || error.message);
        }

    }




    return(
        <div>
            <div className='login'>
                <SlUserFemale className="UserIcon" onClick={!isLogged ? showLoginBar : showLogoutBar}></SlUserFemale>
                <p className="TextLog"> Account</p>
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
                            
                            <input type="text" name="email" placeholder="Email"  
                                onChange={(e) => {
                                    setEmailLogin(e.target.value)
                                }}>

                            </input>

                            <input type="password" name="password" placeholder="Password" 
                                onChange={(e) => {
                                    setPasswordLogin(e.target.value)
                            }}>
                            </input>

                            <input onClick={log } type="login" value="Login" readOnly></input>

                            <div className="signUp" onClick={showSignUpBar}>
                                Don't have an account? Sign Up!
                            </div>

                            <h1>{loginStatus}</h1>
                        </form>
                    </div>
                </ul>
            </nav>



            <nav className={logoutBar ? 'lnav-logout active' : 'lnav-logout'}>
                <ul className="lnav-logout-items" onCanPlay={showLogoutBar}>

                <li className="lnavbar-logout-toggle">
                        <SlClose className="LogoutIconCross" size={30} onClick={showLogoutBar} />
                    </li>

                    <div className='logout-container'>

                        <div className="header">
                            <div className='logout-text'>My Account</div>
                        </div>


                        <div className='dataList'>
                            <p className='edit-text'>View/Edit your data:</p>

                            <input type="text" name="name" placeholder={currLoggedName}
                                onChange={(e) => {
                                    setNameRegister(e.target.value)
                                }}
                            />


                            <input type="text" name="surname" placeholder={currLoggedSurname}
                                onChange={(e) => {
                                    setSurnameRegister(e.target.value)
                                }}
                            />

            
                            <input type="text" name="age" placeholder={currLoggedAge}
                                onChange={(e) => {
                                    setAgeRegister(e.target.value)
                                }}
                            />

                         
                            <input type="text" name="address" placeholder={currLoggedAddress}
                                onChange={(e) => {
                                    setAddressRegister(e.target.value)
                                }}
                            />

                           
                            <input type="text" name="number" placeholder={currLoggedPhone}
                                onChange={(e) => {
                                    setPhoneRegister(e.target.value)
                                }}
                            
                            />

                           
                            <input type="text" name="email" placeholder={currLoggedEmail}
                                onChange={(e) => {
                                    setEmailRegister(e.target.value)
                                }}
                            />

                      
                            <input type="password" name="password" placeholder={currLoggedPassword}
                                onChange={(e) => {
                                    setPasswordRegister(e.target.value)
                                }}
                            />
                            
                        </div>

                        <button onClick={save} className="save" type="button" >Save</button>
                        <button onClick={logout} className="logout" type="button">Logout</button>
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
                     
                            <input type="text" name="name" placeholder="Name" 
                                onChange={(e) => {
                                    setNameRegister(e.target.value)
                                }}
                            />


                            <input type="text" name="surname" placeholder="Surname" 
                                onChange={(e) => {
                                    setSurnameRegister(e.target.value)
                                }}
                            />

            
                            <input type="text" name="age" placeholder="Age" 
                                onChange={(e) => {
                                    setAgeRegister(e.target.value)
                                }}
                            />

                         
                            <input type="text" name="address" placeholder="Address" 
                                onChange={(e) => {
                                    setAddressRegister(e.target.value)
                                }}
                            />

                           
                            <input type="text" name="number" placeholder="Phone Number"
                                onChange={(e) => {
                                    setPhoneRegister(e.target.value)
                                }}
                            
                            />

                           
                            <input type="text" name="email" placeholder="Email" 
                                onChange={(e) => {
                                    setEmailRegister(e.target.value)
                                }}
                            />

                      
                            <input type="password" name="password" placeholder="Password" 
                                onChange={(e) => {
                                    setPasswordRegister(e.target.value)
                                }}
                            />

                            <input onClick={register} type="signup" value="SignUp" readOnly></input>

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