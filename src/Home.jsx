import React from 'react'
import Nav from './components/Nav'
import Bio from './components/Bio'
import Artists1 from './components/Artists1'
import Artists from './components/Artists'
function Home() {
  return (
    <div>
        
        <Nav />
      <Bio />
        <Artists/>
        <Artists1 />
    </div>
  )
}

export default Home