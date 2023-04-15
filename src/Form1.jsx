import React,{useState} from 'react'
import './App.css'
import './components/adfar.css'
function Form1() {

  return (
    <div style={{ marginTop: '8rem', display: 'flex', marginLeft: '6rem', marginRight: '4.5rem' }}>

      <div id='form__container' style={{ width: '800px',marginTop:'2rem' }}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img style={{borderRadius:'50%'}} height="100px" src="https://wpcdn.starclinch.in/2019/03/26642.jpg?format=webp&w=300&dpr=1.5" width="110px" alt="" />
          <h3 style={{width:'100px',paddingLeft:'1rem'}}>Ranbir Kapoor</h3>
        </div>

        <div style={{display:'flex',alignItems:'center',marginTop:'3rem'}}>
          <img style={{borderRadius:'50%'}} height="40px" src="public\star.png" width="45px" alt="" />
          <h3 style={{width:'400px',paddingLeft:'1rem',marginBottom:'-0.2rem'}}>Submit Form</h3>
        </div>
        <h4 style={{marginLeft:'3.1rem',width:'400px',paddingLeft:'1rem',fontWeight:'500'}}>Get Best Price</h4>


      

      </div>




      <div id="wtsp" style={{backgroundColor:'#f8f8f8',boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          
           width:'400px',height:'120px',marginTop:'1rem',marginLeft:'6rem',borderRadius:'1rem'}}>
        <div class="toggle-switch"  style={{marginLeft:'3.5rem',marginTop:'1rem'}}>
          <input class="toggle-input" id="toggle" type="checkbox" />
          <label class="toggle-label" for="toggle"></label>
          <p style={{ marginTop:'0.2rem',
          top:'-100'
          ,marginLeft: '4.5rem',fontSize:'0.8rem',width:'200px' }}>Send Quotes on Whatsapp</p>
          <button id="m3" style={{width:'250px'}}>Show Best Price</button>
        </div>

      </div>

    </div>
  )
}

export default Form1