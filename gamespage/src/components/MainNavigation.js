import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const MainNavigation = () =>{

    return (

        <Navbar>
            <Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/">Games</Nav.Link>
                    <Nav.Link as={Link} to ="/create-game">Create Game</Nav.Link>
                    <Nav.Link as={Link} to ="/delete-game">Delete Game</Nav.Link>
                    <Nav.Link as={Link} to="/all-characters">Characters</Nav.Link>
                </Nav>

            </Navbar.Brand>

        </Navbar>


    )


} 

export default MainNavigation;