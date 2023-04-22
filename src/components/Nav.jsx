import React from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigation = useNavigate()
  
  const handlclick =  ()=>{
    navigation('/')
  }

  return (
      <section id="header" style={{zIndex:'5', position:'fixed',boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',marginTop:'0px',maxWidth:'100vw'}}>
        
          <img src="https://i.pinimg.com/originals/72/1b/ff/721bff10deee8e79caf4d5dcc455f234.jpg" onClick={handlclick} className="logo" alt="" width="170px" height="40px" style={{marginLeft:'3rem',cursor:'pointer'}}/>
      
        <div style={{paddingTop:'0.2rem',fontFamily: 'Montserrat',marginRight:'5rem',}}>
          <ul id="navbar">
            <li>
            <button style={{ backgroundColor:'#fff',color:'black',border:'none',cursor:'pointer',fontSize:'12.5px',fontWeight:'550',fontFamily: 'Montserrat',marginBottom:'-2rem'
          }} name="" id="nm">
            Entertainers  <i className="fa fa-chevron-down hadid mn"></i>
 
            </button>
            </li>
             <li>
            <button onClick={()=>openDialog()} style={{ backgroundColor:'#fff',color:'black',border:'none',cursor:'pointer',fontSize:'12.5px',fontWeight:'550',fontFamily: 'Montserrat',marginBottom:'-2rem'
          }} name="" id="nm">
            Join Community  <i className="fa fa-chevron-down hadid mn1"></i>

            </button>
            </li>
            <li >
            <button  id='m2' style={{marginRight:'-2rem'}}>Post Your Requirement</button>
            </li>
           
          </ul>
        </div>
      </section>
  );
}

export default Nav;
