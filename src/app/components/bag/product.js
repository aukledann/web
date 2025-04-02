"use client"
import { SlBag } from "react-icons/sl";
import './product.css'


export default function Bag(){
    const numProductsInsideBag = 0;

    
    return(
        <div>
            <SlBag className="BagIcon"></SlBag>

            <p className="TextBag">Bag</p>
        </div>
    );
};