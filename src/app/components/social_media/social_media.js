"use client"
import './social_media.css'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import { SlMusicTone } from "react-icons/sl";
import { SlCallEnd } from "react-icons/sl";
import { SlMap } from "react-icons/sl";
import { SlEnvolope } from "react-icons/sl";


export default function SocialMedia(){
    return(
        <div>
            <p className="TextFollow">Follow Us:</p>
            
            <a href="https://www.instagram.com/" target="_blank">
                <SlSocialInstagram className="Instagram" />
            </a>
        

            <a href="https://www.facebook.com/" target="_blank">
                <SlSocialFacebook className="Facebook"/>
            </a>
            
            <a href="https://www.pinterest.com/" target="_blank">
                <SlSocialPintarest className="Pinterest"/>
            </a>
            

            <p className="TextContact">Contact Us:</p>
            <ul>
            <li><SlEnvolope className="Email"/></li>
            <p className="emailText">cs_support@gmail.com</p>
            <li><SlCallEnd className="Phone"/></li>
            <p className="phoneText">+371 29437618</p>
            <li><SlMap className="Address"/></li>
            <p className="addressText">13th street 7, Muhosransk</p>

            </ul>
        </div>
    )
}