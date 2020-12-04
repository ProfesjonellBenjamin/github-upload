import { Nav, Navbar, NavbarBrand, NavDropdown,Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const MainNavigation = () =>{

    return (

  

<Navbar bg="dark" variant="dark">
<Navbar.Brand as={Link} to="/">Gamestore</Navbar.Brand>
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className='m-auto'>
        <Nav.Link as={Link} to="/games">Games</Nav.Link>
        <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
           </Nav>
    
    <Nav className="mr-sm-5">
        
    <NavDropdown title="Admin">
        <NavDropdown.Item as={Link} to="/all-games">Games</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/all-characters">Characters</NavDropdown.Item>
    </NavDropdown>
  
    </Nav>
    </Navbar.Collapse>
    
</Navbar>



    )


} 

export default MainNavigation;