import React, { useRef } from 'react';
import "../contact/contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y8lcvzn', 'template_8q2nzyk', form.current, 'PdcidgkNt3IIFamPf')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className='contact container section' id='contact'>
    <h2 className='section__title'>Contact Me</h2>

    <div className='contact__container grid'>
    <div className='contact__info'>
    <h3 className='contact__title'>Let's Talk</h3>
    <p className='contact__details'>I'd love to hear from you.</p>
    </div>

    <form ref={form} onSubmit={sendEmail} className='contact__form'>
    <div className='contact__form-group'>
    <div className='contact__form-div'>
    <input type='text' className='contact__form-input' placeholder='insert your name' name="user_name"/>
    </div>

    <div className='contact__form-div'>
      <input type='email' className='contact__form-input' placeholder='insert your email' name="user_email" />
    </div> 
    </div>

    <div className='contact__form-div'>
      <input type='text' className='contact__form-input' placeholder='insert your Subject' name='user_subject' />
    </div>  

    <div className='contact__form-div contact__form-area'>
    <textarea 
    id=''
    cols="30"
    rows="10"
    className='contact__form-input'
    placeholder='write your message '
    name="message">

    </textarea>
    </div> 
    <input type="submit" value="Send" className='btn' />
    </form>
    </div>

    </section>
  );
}

export default Contact
