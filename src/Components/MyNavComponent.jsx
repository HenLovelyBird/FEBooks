import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class MyNavComponent extends React.Component {
    state = {}
    render() {
        return (
             <Nav className="Navbar">
            <NavItem> 
              <NavLink className="Links" href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Links" href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Links" href="#">Browse</NavLink>
            </NavItem>
          </Nav>              
        );
    }
}

export default MyNavComponent;