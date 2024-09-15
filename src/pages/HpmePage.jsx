import React, { Fragment } from 'react'
import Landing from "../component/Landing"
import Features from "../component/Features"
import StayProductive from '../component/StayProductive'
import Testimonials from '../component/Testimonials'
import GetAccess from '../component/GetAccess'
import Footer from '../component/Footer'

function HomePage() {
  return (
    <Fragment>
        <Landing/>
        <Features/>
        <StayProductive/>
        <Testimonials/>
        <GetAccess/>
        <Footer/>
    </Fragment>
  )
}

export default HomePage
