import React from 'react'

export default function App() {
  return (
    <div className="wrapper">
      <div className='header'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="logo">
          <img src="/logolend.svg"/>
        </div>
        <div className="button">
          <button>Buy Now</button>
        </div>
      </div>
      <div className="main">
        <div className="main__text">
          <h2>Introduce Your Product Quickly & Effectively</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className="all__btns">
            <button className='purchase'>Purchase UI Kit</button>
            <button className='learen__more'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
