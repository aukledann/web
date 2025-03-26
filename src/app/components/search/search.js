"use client"
import './search.css'
import { SlMagnifier } from "react-icons/sl";
import { useState } from 'react';


export default function Search ({setResults}) {

    const [input, setImput] = useState('');


    const fetchData = (value) => {
        fetch('/api/search')
        .then((response) =>response.json())
        .then((json)=>{

            const results = json.filter((obj)=>{// search by name or artist
                return value && obj && obj.prod_artist && obj.prod_name && ( obj.prod_artist.toLowerCase().includes(value.toLowerCase()) ||obj.prod_name.toLowerCase().includes(value.toLowerCase()));
            });
            //console.log(results);
            setResults(results);
        });

    }

    const handleChange = (value) =>{
        setImput(value);
        fetchData(value);
    }
    
    return(
        <div>
            <form>
                <SlMagnifier className="searchIcon"/>
                <input className="searchBar" type="text"  size="40" placeholder="Search for products..." 
                value={input} 
                onChange={(e) => handleChange(e.target.value)} 
                />   
            </form>
            
        </div>
    );
};