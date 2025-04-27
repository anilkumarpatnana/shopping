import React, { useState } from 'react'
import { Header } from '../components/Header'
import Banner from '../components/Banner'
import MenCollection from '../components/MenCollection'
import WomenCollection from '../components/WomenCollection'
import Footer from '../components/Footer'
import { Gents, Ladies } from '../../data'

 const MainPage = () => {
    const[gentsCollection,setGentsCollection]= useState(Gents)
    const[ladiesCollection,setLadiesCollection]= useState(Ladies)

  return (
    <div>
    <Header />
    <Banner />
    <MenCollection gentsCollection={gentsCollection}/>
    <WomenCollection ladiesCollection={ladiesCollection}/>
    <Footer />
   </div>

  )
}
export default MainPage
