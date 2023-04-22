import React from 'react'
import Nav from './components/Nav'
import Bio from './components/Bio'
import Artists1 from './components/Artists1'
import Artists from './components/Artists'
import Tags from './components/Tags'
function Home() {
  return (
    <div style={{maxWidth:'100vw'}}>
{/* 
      <Nav /> */}
      <Bio style={{maxWidth:"100vw", }}/>
      <Artists style={{maxWidth:"100vw"}}/>
      <Artists1 style={{maxWidth:"100vw"}}/>
      <Tags style={{maxWidth:"100vw"}}/>
    </div>
  )
}

export default Home