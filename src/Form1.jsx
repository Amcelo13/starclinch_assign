import React, { useState, useEffect } from 'react'
import './App.css'
import './components/adfar.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isValidNumber } from 'libphonenumber-js'
import './native.css'
import { animateScroll } from 'react-scroll';

function Form1() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [budget, setBudget] = useState('');
  const [budgetError, setBudgetError] = useState('');
  const [value, setValue] = useState('')
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleValueChange = (newValue) => {
    setValue(newValue)
    setIsValid(isValidNumber(newValue))

  }

  const handleOnChange = (value, country) => {
    if (value.length < 10) {
      setError("Invalid phone number");
    } else {
      setPhone(value);
      setError("");
    }
  };
  const handleBudgetChange = (event) => {
    const value = event.target.value;
    setBudget(value);
    if (value < 12500000) {
      setBudgetError('Budget must be at least 12500000');
    } else {
      setBudgetError('');
    }
  };

  const handleEmailChange = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = event.target.value;

    if (emailRegex.test(emailValue)) {
      setEmail(emailValue);
      setEmailError('');
    } else {
      setEmail('');
      setEmailError('Please enter a valid email address');
    }
  };

  //condition where the scroll up button appears
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight/10) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //scroll top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (<>
    {showScrollButton && (
            <button onClick={scrollToTop} className="scroll-to-top-button">
              <i className="fa fa-chevron-up hadid"></i>
            </button>
          )}

    <div style={{paddingTop:'2rem' ,marginTop: '4rem', display: 'flex', marginLeft: '5rem', marginRight: '4.5rem' }}>
      
      <div id='form__container' style={{ width: '1000px', marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img style={{ borderRadius: '50%' }} height="100px" src="https://wpcdn.starclinch.in/2019/03/26642.jpg?format=webp&w=300&dpr=1.5" width="110px" alt="" />
          <h3 style={{ width: '100px', paddingLeft: '1rem' }}>Ranbir Kapoor</h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '3rem' }}>
          <img style={{ borderRadius: '50%' }} height="40px" src="https://i.ibb.co/mrKXjs2/E29888-C4-CFC8-41681710209-7251081-Fv-TVGH.jpg" width="45px" alt="" />
          <h3 style={{ width: '400px', paddingLeft: '1rem', marginBottom: '-0.2rem' }}>Submit Form</h3>
        </div>
        <h4 style={{ marginLeft: '3.1rem', width: '400px', paddingLeft: '1rem', fontWeight: '500' }}>Get Best Price</h4>

        {/* FORM STARTS  */}
        <div style={{ height: '550px', marginLeft: '4rem', marginTop: '2rem' }}>
        
        
          <form action="">
            <div style={{ display: 'flex' }}>
              <div>
                <h4>What's the occasion?</h4>
                <select name="" id="gt" style={{
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
                <input id="gt" style={{
                  outline: 'none', border: '1px solid darkgray', padding: '4.4px 12px',
                  paddingRight: '120px', color: 'darkrgray', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: '20px'
                }} type="date" />
              </div>

            </div>

            <h4 style={{ marginTop: '1.5rem' }}>Venue Address </h4>
            <input type="text" id="gt" style={{
              width: '40rem',
              padding: '4.4px 4.4px', border: '1px solid gray', outline: 'none'
            }} />

            <div style={{ display: 'flex', marginTop: '1rem' }}>
              <div>
                <h4>Budget</h4>
                <input type='number' id="gt" min="12500000" value={budget}
                  onChange={handleBudgetChange} style={{
                    outline: 'none', border: '1px solid darkgray', padding: '6px 4px',
                    paddingRight: '110px'
                  }} />
                {budgetError && <p style={{ color: 'red' }}>{budgetError}</p>}
              </div>
              <div style={{ marginLeft: '2rem' }}>
                <h4 >How Many People will attend?</h4>
                <input type='number' name="" id="gt" style={{
                  outline: 'none', border: '1px solid darkgray', padding: '6px 4px',
                  paddingRight: '105px'
                }}>

                </input>
              </div>

            </div>

            <h4 style={{ marginTop: '1.5rem' }}>Full Name</h4>
            <input type="text" id="gt" style={{
              width: '40rem', border: '1px solid  darkgray',
              padding: '4.4px 4.4px', border: '1px solid gray', outline: 'none'
            }} />
            <div style={{ display: 'flex', marginTop: '1rem' }}>
              <div>
                <h4>
                  Email Address (No Spam!)</h4>
                <input type="email" id="email" name="email" style={{
                  outline: 'none', border: '1px solid darkgray', padding: '6px 4px',
                  paddingRight: '110px'
                }} onChange={handleEmailChange} />

                {emailError && <p style={{ color: 'red', fontSize: '0.8rem' }}>{emailError}</p>}
              </div>
              <div style={{ marginLeft: '2rem' }} >
                <h4 >Mobile Number</h4>

                <PhoneInput id="phone" type="tel" placeholder="Phone number" defaultCountry="IN"
                  value={value}
                  onChange={setValue} />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>

            </div>

            <h4 style={{ marginTop: '1.5rem' }}>Tell us more (we love to listen)</h4>

            <textarea id="gt" style={{
              width: '40rem',
              padding: '4.4px 4.4px', border: '1px solid gray', outline: 'none'
            }} />

            <div style={{ display: 'flex', paddingTop: '1rem', borderBottom: '1px solid darkgray', paddingBottom: '1.5rem' }}>
              <div>
                <select name="" id="" style={{
                  backgroundColor: 'white', border: '0.5px solid darkgray', borderRadius: '0.3rem',
                  outline: 'none', border: '1px solid darkgray', padding: '10px 4px',
                  paddingRight: '10px'
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

        width: '420px', height: '120px', marginTop: '0.8rem', marginLeft: '2rem', borderRadius: '1rem', marginRight: '3rem'
      }}>
        <div class="toggle-switch" style={{ marginLeft: '2rem', marginTop: '1rem' }}>
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
    <div style={{ display: 'flex', marginTop: '10rem', marginLeft: '6.5rem', marginRight: '4.5rem', marginBottom: '3rem' }}>
      <div style={{ flex: 1, lineHeight: '1rem' }}>
        <div style={{ width: '420px' }}>
          <h3 id="cd" style={{ paddingBottom: '1rem' }}>Why StarClinch</h3>
          <p><img src="https://i.ibb.co/QXhdXRT/024-C4140-C1-C3-41681710215-246045jyq662.jpg" alt="your-image" width="15px" height="16px" style={{ marginRight: '5px', }} /> Reliable Booking Partner - 10K+ bookings in the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  last 8 years</p>
          <p><img src="https://i.ibb.co/QXhdXRT/024-C4140-C1-C3-41681710215-246045jyq662.jpg" alt="your-image" width="15px" height="16px" style={{ marginRight: '5px' }} /> ONLY VC funded Entertainment startup</p>
          <p><img src="https://i.ibb.co/QXhdXRT/024-C4140-C1-C3-41681710215-246045jyq662.jpg" alt="your-image" width="15px" height="16px" style={{ marginRight: '5px' }} /> Follow ESCROW model</p>
          <p><img src="https://i.ibb.co/QXhdXRT/024-C4140-C1-C3-41681710215-246045jyq662.jpg" alt="your-image" width="15px" height="16px" style={{ marginRight: '5px' }} /> Leverage the TECH; Hence, don't overcharge</p>
          <p><img src="https://i.ibb.co/QXhdXRT/024-C4140-C1-C3-41681710215-246045jyq662.jpg" alt="your-image" width="15px" height="16px" style={{ marginRight: '5px' }} /> Specialized in CORPORATE Events</p>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h3 id="cd">Brands we've worked with</h3>
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
        <img src="https://i.pinimg.com/originals/f7/e6/e4/f7e6e413e682ce5ac29d1f5590d0aee0.jpg" alt="your-image" width="250px" height="60px" style={{ marginLeft: '1rem' }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ color: '#505050', marginRight: '9rem' }}><span style={{ paddingRight: '1rem', marginLeft: '-2rem' }}>On social networks</span>

            <a target="_blank" href="https://www.facebook.com/starclinchpage/"><i className="fa-brands fa-square-facebook mun" ></i></a>
            <a target="_blank" href="https://twitter.com/StarClinch"><i className="fa-brands fa-twitter mun" ></i></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCQoaiFC4a1VBLZOgBi9Y_bg"><i className="fa-brands fa-youtube mun" ></i></a>
            <a target="_blank" href="https://www.instagram.com/starclinch/target="> <i className="fa-brands fa-instagram mun" ></i></a>
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