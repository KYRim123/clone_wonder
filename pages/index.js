import React from 'react'
import Center from '../components/Center'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ScrollMouse from '../components/ScrollMouse'
import Brand from '../components/Brand'
import Features from '../components/Features'
import Community from '../components/Community'
import AboutUs from '../components/AboutUs'
import Advert from '../components/Advert'
import Testimonials from '../components/Testimonials'
import JoinTheForce from '../components/JoinTheForce'
import GetStarted from '../components/GetStarted'
import Answer from '../components/Answer'
import Footer from '../components/Footer'
import Slide from '../components/Slider'

export default function HomePage() {
  return (
    <>
      <Slide />
      <ScrollMouse />
      <Brand />
      <Features />
      <Community />
      <AboutUs />
      <Advert />
      <Testimonials />
      <JoinTheForce />
      <GetStarted />
      <Answer />
    </>
  )
}
