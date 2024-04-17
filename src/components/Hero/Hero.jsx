import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className='hero'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Clicker+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap')
      </style>
      <div className="container">
        <div className="wrapper">
          <div className="hero__description">
            <h2 className='hero__title'>Discover the best coffee</h2>
            <p className="hero__text">
              Bean Scene is a coffee shop that provides you with quality coffee <br /> that helps boost your productivity and helps build your mood. <br /> Having a cup of coffee is good, but having a cup of real coffee is <br /> greater. There is no doubt that you will enjoy this coffee more <br /> than others you have ever tasted.
            </p>
            <button className='hero__btn'>Learn More</button>
          </div>
          <div className="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUE-aLP39mulG2QGWb5nZ3P5wWtZ3In_X-EbmE9F25w&s" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
