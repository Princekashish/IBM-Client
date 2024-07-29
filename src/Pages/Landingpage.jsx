import React from 'react'
import { Hero } from '../Components'
import About from '../Components/About'
import Service from '../Components/Service'
import Testimonials from '../Components/Testimonials'

export default function Landingpage() {
  return (
    <div>
        <Hero/>
        <About/>
        <Service/>
        <Testimonials/>
    </div>
  )
}
