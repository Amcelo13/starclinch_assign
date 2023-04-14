import React from 'react';
import './Nav.css';

function Nav() {
  const stylo = {
    backgroundColor: '#ff214f',
    color: 'white',
    borderRadius: '0.7rem',
    fontWeight: '550',
    marginBottom:'-5rem',
    padding:'5px 18px',
    outline: 'none',
    transition: 'background-color 0.3s ease-out',
    ':hover': {
      backgroundColor: 'white',
      cursor: 'pointer',
      color: 'black',
    },
  };
  
  return (
      <section id="header" style={{zIndex:'5', position:'fixed', boxShadow: "0px 5px 10px -5px rgba(0, 0, 0, 0.5)",marginTop:'0px'}}>
        <a href="index.html">
          <img src="public/logo.png" className="logo" alt="" width="170px" height="42px" style={{marginLeft:'3rem'}}/>
        </a>
        <div style={{paddingTop:'0.3rem'}}>
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
            <button className="thi" style={stylo} >Post Your Requirement</button>
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
