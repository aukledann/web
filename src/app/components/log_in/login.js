"use client"
import { SlUserFemale } from "react-icons/sl";
import './login.css'


export default function Login(){
    return(
        <div>
            <SlUserFemale className="UserIcon"></SlUserFemale>
        
            <p className="TextLog"> Log in</p>
        </div>
    );
};