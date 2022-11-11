import React from 'react'
import './../static/css.css'
export default function Header() {
  return (
    <div className='header'>
        <div className='inline' >
        <img className='verticalmiddle' id="logo" src={require('../static/img/logo.png')}></img>
        <a className='verticalmiddle' href="#">Home</a>
        <a className='verticalmiddle' href="#">Categories</a>
        <a className='verticalmiddle' href="#">About Us</a>
        </div>
        <div className='inline rightHeaderItems'>
        <a href="#">Signup</a>
        </div>
    </div>
  )
}
