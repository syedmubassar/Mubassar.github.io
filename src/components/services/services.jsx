import React from 'react';
import './services.css';
import image1 from "../../assets/service-1.svg";
import image2 from "../../assets/service-2.svg";
import image3 from "../../assets/service-3.svg";

const data = [
  {
    id:1,
    image: image1,
    title: "UI/UX design",
    description: "lorem ipsume dolor sit amet consecture adipssicnsg elist andesd commod lifhye jshdbs."
  },
  {
    id:2,
    image: image2,
    title: "Development",
    description: "lorem ipsume dolor sit amet consecture adipssicnsg elist andesd commod lifhye jshdbs."
  },
  {
    id:3,
    image: image3,
    title: "Photography",
    description: "lorem ipsume dolor sit amet consecture adipssicnsg elist andesd commod lifhye jshdbs."
  }
]

const services = () => {
  return (
    <section className='services container section' id='services'>
    <h2 className='section__title'>
    Services
    </h2>
    <div className='services__container grid'>
    {data.map(({id, image, title, description}) => {
      return(
        <div className='services__card' key={id}>
        <img src={image} alt='' className='services__img' />
        <h3 className='services__title'>{title}</h3>
        <p className='services__description'>{description}</p>
        </div>
      )
    })}
    </div>
    </section>
  )
}

export default services