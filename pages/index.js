import React from 'react'
import Head from 'next/head'

import Nav from '../components/home/Nav/Nav'
import Header from '../components/home/Header/Header'
import About from '../components/home/About/About'
import Place from '../components/home/Place/Place'
import Participate from '../components/home/Participate/Participate'
import Showing from '../components/home/Showing/Showing'
import Organizers from '../components/home/Organizers/Organizers'
import Partners from '../components/home/Partners/Partners'
import Program from '../components/home/Program/Program'
import Faq from '../components/home/Faq/Faq'
import Countdown from '../components/home/Countdown/Countdown'
import Footer from '../components/home/Footer/Footer'
import Aos from 'aos'
import { useEffect } from 'react'
 

 function Home({organizers, faq, programm, place, countdown, header, footer}) {

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  })

  
  return (
    <React.Fragment>
      <Head>
        <title>Лигал-2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>
      <Header headData={header}/>
      <div data-aos="fade-up">
        <About/>
      </div>

      <div data-aos="fade-up">
        <Place place={place}/>
      </div>
      <div data-aos="fade-up">
        <Participate/>
      </div>

        <Showing/>

      <div data-aos="fade-up">
        <Organizers org={organizers}/>
      </div>

      <div data-aos="fade-up">
        <Partners/>
      </div>

      <div data-aos="fade-up">
        <Program prog={programm} org={organizers}/>
      </div>

      <div data-aos="fade-up">
        <Faq faq={faq}/>
      </div>
      <div data-aos="fade-up">
        <Countdown countdown={countdown}/>
      </div>

      <Footer footerData={footer}/>
    </React.Fragment>
  )
}

export async function getServerSideProps() {
  const {API_URL} = process.env

  const org = await fetch(`${API_URL}/organizers`)
  const faq = await fetch(`${API_URL}/faqs`)
  const prog = await fetch(`${API_URL}/timetable-days`)
  const place = await fetch(`${API_URL}/place`)
  const contd = await fetch(`${API_URL}/countdown`)
  const header = await fetch(`${API_URL}/header`)
  const footer = await fetch(`${API_URL}/footer`)

  const faqRes = await faq.json()
  const orgRes = await org.json() 
  const progRes = await prog.json()
  const placeRes = await place.json()
  const contdRes = await contd.json()
  const headerRes = await header.json()
  const footerRes = await footer.json()

  return { 
    props: { 
      organizers: orgRes,
      faq: faqRes,
      programm: progRes,
      place: placeRes,
      countdown: contdRes,
      header: headerRes,
      footer: footerRes
   } 
  }
  
}

export default Home