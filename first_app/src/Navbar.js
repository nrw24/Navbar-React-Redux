import React, { Component } from 'react';
import { Collapse, Navbar,  NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Provider} from "react-redux";
import { connect } from 'http2';
export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      links : [ ],
      img : { }
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><strong> REACT</strong> </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem> 
            <NavLink href="#">Home</NavLink>    
          </NavItem> 
          <NavItem> 
            <NavLink href="#">Contact</NavLink>    
          </NavItem>
          <NavItem> 
            <NavLink href="#">About</NavLink>    
          </NavItem>
      </Nav>


          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    isOpen : state.isOpen,
    link : state.links, 
    images : state.img
  };
};

export const dispatch = connect(mapStatetoProps, undefined);