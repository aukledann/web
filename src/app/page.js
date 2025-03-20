"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import {Slider} from "./components/slider/slider"
import {slides} from "./slider_slides.json";
import Bag from "./components/product/product.js"
import Search from "./components/search/search.js"
import Login from "./components/log_in/login.js"
import Menu from "./components/menu/menu.js"
import AboutUs from "./components/about_us/about_us_text.js"
import SocialMedia from "./components/social_media/social_media.js"
import Link from "next/link";


export default function Home() {

  return (
    <div>
      <h2 className={styles.Text}>MerchByAnn</h2>
      <Menu />
      <Search />
      <Login />
      <Bag />
      <Slider data={slides} /> 
      <AboutUs />
      <SocialMedia />
    </div>
  );
}


// TODO
//sort artist names
// the weeknd dooesnt work
// for each artis page before products: big picture of them


//individual product page
//bag, add products, view bag
//log in
//search


//For Products:
//for all products/clothing show 16 products on each page and next pages
//add currency to price

//For Slider:
//slider must change images once every 10 seconds
//move some images in slider down(2,5,6)

//how does it look on mobile devices

//Bug
//Slider: when clicking quickly on prev button,images become blue 