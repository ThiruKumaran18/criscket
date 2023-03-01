import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBars() {
  // const [theme,setTheme] = useState('dark');

  return (
      <div>
        {/* className={theme=='dark'? 'darkMode' : 'lightMode'} */}
          {/* style={{'color':'yellow'}} */}
      <Navbar bg="dark" variant="dark">
      <Container>
        <Nav defaultActiveKey="/"  className="me-auto">
          <Nav.Item>
            <Link to='/' className='nav-opt'> Home </Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link to='/master-list'  href='#'>Add Master List</Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Link to='/master-list' className='nav-opt'> Add Master List </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
      </div>
  )
}

export default NavBars;

{/* <Nav.Item>
    <input type="checkbox" id='mode' checked={theme=='dark'}
      onChange={()=>setTheme((prev)=> prev=='dark'?'light':'dark')} /> 
      <label for='mode'>Dark Mode</label>
  </Nav.Item> */
}