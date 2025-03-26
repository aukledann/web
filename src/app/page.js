"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import {Slider} from "./components/slider/slider"
import {slides} from "./slider_slides.json";
import Bag from "./components/product/product.js"
import Search from "./components/search/search.js"
import {SearchResultsList }from "./components/search/search_results_list"
import Login from "./components/log_in/login.js"
import Menu from "./components/menu/menu.js"
import AboutUs from "./components/about_us/about_us_text.js"
import SocialMedia from "./components/social_media/social_media.js"
import Link from "next/link";


export default function Home() {

  const [results, setResults] = useState([]);

  return (
    <div>
      <h2 className={styles.Text}>MerchByAnn</h2>
      <Menu />
      <Search setResults={setResults}/>
      <SearchResultsList results={results}/>
      <Login />
      <Bag />
      <Slider data={slides} /> 
      <AboutUs />
      <SocialMedia />
    </div>
  );
}

//Log in:
//=sanitize user input when signing up
//when new user signs up, its added to db customer
//when user logged in, there should be option to view/change user info

//Bag: add products to the bag, view bag, checkout

//For Artist:
// for each artis page before products: big picture of them
//sort artist names before showing on artis page

//For Individual Product:
//change choose size button so user can actually choose

//For Products:
//Limit number of products on the page: show 16 products on each page and next pages

//For Slider:
//slider must change images once every 10 seconds
//move some images in slider down(2,5,6)

//Bug
//Slider: when clicking quickly on prev button,images become blue 

//how does it look on mobile devices
