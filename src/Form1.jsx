import React, { useState } from 'react'
import './App.css'
import './components/adfar.css'
function Form1() {

  return (<>
    <div style={{ marginTop: '8rem', display: 'flex', marginLeft: '5rem', marginRight: '4.5rem' }}>

      <div id='form__container' style={{ width: '1000px', marginTop: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img style={{ borderRadius: '50%' }} height="100px" src="https://wpcdn.starclinch.in/2019/03/26642.jpg?format=webp&w=300&dpr=1.5" width="110px" alt="" />
          <h3 style={{ width: '100px', paddingLeft: '1rem' }}>Ranbir Kapoor</h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '3rem' }}>
          <img style={{ borderRadius: '50%' }} height="40px" src="public\star.png" width="45px" alt="" />
          <h3 style={{ width: '400px', paddingLeft: '1rem', marginBottom: '-0.2rem' }}>Submit Form</h3>
        </div>
        <h4 style={{ marginLeft: '3.1rem', width: '400px', paddingLeft: '1rem', fontWeight: '500' }}>Get Best Price</h4>

        {/* FORM STARTS  */}
        <div style={{ height: '550px', marginLeft: '4rem', marginTop: '2rem' }}>
          <form action="">
            <div style={{ display: 'flex' }}>
              <div>
                <h4>What's the occasion?</h4>
                <select name="" id="" style={{
                  outline: 'none', border: '1px solid darkgray', padding: '6px 4px',
                  paddingRight: '130px'
                }}>
                  <option value="">Select Type</option>
                  <option value="">Virtual</option>
                  <option value="">Video Shoutout</option>
                  <option value="">Campus</option>
                  <option value="">Corporate</option>
                  <option value="">Private Party</option>
                  <option value="">Concert/ Festival</option>
                  <option value="">Wedding</option>
                  <option value="">Restaurant</option>
                  <option value="">Professional Hiring</option>
                  <option value="">Inauguration</option>
                  <option value="">Photo/Video Shoot</option>
                  <option value="">Religious Charity</option>
                  <option value="">Fashion Show</option>
                  <option value="">Kids Party</option>
                  <option value="">Exhibition</option>
                </select>
              </div>
              <div style={{ marginLeft: '2rem' }}>
                <h4 >Event Date</h4>
                <input style={{
                  outline: 'none', border: '1px solid darkgray', padding: '4.4px 12px',
                  paddingRight: '120px', color: 'darkrgray', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: '20px'
                }} type="date" />
              </div>

            </div>

            <h4 style={{ marginTop: '1.5rem' }}>Venue Address </h4>
            <input type="text" style={{
              width: '40rem',
              padding: '4.4px 4.4px', border: '1px solid gray', outline: 'none'
            }} />

            <div style={{ display: 'flex', marginTop: '1rem' }}>
              <div>
                <h4>Budget</h4>
                <input type='number' min="12500000" name="" id="" style={{
                  outline: 'none', border: '1px solid darkgray', padding: '6px 4px',
                  paddingRight: '110px'
                }}>

                </input>
              </div>
              <div style={{ marginLeft: '2rem' }}>
                <h4 >How Many People will attend?</h4>
                <input type='number' name="" id="" style={{
                  outline: 'none', border: '1px solid darkgray', padding: '6px 4px',
                  paddingRight: '105px'
                }}>

                </input>
              </div>

            </div>

            <h4 style={{ marginTop: '1.5rem' }}>Full Name</h4>
            <input type="text" style={{
              width: '40rem',
              padding: '4.4px 4.4px', border: '1px solid gray', outline: 'none'
            }} />
            <div style={{ display: 'flex', marginTop: '1rem' }}>
              <div>
                <h4>
                  Email Address (No Spam!)</h4>
                <input type="email" id="email" name="email" style={{
                  outline: 'none', border: '1px solid darkgray', padding: '6px 4px',
                  paddingRight: '110px'
                }}>

                </input>
              </div>
              <div style={{ marginLeft: '2rem' }}>
                <h4 >Mobile Number</h4>
                <input type='number' name="" id="" style={{
                  outline: 'none', border: '1px solid darkgray', padding: '6px 4px',
                  paddingRight: '105px'
                }}>

                </input>
              </div>

            </div>

            <h4 style={{ marginTop: '1.5rem' }}>Tell us more (we love to listen)</h4>

            <textarea style={{
              width: '40rem',
              padding: '4.4px 4.4px', border: '1px solid gray', outline: 'none'
            }} />

            <div style={{ display: 'flex', paddingTop: '1rem', borderBottom: '1px solid darkgray', paddingBottom: '1.5rem' }}>
              <div>
                <select name="" id="" style={{
                  backgroundColor: 'white', border: '0.5px solid darkgray', borderRadius: '0.3rem',
                  outline: 'none', border: '1px solid darkgray', padding: '10px 4px',
                  paddingRight: '130px'
                }}>
                  <option value="">Yes</option>
                  <option value="">Don't</option>
                </select>
              </div>
              <div style={{ marginLeft: '2rem' }}>
                <p style={{ color: 'black', marginTop: '0.5rem', marginLeft: '-1rem' }}>Send more options in my budget</p>

              </div>

            </div>
          </form>

        </div>


      </div>
      <div id="wtsp" style={{
        backgroundColor: '#f8f8f8', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',

        width: '420px', height: '120px', marginTop: '2.5rem', marginLeft: '3.5rem', borderRadius: '1rem'
      }}>
        <div class="toggle-switch" style={{ marginLeft: '4rem', marginTop: '1rem' }}>
          <input class="toggle-input" id="toggle" type="checkbox" />
          <label class="toggle-label" for="toggle"></label>
          <p style={{
            marginTop: '0.2rem',
            top: '-100'
            , marginLeft: '4.5rem', fontSize: '0.8rem', width: '200px'
          }}>Send Quotes on Whatsapp</p>
          <button id="m3" style={{ width: '250px' }}>Show Best Price</button>
        </div>

      </div>
    </div>

    {/* STARCLINCH AD */}
    <div style={{ display: 'flex', marginTop: '5rem', marginLeft: '6.5rem', marginRight: '4.5rem', marginBottom: '3rem' }}>
      <div style={{ flex: 1, lineHeight: '1rem' }}>
        <div style={{ width: '420px' }}>
          <h3 style={{ paddingBottom: '1rem' }}>Why StarClinch</h3>
          <p><img src="public/tick.png" alt="your-image" width="15px" height="16px" style={{ marginRight: '5px', }} /> Reliable Booking Partner - 10K+ bookings in the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  last 8 years</p>
          <p><img src="public/tick.png" alt="your-image" width="15px" height="16px" style={{ marginRight: '5px' }} /> ONLY VC funded Entertainment startup</p>
          <p><img src="public/tick.png" alt="your-image" width="15px" height="16px" style={{ marginRight: '5px' }} /> Follow ESCROW model</p>
          <p><img src="public/tick.png" alt="your-image" width="15px" height="16px" style={{ marginRight: '5px' }} /> Leverage the TECH; Hence, don't overcharge</p>
          <p><img src="public/tick.png" alt="your-image" width="15px" height="16px" style={{ marginRight: '5px' }} /> Specialized in CORPORATE Events</p>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h3>Brands we've worked with</h3>
        <div id='brand-logos'>
          <img width="500px" src="https://stcdn.starclinch.in/images/home/our_brand_logos_new.svg" alt="" />
        </div>
      </div>
    </div>

    <div style={{ height: '160px', backgroundColor: '#1c1c1c', display: 'flex', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }}>
      <div style={{
        height: '140px',
        marginTop: '2.2rem',
        backgroundColor: 'black',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ width: '400px' }}><p style={{
          color: '#505050', paddingLeft: '7rem', textAlign: 'center',
          fontSize: '13px'
        }}>India's Largest Marketplace for Professional Artists</p></div>
        <img src="public/logo1.png" alt="your-image" width="250px" height="60px" style={{ marginLeft: '1rem' }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ color: '#505050', marginRight: '9rem' }}><span style={{ paddingRight: '1rem', marginLeft: '-2rem' }}>On social networks</span>
            <img src="public/fac.png" alt="your-social-icon-1" width="22px" height="18px" style={{ paddingRight: '0.5rem', marginLeft: '1rem' }} />
            <img src="public/cart.png" alt="your-social-icon-2" width="22px" height="18px" style={{ paddingRight: '0.5rem', marginLeft: '1rem' }} />
            <img src="public/cart.png" alt="your-social-icon-3" width="22px" height="18px" style={{ paddingRight: '0.5rem', marginLeft: '1rem' }} />
            <img src="public/cart.png" alt="your-social-icon-4" width="22px" height="18px" style={{ paddingRight: '0.5rem', marginLeft: '1rem' }} />
          </div>
        </div>
      </div>
    </div>

    <div style={{ borderBottom: '0.7px solid darkgray', height: '420px', paddingLeft: '6rem', paddingTop: '3rem', backgroundColor: '#1c1c1c', display: 'flex' }}>
      <div style={{ flex: 1, padding: '2rem', lineHeight: '0.4rem' }}>
        <p style={{ marginBottom: '2rem', color: '#868582' }}>LEGAL ENTITY</p>
        <p id='rt'>VINSM Globe Private Limited</p>
        <p id='rt'>GSTIN : 07AAFCK1574R1ZX</p>
        <p id='rt'>CIN: U52605DL2012PTC236944</p>
        <p id='rt' >Phone: <span id="qs">+91 7042 88 4270</span></p>
        <p id='rt' style={{ color: '#868582', marginTop: '2.5rem' }}> Contact Us</p>
      </div>
      <div style={{ flex: 1, padding: '2rem' }}>
        <p style={{ color: '#868582' }}>For Buyers</p>
        <ul style={{ listStyle: 'none', marginLeft: '-2rem' }}>
          <li id="qs" style={{ cursor: 'pointer' }}>Buyers</li>
          <li id="qs" style={{ cursor: 'pointer' }}>Browse</li>
          <li id="qs" style={{ cursor: 'pointer' }}>Post Your Requirement</li>
        </ul>
        <p style={{ color: '#868582' }}>FOR ARTISTS</p>
        <ul style={{ listStyle: 'none', marginLeft: '-2rem' }}>
          <li id="qs" style={{ cursor: 'pointer' }}>Login</li>
          <li id="qs" style={{ cursor: 'pointer' }}>Artist SignUp</li>
          <li id="qs" style={{ cursor: 'pointer' }}>Artist Membership</li>
          <li id="qs" style={{ cursor: 'pointer' }}>Jobs</li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: '2rem' }}>
        <p style={{ color: '#868582' }}>About Us </p>
        <ul style={{ listStyle: 'none', marginLeft: '-2rem' }}>
          <li id="qs" style={{ cursor: 'pointer' }}>Our Story</li>
          <li id="qs" style={{ cursor: 'pointer' }}>Careers</li>
        </ul>
        <p style={{ color: '#868582' }}>Policy</p>
        <ul style={{ listStyle: 'none', marginLeft: '-2rem' }}>
          <li id="qs" style={{ cursor: 'pointer' }}>Privacy Policy</li>
          <li id="qs" style={{ cursor: 'pointer' }}> Terms of Use</li>
          <li id="qs" style={{ cursor: 'pointer' }}>Disclaimer</li>
          <li id="qs" style={{ cursor: 'pointer' }}>FAQs</li>
        </ul>
      </div>

    </div>
    <div style={{ backgroundColor: '#1c1c1c', marginTop: '-1rem', height: '100px' }}>
      <center ><p style={{
        width: '1000px', fontSize: '14px', color: '#505050', borderTop: '1px solid #505050',
        paddingTop: '1.5rem', marginBottom: '4rem'
      }}>© Copyright 2015-2023 | VINSM Globe Pvt. Ltd. | All Rights Reserved.
      </p></center>
    </div>
  </>
  )
}

export default Form1