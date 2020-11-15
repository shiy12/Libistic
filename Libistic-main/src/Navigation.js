import React from 'react';
import { Nav, Navbar, Form, FormControl, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logo from './img/logo.png';

const Styles = styled.div`
  #logo{
    margin-left:40px;
    height:8vh;
    weight:15vw;
  }
  .navbar { background-color: white; }
  .nav-link {
    position:relative;
    right:50;
    margin-right:50px;
  }
  a,.navbar-nav, .navbar-light .nav-link {
    font-size:22px;
    color: black;
    &:hover { color: lightseagreen; }
  }
  .navbar-brand {
    font-size: 2em;
    color: rgb(69, 131, 212);;
    &:hover { color: black; }
  }
  .item,.itemU{
    font-size:14px;
  }
  a.item.nav-link{
    font-size:14px;
  }
  a.itemU.dropdown-item,a.itemImg.dropdown-item{
    display:inline;
  }
  a.itemImg.dropdown-item{
    margin-left:12px;
    padding-left:1px;
    padding-right:1px;
  }
  a.itemU.dropdown-item{
    padding-left:1px;
    padding-right:1px;
  }
`;

const NavigationBar = () => (
  
  <Styles>
    <Navbar expand="md" style={{textAlign:"right"}}>
      <Navbar.Brand href="/"><img id='logo' src={logo} alt='Libistic' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" ></Nav>
        <Nav.Item><Nav.Link href="/" >Main</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/BrowsePage" >Browse</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/SettingPage" >Setting</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/SupportPage" >Support</Nav.Link></Nav.Item>

        
        <NavDropdown title="Test User" id="basic-nav-dropdown">
            <NavDropdown.Item className='itemImg'><img width={'10px'} height={'10px'} src={"https://avatars2.githubusercontent.com/u/32040029?s=400&v=4"}></img></NavDropdown.Item>
            <NavDropdown.Item className='itemU'>user@test.com</NavDropdown.Item>
            <Nav.Item className='item'><Nav.Link className='item' href="/HistoryPage">Booking History</Nav.Link></Nav.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item className='item'>Sign Out</NavDropdown.Item>
        </NavDropdown>

      </Navbar.Collapse>
      <Form className="form-center" >
        
        <FormControl type="text" placeholder="Type here" className="" />
        
      </Form>
    </Navbar>
  </Styles>
)

export default NavigationBar;