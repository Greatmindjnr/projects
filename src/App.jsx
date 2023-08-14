import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import MainBody from './Components/MainBody'
import SectionTwo from './Components/SectionTwo'
import Alumni from './Components/Alumni'
import MakingTech from './Components/MakingTech'

function App() {
  

  return (
    <>
      <Header/>
      <MainBody/>
      <SectionTwo/>
      <Alumni/>
      <MakingTech/>
      
    </>
  )
}

export default App
