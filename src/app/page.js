"use client"
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
  const el = (
    <div>
        <h2 className={styles.Text} > MerchByAnn</h2>
        <Menu>
          
        </Menu>

        <Search></Search>
        <Login></Login>
        <Bag></Bag>
        <Slider data={slides}>
        </Slider>
        <AboutUs></AboutUs>
        <SocialMedia></SocialMedia>
  
    </div>
  )
  return el;
}


// TODO

//add products
//individual product page
//bag
//log in
//search
//wishlist?

//slider must change images once every 10 seconds
//move some images in slider down(2,5,6)

//how does it look on mobile devices

//Bug
//Slider: when clicking quickly on prev button,images become blue 