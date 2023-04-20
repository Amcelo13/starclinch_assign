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
            <select style={{ padding:'8px 14px ',marginRight:'-2rem',backgroundColor:'#fff',color:'black',border:'none',cursor:'pointer',fontSize:'13px',fontWeight:'550',fontFamily: 'Montserrat',marginBottom:'-2rem'
          }} name="" id="nm">
              <option  value="">Entertainers</option>
            </select>
            </li>
            <li>
            <select style={{padding:'8px 14px ',marginRight:'-2rem',backgroundColor:'#fff',color:"black",border:'none',cursor:'pointer',fontSize:'13px',fontFamily: 'Montserrat',fontWeight:'550',
            marginBottom:'-2rem'}} name="" id="nm">
              <option   value="">Join Community</option>
            </select>
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
