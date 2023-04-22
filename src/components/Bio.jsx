import React, { useState, useRef } from 'react'
import './Bio.css'
import './Accordion.css'
import './Star.css'
import MyWrapper from './MyWrapper';
import './adfar.css'
import { useNavigate } from 'react-router-dom'
function Bio() {
  const navigate = useNavigate()
  const navigation = useNavigate()
  const [showEntertainerDiv, setShowEntertainerDiv] = useState(false) // Add state variable and setter function
  const [showJoinCommunity, setJoinCommunity] = useState(false) // Add state variable and setter function
  const handleEntertainerClick = () => {
    setShowEntertainerDiv(!showEntertainerDiv) // Toggle the value of showEntertainerDiv
    setJoinCommunity(false)
  }
  const handleJoinCommunityClick = () => {
    setJoinCommunity(!showJoinCommunity) // Toggle the value of showEntertainerDiv
    setShowEntertainerDiv(false) // Toggle the value of showJoinCommunity)
  }
  const handlclick = () => {
    navigation('/')
  }

  const handleNavigate = () => {
    navigate('/form')
  }
  const stylo = {
    paddingRight: '1.5rem',
    color: 'grey',
    fontSize: '15px',

    fontWeight: '800',

  }

  const stylo2 = {
    backgroundColor: '#ff214f',
    color: 'white',
    borderRadius: '0.7rem',
    fontWeight: '500',
    outline: 'none',
    width: '230px',
    marginBottom: '-3.5rem',
    padding: '0.3rem 0.2rem ',
    transition: 'background-color 0.3s ease-out', // Add a transition for a smooth effect
    // Add the following properties for hover effect
    ':hover': {
      backgroundColor: 'white',
      cursor: 'pointer', // Change the cursor to a pointer to indicate interactivity
      color: 'black',
    },

  };
  const fg = {
    paddingLeft: '1rem',
    paddingTop: '4px',
    outline: 'none',
    fontSize: '14px',
    cursor:'pointer',
    
    

  }




  return (<>
    <section id="header" style={{ zIndex: '5', position: 'fixed', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', marginTop: '0px', maxWidth: '100vw' }}>

      <img src="https://i.pinimg.com/originals/72/1b/ff/721bff10deee8e79caf4d5dcc455f234.jpg" onClick={handlclick} className="logo" alt="" width="170px" height="40px" style={{ marginLeft: '3rem', cursor: 'pointer' }} />

      <div style={{ paddingTop: '0.2rem', fontFamily: 'Montserrat', marginRight: '5rem', }}>
        <ul id="navbar">

          <li>
            <button style={{ backgroundColor: '#fff', color: 'black', border: 'none', cursor: 'pointer', fontSize: '12.5px', fontWeight: '550', fontFamily: 'Montserrat', marginBottom: '-2rem' }} name="" id="nm" onClick={handleEntertainerClick}>
              Entertainers  <i className="fa fa-chevron-down hadid mn"></i>
            </button>

            {showEntertainerDiv && ( // Conditionally render the entertainer div
              <>
                <div style={{
                  display: 'flex', flexDirection: 'column', flexWrap: 'wrap', position: 'absolute', top: '4.5rem', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
                  width: '90vw', left: -400, height: '70vh'
                }}><div className="arrow-up"></div>

                  <div style={{ display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.8rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-anchor-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}> Anchor/Emcee</a>
                  </div>

                  <div style={{ display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.5rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-comedian-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}> Comedian</a>
                  </div>
                  <div style={{ display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.8rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-dj-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}>Dj</a>
                  </div>
                  <div style={{ display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.8rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-band-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}> Live Band</a>
                  </div>
                  <div style={{ display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.8rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-makeup-artist-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}> Make-Up Artist/Stylist</a>
                  </div>
                  <div style={{ display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.8rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-photographer-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}>  Photo/Videographer</a>
                  </div>
                  <div style={{ display: 'flex', paddingLeft: '2rem', paddingTop: '1rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-speaker-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}>  Speaker</a>
                  </div>
                  <div style={{
                    borderLeft: '0.1px solid #c2c2c2', display: 'flex', paddingLeft: '2rem', paddingBottom: '0.8rem',
                    marginTop: '1rem'
                  }}>
                    <img src="https://stcdn.starclinch.in/header/book-celebrity-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={{
                      paddingLeft: '1rem',
                      paddingTop: '4px',
                      outline: 'none',
                      fontSize: '14px',
                    }}>  Celebrity Appearance</a>
                  </div>

                  <div style={{ borderLeft: '0.1px solid #c2c2c2', display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.5rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-dancer-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}>   Dancer/Troupe</a>
                  </div>
                  <div style={{ borderLeft: '0.1px solid #c2c2c2', display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.8rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-instrumentalist-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}>  Instrumentalist</a>
                  </div>
                  <div style={{ borderLeft: '0.1px solid #c2c2c2', display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.8rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-magician-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}> Magician</a>
                  </div>
                  <div style={{ borderLeft: '0.1px solid #c2c2c2', display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.8rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-model-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}> Model</a>
                  </div>
                  <div style={{ borderLeft: '0.1px solid #c2c2c2', display: 'flex', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '0.8rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-singer-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}> Singer</a>
                  </div>
                  <div style={{ borderLeft: '0.1px solid #c2c2c2', display: 'flex', paddingLeft: '2rem', paddingTop: '1rem' }}>
                    <img src="https://stcdn.starclinch.in/header/book-variety-artist-online.webp" alt="" width="30px" height="32px" />
                    <a href='/' style={fg}> Variety Artists</a>
                  </div>

                </div>
              </>
            )}

          </li>
          <li>
            <button onClick={() => handleJoinCommunityClick()} style={{
              backgroundColor: '#fff', color: 'black', border: 'none', cursor: 'pointer', fontSize: '12.5px', fontWeight: '550', fontFamily: 'Montserrat', marginBottom: '-2rem'
            }} name="" id="nm">
              Join Community  <i className="fa fa-chevron-down hadid mn1"></i>
            </button>
            {showJoinCommunity && ( // Conditionally render the entertainer div
              <>
                <div style={{
                  display: 'flex', flexDirection: 'column', flexWrap: 'wrap', position: 'absolute', top: '4.5rem', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
                  width: '24vw', right: -45, height: '55vh'
                }}>
                  <div className="arrow-up1"></div>
                  <img src="https://starclinch.com/static/mobile/images/header/artist_menu_image.svg" alt="" style={{ border: '1px solid black',width:'270px', margin: '1rem', borderRadius: '10px', marginLeft: '1.1rem' }} />

                  <div style={{ display: 'flex', paddingLeft: '1.5rem', marginTop: '-2px', paddingBottom: '0.5rem' }}>
                    <img src="https://stcdn.starclinch.in/header/login.webp" alt="" width="33px" height="35px" />
                    <a  style={fg}> Login</a>
                  </div>
                  <div style={{ display: 'flex', paddingLeft: '1.5rem', paddingTop: '2px', paddingBottom: '0.5rem' }}>
                    <img src="https://stcdn.starclinch.in/header/signup.webp" alt="" width="33px" height="35px" />
                    <a href='/' style={fg}>Signup</a>
                  </div>
                  <div style={{ display: 'flex', paddingLeft: '1.5rem', paddingTop: '2px', paddingBottom: '0.4rem' }}>
                    <img src="https://stcdn.starclinch.in/header/jobs.webp" alt="" width="33px" height="35px" />
                    <a href='/' style={fg}> Jobs</a>
                  </div>
                  <div style={{ display: 'flex', paddingLeft: '1.5rem', paddingTop: '2px', paddingBottom: '0.5rem' }}>
                    <img src="https://stcdn.starclinch.in/header/artists_subscription.webp" alt="" width="33px" height="32px" />
                    <a href='/' style={fg}>  Artist Membership</a>
                  </div>
                </div>
              </>
            )}
          </li>
          <li >
            <button id='m2' style={{ marginRight: '-2rem' }}>Post Your Requirement</button>
          </li>

        </ul>
      </div>
    </section>


    <div style={{
      marginTop: '4.5rem',
      marginLeft: '6rem',
      display: 'flex',
      fontFamily: 'Montserrat',
      paddingTop: '1rem'
    }}>
      <a href='/' className='rbui' style={stylo}>Home</a>
      <a href='/' className='rbui' style={stylo}>CELEBRITY APPEARANCE </a>
      <a style={stylo}>Ranbir Kapoor</a>
    </div>

    <div style={{
      display: 'flex', marginLeft: '6rem', marginTop: '1rem', width: '85%'
    }}>
      <img src="https://wpcdn.starclinch.in/2019/03/26642.jpg?format=webp&w=400&dpr=1.5" alt="" width="380px" height="300px" style={{ borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' }} />
      <div style={{ fontFamily: 'Montserrat', marginLeft: '3rem', marginTop: '2.5rem', marginRight: '1rem' }}>
        <p style={{ fontFamily: 'Montserrat', fontSize: '24px', color: 'black', lineHeight: '1.1rem', fontWeight: '700' }}>Ranbir Kapoor</p>
        <p style={{ fontFamily: 'Montserrat', fontSize: '18px', lineHeight: '1rem' }}>(CELEBRITY APPEARANCE)</p>
        <p style={{ fontSize: '16px', lineHeight: '0.5rem', color: 'gray', paddingBottom: '0.8rem', fontWeight: '700' }}>Mumbai, Maharashtra </p>
        <button className='m1' onClick={handleNavigate}>See Price And Book</button>
        <p style={{ fontFamily: 'Montserrat', fontSize: '15px', marginTop: '-2rem' }}>The 'ROCKSTAR' who is a heart throb of millions, Ranbir Kapoor is one of the finest actors in Bollywood and is a true versatile performer</p>
      </div>
    </div>
    <img style={{ marginLeft: '7rem', paddingTop: '4rem', cursor: 'pointer', marginBottom: '1.5rem' }} src="https://i.ibb.co/bb3vcSk/gallery.png" alt="" width="110px" />

    <div style={{ width: 'auto', borderRadius: '1rem', marginLeft: '6rem', height: 'auto', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', marginBottom: '2rem', marginRight: '-1rem', paddingBottom: '1.2rem', marginRight: '6rem' }}>
      <MyWrapper />
    </div>

    <center> <button className='m11' onClick={handleNavigate}>See Price And Book</button></center>


    {/* --------------------------ACCORDIAN------------------------- */}
    <div className="accordion" id="accordionExample" style={{ fontFamily: 'Montserrat' }}>
      <div className="accordion-item" style={{ marginBottom: '1.2rem', marginLeft: '6rem', borderRadius: '1rem', overflow: 'auto', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px', width: 'auto', marginRight: '6rem' }}>
        <h2 className="accordion-header" style={{ marginBottom: '1rem  ', paddingBottom: '1rem', height: '55px', overflowY: 'hidden', marginTop: '-1rem' }}>
          <div style={{ display: 'flex' }}>
            <img src="https://stcdn.starclinch.in/mobile/images/profile/biography_icon.svg" alt="" style={{ paddingLeft: '1rem' }} />
            <button className="accordion-button " style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '510', backgroundColor: 'white', borderColor: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Biography
            </button>
          </div>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '100', marginTop: '0.8rem' }}>
            Ranbir Kapoor is a Bollywood Superstar. A recipient of several accolades including five FILMFARE AWARDS, he is one of the most popular and highest paid celebrities in India. He is the grandson of well acclaimed Actor-Director Raj Kapoor and the son of actors Neetu Kapoor & Rishi Kapoor. At the LEE STRASBERG and THEATER AND FILM INSTITUTE & SCHOOL OF VISUAL ARTS, Ranbir pursued film-making and method acting respectively, following which he assisted SANJAY LEELA BHANSALI on the film BLACK (2005).   Ranbir Kapoor kick-started his acting debut with Bhansali's Tragic-Romance SAAWARIYA (2007), a performance so ecstatic that he bagged a Filmfare Award for THE BEST MALE DEBUT   3 hit flicks, namely Ajab Prem Ki Ghazab Kahani, Rocket Singh-Salesman Of The Year & Wake Up Sid earned him 3 Filmfare Critics Awards for Best Actor Ranbir Kapoor’s award winning spree was extended with 2 BEST ACTOR awards at FILMFARE with stellar performances in ROCKSTAR (Drama, 2011) and BARFI (Drama-Comedy, 2012), where he played a troubled musician and a deaf-mute man respectively   He further proved his versatile acting skills by engaging the audiences in films like BOMBAY TALKIES (Appearance), YEH JAWAANI HAI DIWANI (RomanticComedy,2013) & RAJNEETI (Drama, 2010)   Films aside, Kapoor is a stern supporter of charitable causes and initiatives. He happens to be the Co-Owner of the INDIAN SUPER LEAGUE football team, MUMBAI CITY FC and the Co-Founder of  Picture Shuru Productions
          </div>
        </div>
      </div>

      <div className="accordion-item" style={{ marginBottom: '2rem', width: '1080px', marginLeft: '6rem', borderRadius: '1rem', overflow: 'auto', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px', width: 'auto', marginRight: '6rem' }}>
        <h2 className="accordion-header" style={{ marginBottom: '1rem  ', paddingBottom: '1rem', height: '55px', overflowY: 'hidden', marginTop: '-1rem' }}>
          <div style={{ display: 'flex' }}>
            <img src="https://stcdn.starclinch.in/mobile/images/profile/Performance_Details.svg" alt="" style={{ paddingLeft: '1rem' }} />
            <button className="accordion-button collapsed" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '510', backgroundColor: 'white', borderColor: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Performance Details
            </button>
          </div>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={{ fontSize: '16px', fontWeight: '100', marginTop: '0.8rem' }}>
            <img src="https://i.pinimg.com/originals/47/f7/03/47f7033f41f7f0d17dd167c0363d090c.jpg" alt="" width="1000px" style={{ marginLeft: '2rem' }} />
          </div>
        </div>
      </div>
      <div className="accordion-item" style={{
        marginBottom: '2rem', width: '1080px', marginLeft: '6rem', borderRadius: '1rem', overflow: 'auto', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px', width: 'auto', marginRight: '6rem'
      }}>
        <h2 className="accordion-header" style={{ marginBottom: '1rem  ', paddingBottom: '1rem', height: '55px', overflowY: 'hidden', marginTop: '-1rem' }}>
          <div style={{ display: 'flex' }}>
            <img src="https://stcdn.starclinch.in/mobile/images/profile/performance_language_v2.svg" alt="" style={{ paddingLeft: '1rem' }} />
            <button className="accordion-button collapsed" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '510', backgroundColor: 'white', borderColor: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Performance Language
            </button>
          </div>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={{ fontSize: '16px', fontWeight: '100', marginTop: '0.8rem' }}>
            <img src="https://i.pinimg.com/originals/48/2a/13/482a1331d1c8b59d589551e20024061c.jpg" alt="" width="1000px" style={{ marginLeft: '1.5rem' }} />
          </div>
        </div>
      </div>
      <div className="accordion-item" style={{ marginBottom: '2rem', width: '1080px', marginLeft: '6rem', borderRadius: '1rem', overflow: 'auto', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px', width: 'auto', marginRight: '6rem' }}>
        <h2 className="accordion-header" s style={{ marginBottom: '1rem  ', paddingBottom: '1rem', height: '55px', overflowY: 'hidden', marginTop: '-1rem' }}>
          <div style={{ display: 'flex' }}>
            <img src="https://starclinch.com/static/mobile/images/profile/review_icon.svg" alt="" style={{ paddingLeft: '1rem', width: '45px', height: '80px', paddingTop: '3px' }} />
            <button className="accordion-button collapsed" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '510', backgroundColor: 'white', borderColor: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Review
            </button>
          </div>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <center> <p style={{ color: 'black', fontWeight: '500', fontSize: '25px', paddingBottom: '1rem' }}>0 reviews</p></center>
            <p style={{ fontFamily: 'Montserrat', paddingLeft: '3rem', color: 'black', fontWeight: '-100', fontSize: '35px', paddingBottom: '1rem', lineHeight: '1rem' }}>Post a review</p>


            {/* stars */}
            <ul class="rate-area">
              <input type="radio" id="5-star" name="crating" value="5" />
              <label for="5-star" title="Amazing">5 stars</label>
              <input type="radio" id="4-star" name="crating" value="4" />
              <label for="4-star" title="Good">4 stars</label>
              <input type="radio" id="3-star" name="crating" value="3" />
              <label for="3-star" title="Average">3 stars</label>
              <input type="radio" id="2-star" name="crating" value="2" />
              <label for="2-star" title="Not Good">2 stars</label>
              <input type="radio" id="1-star" required=""
                name="crating" value="1" aria-required="true" />
              <label for="1-star" title="Bad">1 star</label>
            </ul>

            <form action="">
              <input placeholder='Review' type="text" style={{ fontFamily: 'Montserrat', paddingLeft: '1rem', width: '960px', marginLeft: '3rem', outline: 'none', height: '5rem', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px', border: 'none' }} />
              <button style={{ fontFamily: 'Montserrat', borderRadius: '5px', color: 'white', backgroundColor: 'blue', marginLeft: '923px', marginTop: '1rem', marginBottom: '1rem' }}>POST</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default Bio