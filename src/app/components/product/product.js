"use client"
import { SlBag } from "react-icons/sl";
import './product.css'


export default function Bag(){
    return(
        <div>
            <SlBag className="BagIcon"></SlBag>

            <p className="TextBag">Bag</p>
        </div>
    );
};