"use client"
import React, {useState, useEffect} from "react";

import { SlMenu } from "react-icons/sl";

import { SlClose } from "react-icons/sl";
import './menu.css'

import Link from 'next/link';
import { menu_data } from "./menu_data";


export default function Menu(){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    useEffect(() => {
       
        if (sidebar) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; 
            document.body.style.height = '100%';  
        } else {
            document.body.style.overflow = 'auto'; 
            document.documentElement.style.overflow = 'auto'; 
            document.body.style.height = 'auto'; 
        }
    });

    return(
        <div>
            <div className="menu">

                <SlMenu className="MenuIcon" onClick={showSidebar}></SlMenu>

                <p className="TextMenu">Menu</p>
            </div>

            {sidebar && <div className="overlay" onClick={showSidebar}></div>}

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onCanPlay={showSidebar}>
                    <li className="navbar-toggle">
                    <SlClose className="MenuIconCross" onClick={showSidebar}></SlClose>
                    </li>
                    {menu_data.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link href={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}