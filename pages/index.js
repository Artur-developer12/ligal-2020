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


 function Home({organizers, faq, programm, place, countdown, header}) {

  return (
    <React.Fragment>
      <Head>
        <title>Лигал-2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>
      <Header headData={header}/>
      <About/>
      <Place place={place}/>
      <Participate/>
      <Showing/>
      <Organizers org={organizers}/>
      <Partners/>
      <Program prog={programm} org={organizers}/>
      <Faq faq={faq}/>
      <Countdown countdown={countdown}/>
      <Footer/>
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

  const faqRes = await faq.json()
  const orgRes = await org.json() 
  const progRes = await prog.json()
  const placeRes = await place.json()
  const contdRes = await contd.json()
  const headerRes = await header.json()

  return { 
    props: { 
      organizers: orgRes,
      faq: faqRes,
      programm: progRes,
      place: placeRes,
      countdown: contdRes,
      header: headerRes,
   } 
  }
  
}

export default Home