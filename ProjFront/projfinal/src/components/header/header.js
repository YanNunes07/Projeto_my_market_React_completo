import React from "react";
import { Navbar , NavItem, Row} from 'react-materialize';

const Header = () => (
  <Row>  
    <Navbar className="red darken-4">
      <NavItem href='/'>My Market</NavItem>
      <NavItem  href='/client'>Cadastro</NavItem>
      <NavItem  href='/login'>Login</NavItem>
      
    </Navbar>
  </Row>
);

export default Header;  