import React, { useState } from 'react'
import './App.css'
import './components/adfar.css'
function Form1() {

  return (
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
        <div style={{ height: '1000px', marginLeft: '4rem', marginTop: '2rem' }}>
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
            <h4 style={{ marginTop: '1.5rem' }}>Tell us more (we love to listen)</h4>
            <textarea style={{
              width: '40rem',
              padding: '4.4px 4.4px', border: '1px solid gray', outline: 'none'
            }} />

            <div style={{ display: 'flex' ,paddingTop:'1rem',borderBottom:'1px solid darkgray',paddingBottom:'1.5rem'}}>
              <div>
                <select name="" id="" style={{backgroundColor:'white',border:'0.5px solid darkgray',borderRadius:'0.3rem',
                  outline: 'none', border: '1px solid darkgray', padding: '10px 4px',
                  paddingRight: '130px'
                }}>
                  <option value="">Yes</option>
                  <option value="">Don't</option>
                </select>
              </div>
              <div style={{ marginLeft: '2rem' }}>
                <p style={{color:'black',marginTop:'0.5rem',marginLeft:'-1rem'}}>Send more options in my budget</p>

              </div>

            </div>

          </form>
        </div>


      </div>




      <div id="wtsp" style={{
        backgroundColor: '#f8f8f8', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',

        width: '400px', height: '120px', marginTop: '1rem', marginLeft: '3.5rem', borderRadius: '1rem'
      }}>
        <div class="toggle-switch" style={{ marginLeft: '1.8rem', marginTop: '1rem' }}>
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
  )
}

export default Form1