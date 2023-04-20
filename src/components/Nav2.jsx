import React from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';
function Nav() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/');
  }
  return (
    <section id="header" style={{ zIndex: '5', position: 'fixed', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', marginTop: '0px' }}>

      <img onClick={handleNavigate} src="https://i.pinimg.com/originals/72/1b/ff/721bff10deee8e79caf4d5dcc455f234.jpg" className="logo" alt="" width="170px" height="40px" style={{ marginLeft: '3rem' ,cursor:'pointer'}} />

      <div style={{ paddingTop: '0.2rem', fontFamily: 'Montserrat', }}>
        <ul id="navbar">
          <li style={{ marginLeft: '3rem' }}>
            <select style={{ padding: '8px 5px ',fontSize:'12px', color:'black',backgroundColor: '#fff', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: '550', fontFamily: 'Montserrat',marginBottom:'-2rem' ,
          marginRight:'-1rem'}} name="" id="">
              <option value="" >Browse by Category</option>
            </select>
          </li>
          <li>
            <select style={{ marginRight: '-1rem', padding: '8px 5px ', backgroundColor: '#fff', border: 'none', cursor: 'pointer', fontSize: '12px', fontFamily: 'Montserrat', fontWeight: '550' , color:'black',
            marginBottom:'-2rem'}} name="" id="">
              <option value="">For Artists</option>
            </select>
          </li>
          <li >
            <button id='m2' >Post Your Requirement</button>
          </li>


        </ul>
      </div>
    </section>
  );
}

export default Nav;
