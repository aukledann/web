"use client"
import { SlMenu } from "react-icons/sl";
import './menu.css'


export default function Menu(){
    return(
        <div>
            <SlMenu className="MenuIcon"></SlMenu>

            <p className="TextMenu">Menu</p>
        </div>
    );
};