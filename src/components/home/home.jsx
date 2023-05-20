import React from 'react';
import './home.css';
import Me from "../../assets/logo.jpg";
import {HeaderSocial} from './HeaderSocial';
import { ScrolDown } from './ScrolDown';


const home = () => {
  return (
    <section className='home container' id='home'>
    <div className='intro'>
    <img src={Me} alt='' className='home__img' />
    <h1 className='home__name'>
    Syed Mubassar Abbas Rizvi
    <h6>i'm a Front-End developer</h6>
    </h1>
    <div className='home__education'>I am a self taught Programmer. I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more,
     the better. Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent 
     addition to your organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me 
     to stay ahead of the curve and deliver exceptional work to all of my employers, including those I've worked for on a project basis </div>
    <HeaderSocial />

    <a href='#contact' className='btn'> Hire Me</a> 
    <ScrolDown />   
    </div>  
    </section>
  )
}

export default home 