import React from 'react';
import './Nav.css';

function Nav() {

  return (
      <section id="header" style={{zIndex:'5', position:'fixed',boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',marginTop:'0px'}}>
        <a href="index.html">
          <img src="public/logo.png" className="logo" alt="" width="170px" height="40px" style={{marginLeft:'3rem'}}/>
        </a>
        <div style={{paddingTop:'0.2rem'}}>
          <ul id="navbar">
            <li>
            <select style={{padding:'8px 14px ',backgroundColor:'#fff',border:'none',cursor:'pointer',fontSize:'15px',fontWeight:'500'}} name="" id="">
              <option  value="">Entertainers</option>
            </select>
            </li>
            <li>
            <select style={{padding:'8px 14px ',backgroundColor:'#fff',border:'none',cursor:'pointer',fontSize:'15px',fontWeight:'500'}} name="" id="">
              <option  value="">Join Community</option>
            </select>
            </li>
            <li >
            <button  id='m2' >Post Your Requirement</button>
            </li>
            <li>
            <i style={{cursor:'pointer',paddingTop:'0.6rem'}} className="fa-solid fa-magnifying-glass"></i>
            </li> 
            <li>
              <a id="lg-bag" href="/">
              <img src="public/cart.png" alt="" height="28px" style={{paddingTop:'-2.2rem',marginBottom:'0px',width:'17px',height:'22px'}}/> </a>
            </li>
          </ul>
        </div>
      </section>
  );
}

export default Nav;
