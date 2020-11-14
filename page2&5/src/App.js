import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import { History } from 'react-router';

import { createHashHistory } from 'history';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Image,ListGroup,ListGroupItem, CardGroup,Form, FormControl, FormCheck, Row, Col, Dropdown,DropdownButton,ToggleButton,ToggleButtonGroup,ButtonGroup} from 'react-bootstrap';

import Calendar from 'react-calendar';

import io from 'socket.io-client';
const socket = io('http://localhost:3001');
//
// See: https://socket.io/get-started/chat
//      https://www.npmjs.com/package/socket.io-client


const hashHistory = createHashHistory();
var storage=window.localStorage;





class Page2 extends React.Component{

  constructor(props){
    super(props)
    this.state={distance:0, timeslot:"Pick a time slot", pc:false, group:false, printer:false, food:false, quiet:false,school:"", address:"",type:""};
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
    storage["pre_pc"]=this.state.pc;
    storage["pre_group"]=this.state.group;
    storage["pre_printer"]=this.state.printer;
    storage["pre_food"]=this.state.food;
    storage["pre_quiet"]=this.state.quiet;
  }
  CancelPreference(){
    this.setState({distance:0, timeslot:"Pick a time slot", pc:false, group:false, printer:false, food:false, quiet:false,school:"", address:""})
  }
  handleDistance =(e)=> {
    this.setState({distance:e.target.value});}

  render(){
    


    
    //Low
    var FireLow = this.props.posts;
    FireLow = FireLow.filter(x=>x.priority === "Low" && x.problem === "Fire");





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
    <Form.Label>0m</Form.Label>
    <Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label>
    <Form.Label>1000m</Form.Label>
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
    <ToggleButtonGroup type="checkbox" defaultValue={[]} className="mb-2">
          <ToggleButton variant="outline-primary" value={1} style={{margin:'2px'}} onChange={() => this.FlipPc()}>PC </ToggleButton>
          <ToggleButton variant="outline-primary" value={2} style={{margin:'2px'}} onChange={() => this.FlipGroup()}>Group</ToggleButton>
          <ToggleButton variant="outline-primary" value={3} style={{margin:'2px'}} onChange={() => this.FlipPrinter()}>Printer</ToggleButton>
          <ToggleButton variant="outline-primary" value={4} style={{margin:'2px'}} onChange={() => this.FlipFood()}>Food </ToggleButton>
          <ToggleButton variant="outline-primary" value={5} style={{margin:'2px'}} onChange={() => this.FlipQuiet()}>Quiet</ToggleButton>
        </ToggleButtonGroup>

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







class App extends React.Component {

  constructor(props) {
    super(props);

    // An array of social media posts messages, and we'll increment nextID
    // to maintain a unique ID for each post in our array
    this.state = {posts: [],nextID: 0};

    // We can setup the event handlers for the messages in the constructor...
    socket.on('connect', function(){

      console.log("Connect....");

      // When we receive a social media message, call setState and insert 
      // it into the array of posts
      socket.on('post', 

        function(data) {

          // Can uncomment this to see the raw data coming in...
          // console.log("post: " + JSON.stringify(data));

          // increment the next unique ID, and put post data into the list of 
          // posts... use the '...' syntax to make this insertion easier:
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
          this.setState( 
            {posts: [...this.state.posts,
                     {name: data.name, 
                      image: data.image, 
                      content: data.content, 
                      problem: data.problem,
                      priority: data.priority,
                      id: this.state.nextID}]
            ,nextID: this.state.nextID + 1} );
        }.bind(this));
        // ^^ Like other event handlers, we bind the callback function to the 
        // component so we can use setState        

    }.bind(this));
    // ^^ ... And same with the callback function for when a connection is made

  }
  
  // Output all the posts into a table
  render() {
    return (
      <div>

        <Router history={hashHistory}>
          <div style={{float:'left', width:'100%', border: '0px solid grey', padding: '10px', margin: '10px'}}>
          <NavLink style={{float:'left',margin: '20px'}} to="/hpage" activeClassName="main-active">Home</NavLink>
          <NavLink style={{float:'left',margin: '20px'}} to="/browse" activeClassName="main-active">Browse</NavLink>
          <NavLink style={{float:'left',margin: '20px'}} to="/setting" activeClassName="main-active">Setting</NavLink>
          </div>
          <Route exact path="/"><Redirect to="/hpage" /></Route>
          <Route path="/hpage" component={Hpage}/>
          <Route path="/setting" render = {(props) => <Page2 {...props} posts={this.state.posts} />}/>
          <Route path="/browse" render = {(props) => <Page3 {...props} posts={this.state.posts} />}/>
        
        </Router>      
      </div>
    );
  }
}





export default App;
