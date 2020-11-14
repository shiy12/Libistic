import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import { createHashHistory } from 'history';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form, Row, Col, Dropdown,DropdownButton,ButtonGroup} from 'react-bootstrap';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

var storage=window.localStorage;

class SettingPage extends React.Component{

  constructor(props){
    super(props)
    this.state={distance:800, timeslot:"Pick a time slot", pc:false, group:false, printer:false, food:false, quiet:false,school:"", address:"",type:""};
  }
  SetSlot1(){this.setState({timeslot:"8.00am-11.00am"})}
  SetSlot2(){this.setState({timeslot:"1.00pm-5.00pm"})}
  SetSlot3(){this.setState({timeslot:"5.00pm-8.00pm"})}
  FlipPc(){this.setState({pc:!this.state.pc})}
  FlipGroup(){this.setState({group:!this.state.group})}
  FlipPrinter(){this.setState({printer:!this.state.printer})}
  FlipFood(){this.setState({food:!this.state.food})}
  FlipQuiet(){this.setState({quiet:!this.state.quiet})}
  SubmitPreferene(){
    storage["pre_distance"]=this.state.distance;
    storage["pre_pc"]=this.state.pc?0:1;
    storage["pre_group"]=this.state.group?0:1;
    storage["pre_printer"]=this.state.printer?0:1;
    storage["pre_food"]=this.state.food?0:1;
    storage["pre_quiet"]=this.state.quiet?0:1;
    alert('Your setting has been saved.');
  }
  CancelPreference(){
    this.setState({distance:0, timeslot:"Pick a time slot", pc:false, group:false, printer:false, food:false, quiet:false,school:"", address:""})
  }
  handleDistance =(e)=> {
    this.setState({distance:e.target.value});}

  render(){
    


    return(
    <div style={{padding: '50px'}}>
      <h2>Preference</h2><br/>
<Form>

  <Form.Group as={Row} controlId="formPlaintextSearch">
    <Form.Label column sm="2">
      School
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" placeholder="" onChange={(event) => this.setState({school: event.target.value})} value={this.state.school} />
    </Col>
  </Form.Group>


  <Form.Group as={Row} controlId="formPlaintextAddress">
    <Form.Label column sm="2">
      Address
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" placeholder=""  onChange={(event) => this.setState({address: event.target.value})} value={this.state.address}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextDistance">
    <Form.Label column sm="2">
      Prefered Distance
    </Form.Label>
    <Col sm="5">
    <Form.Control type="range"min={0} max={1000} value={this.state.distance}  onChange={this.handleDistance} />
    <Form.Label style={{float:'left', padding: '0px', margin: '0px'}}>0m</Form.Label>
   
    <Form.Label style={{float:'right', padding: '0px', margin: '0px'}}>1000m</Form.Label>
    </Col>
  </Form.Group>


  <Form.Group as={Row} controlId="formPlaintextTimeSlots">
    <Form.Label column sm="2">
      Prefered Time Slots
    </Form.Label>
    <Col sm="5">

  <DropdownButton id="dropdown-basic-button" title={this.state.timeslot}>
    <Dropdown.Item onClick={() => this.SetSlot1()}>8.00am-11.00am</Dropdown.Item>
    <Dropdown.Item onClick={() => this.SetSlot2()}>1.00pm-5.00pm</Dropdown.Item>
    <Dropdown.Item onClick={() => this.SetSlot3()}>5.00pm-8.00pm</Dropdown.Item>
  </DropdownButton>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextSeatType">
    <Form.Label column sm="2">
      Prefered Seat Type
    </Form.Label>
    <Col sm="5">

        <ButtonGroup >
          <Button active={this.state.pc}variant="outline-primary" size = "sm" onClick={() => this.FlipPc()} style={{margin:'2px'}}>PC</Button>
          <Button active={this.state.group} variant="outline-primary" size = "sm" onClick={() => this.FlipGroup()} style={{margin:'2px'}}>Group</Button>
          <Button active={this.state.printer}variant="outline-primary" size = "sm" onClick={() => this.FlipPrinter()}style={{margin:'2px'}}>Printer</Button>
          <Button active={this.state.food}variant="outline-primary" size = "sm" onClick={() => this.FlipFood()}style={{margin:'2px'}}>Food</Button>
          <Button active={this.state.quiet}variant="outline-primary" size = "sm" onClick={() => this.FlipQuiet()}style={{margin:'2px'}}>Quiet</Button>
        </ButtonGroup>
    </Col>
  </Form.Group>

  {/* <Form.Group as={Row} controlId="formPlaintextSeatType">
    <Form.Label column sm="2">
      Prefered Seat Type
    </Form.Label>
    <Col sm="5">
    <Button variant="outline-primary">PC</Button>{' '}
    <Button variant="outline-primary">Group</Button>{' '}
    <Button variant="outline-primary">Printer</Button>{' '}
    <Button variant="outline-primary">Food</Button>{' '}
    <Button variant="outline-primary">Quiet</Button>{' '}
    </Col>
  </Form.Group> */}
  <br/>
  <br/>

  <Form.Group as={Row} controlId="formPlaintextSeatType">
  <Col sm="1">
    </Col>
  <Col sm="3">
    <Button variant="primary" onClick={() => this.SubmitPreferene()}>Submit</Button>{' '}
    </Col>
    <Col sm="3">
    <Button variant="primary" onClick={() => this.CancelPreference()}>Cancel</Button>{' '}
    </Col>
  </Form.Group>
</Form>

    </div>
    )}
}


export default SettingPage;