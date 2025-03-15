"use client"
import './slider.css'
import React, {useState} from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


//images 2,5,6 need to be lower
export const Slider = ({data}) =>{
    const [slide,setSlide] = useState(0); 

    
     // console.log(data); 
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };
    return (
        <div className="Slider">
        <SlArrowLeft className="ArrowLeft" onClick={prevSlide} />
        {data.map((item, index) => (
                <div key={index} className={index === slide ? "slide" : "slide slide-hidden"}>
                    <img src={item.src} alt={item.alt} />
                </div>
            ))}
          <SlArrowRight className="ArrowRight" onClick={nextSlide} />

          <span className="Dots">
            {data.map((_,index) => (
                <button key={index} onClick={() => setSlide(index)} className= {slide === index ?"Dot" : "Dot dot-inactive"}></button>
            ))}
          </span>
        </div> 
      );
}




/* 

<img src="/ts.jpg" alt="Taylor Swift" className="Image" />
            <img src="/ag.jpg" alt="Ariana Grande" className="Image" />
            <img src="/lg.png" alt="Lady Gaga" className="Image" />
            <img src="/nm1.jpg" alt="Nicki Minaj" className="Image" />
            <img src="/ri.jpg" alt="Rihanna" className="Image" />
            <img src="/wknd.jpg" alt="The Weekend" className="Image" />
*/



