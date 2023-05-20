import React from 'react';
import "./about.css";
import Me from "../../assets/logo.jpg";
import { AboutBox } from './AboutBox';

const about = () => {
  return (
    <section className='container about section' id='about'>
    <h2 className='section__title'>
    About Me
    </h2>
    <div className='about__container grid'>
      <img src={Me} alt='img' className='about__img'/>

      <div className='about__data grid'>
        <div className='about__info'>
        <p className='about__description'>
        Hi! I am Syed Mubassar Abbas Rizvi, web developer from 
        Lahore, Pakistan. I have rish experience in web site design
        and building and customize.
        </p>
        <a href="" className='btn'>Download Cv</a>
        </div>


        <div className='about__skills grid'>
         <div className='skills__data'>
           <div className='skills__titles'>
          <h3 className='skills__name'> React.js</h3>
          <span className='skills__number '>80%</span>
           </div>

        <div className='skills__bar'>
        <span className='skills_percentage react'></span>
        </div>
        </div>




        <div className='skills__data'>
           <div className='skills__titles'>
          <h3 className='skills__name'> Javascript</h3>
          <span className='skills__number'>70%</span>
           </div>

        <div className='skills__bar'>
        <span className='skills_percentage javascript'></span>
        </div>
        </div>


 
        <div className='skills__data'>
           <div className='skills__titles'>
          <h3 className='skills__name'> UI/UX Design</h3>
          <span className='skills__number'>90%</span>
           </div>

        <div className='skills__bar'>
        <span className='skills_percentage ui__design'></span>
        </div>
        </div>



        </div>
      </div>
    </div>
    <AboutBox />
    </section>
  )
}

export default about