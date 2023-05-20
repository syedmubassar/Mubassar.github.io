import React from 'react'

export const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
        <div className='about__box'>
        <i className='about__icon icon-fire'></i>
        <div>
            <h3 className='about__title'> 5</h3>
            <span className='about__subtitle'>
            Project Complete
            </span>
            
        </div>
        </div>


        <div className='about__box'>
        <i className='about__icon icon-cup'></i>
        <div>
            <h3 className='about__title'> 100 </h3>
            <span className='about__subtitle'>
            Cup of Coffee
            </span>
            
        </div>
        </div>



        <div className='about__box'>
        <i className='about__icon icon-people'></i>
        <div>
            <h3 className='about__title'> 5 </h3>
            <span className='about__subtitle'>
            Client Satisfied
            </span>
            
        </div>
        </div>

        
    </div>
  )
}
