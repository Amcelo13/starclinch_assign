import React from 'react';
import './Nav.css';

function Nav() {

  return (
      <section id="header" style={{zIndex:'5', position:'fixed',boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',marginTop:'0px'}}>
        <a href="index.html">
          <img src="public/logo.png" className="logo" alt="" width="170px" height="40px" style={{marginLeft:'3rem'}}/>
        </a>
        <div style={{paddingTop:'0.2rem',fontFamily: 'Montserrat',}}>
          <ul id="navbar">
            <li style={{marginLeft:'3rem'}}>
            <select style={{padding:'8px 5px ',backgroundColor:'#fff',border:'none',cursor:'pointer',fontSize:'15px',fontWeight:'500',fontFamily: 'Montserrat',}} name="" id="">
              <option  value="" >Browse by Category</option>
            </select>
            </li>
            <li>
            <select style={{marginRight:'0rem',padding:'8px 5px ',backgroundColor:'#fff',border:'none',cursor:'pointer',fontSize:'15px',fontFamily: 'Montserrat',fontWeight:'500'}} name="" id="">
              <option  value="">For Artists</option>
            </select>
            </li>
            <li >
            <button  id='m2' >Post Your Requirement</button>
            </li>
            <li>
            <i style={{cursor:'pointer',paddingTop:'0.6rem',color:'gray'}} className="fa-solid fa-magnifying-glass"></i>
            </li> 
            <li>
              <a id="lg-bag" href="/">
              <img src="public/cart.png" alt="" height="28px" style={{paddingTop:'-1rem',marginBottom:'0px',width:'17px',height:'22px'}}/> </a>
            </li>
          </ul>
        </div>
      </section>
  );
}

export default Nav;
