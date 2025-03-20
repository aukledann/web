import React from 'react';
import './page.css'
import Menu from "../src/app/components/menu/menu.js"
import { artists_data } from "./artists_data";

import Link from 'next/link';

export default function Artists() {


    return (
        <div >
            <Menu />
            <h1 className='clothing-text'>Artists</h1>
            <div className='artistList'>
                {artists_data.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link href={item.path}>
                                <span className ='artistNames'>{item.name}</span>
                            </Link>
                        </li>
                    );
                })}
            </div>
            
        </div>
    );
   
}

