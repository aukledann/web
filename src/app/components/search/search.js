"use client"
import './search.css'
import { SlMagnifier } from "react-icons/sl";


export default function Search(){
    return(
        <div>
            <form>
                <SlMagnifier className="searchIcon"/>
                <input className="searchBar" type="text"  size="40" placeholder="Search for products..."></input>   
            </form>
            
        </div>
    );
};