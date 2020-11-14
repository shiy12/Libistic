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
import { Button,Form, FormControl, FormCheck, Row, Col, Dropdown,DropdownButton,ToggleButton,ToggleButtonGroup,ButtonGroup} from 'react-bootstrap';

import Calendar from 'react-calendar';
const hashHistory = createHashHistory();

var storage=window.localStorage;


class Hpage extends React.Component{


  render(){
    return(
    <div style={{padding: '50px'}}>
    <h2>Homepage</h2><br/>
    <p>This is a dashboard for viewing and analyzing social media posts resulting from a disaster.</p>
    <p>Click the Live Feed button to see the live feed posts of the social media posts.</p>
    <p>Click the Analytics button to see the analytics result.</p>
    </div> 
    )}
}


class Page3 extends React.Component{

  constructor(props) {
    super(props);
    // this.state = { images: ["images/HSL.png","images/Thode.png","images/Mills.png"],date: new Date(),}

    this.state = {
    libraries: [
      {image: "images/Thode.png", 
      PC:true,Group: true, Printer:true, Food:false, Quiet:false, 
        Distance:100,
         },
      {image: "images/Mills.png", 
         PC:true,Group: true, Printer:true, Food:true, Quiet:true, 
            Distance:500,
           },
      {image: "images/HSL.png", 
       PC:true,Group: false, Printer:true, Food:false, Quiet:false, 
       Distance:800,
        },

      // {image: "images/error.png", 
      //   Group: true, 
      //   Distance:0,
      //  }
    ],
      HasGroup:false, HasPC:false, HasPrinter: false, HasFood: false, HasQuiet:false, MaxDistance:1000}
  }


  onChange = date => this.setState({ date })

  filterGroup(){this.setState({HasGroup:!this.state.HasGroup})}
  filterPC(){this.setState({HasPC:!this.state.HasPC})}
  filterPrinter(){this.setState({HasPrinter:!this.state.HasPrinter})}
  filterFood(){this.setState({HasFood:!this.state.HasFood})}
  filterQuiet(){this.setState({HasQuiet:!this.state.HasQuiet})}

  importPreference(){
    this.setState({HasGroup:storage["pre_group"], MaxDistance:storage["pre_distance"],HasPC:storage["pre_pc"], HasPrinter:storage["pre_printer"], HasFood:storage["pre_food"], HasQuiet:storage["pre_quiet"]});
  }



  // filterDistance(e){this.setState({HasDistance:e.target.getAttribute("value")})}
   handleChange =(e)=> {
     this.setState({MaxDistance:e.target.value});
     if(this.state.MaxDistance<=100) {this.setState({libraries:[
      {image: "images/error.png", 
      PC:true,Group: true, Printer:true, Food:true, Quiet:true, 
       Distance:0,
        },
    ]})}
    if(this.state.MaxDistance>100) {this.setState({libraries:[
      {image: "images/Thode.png", 
      PC:true,Group: true, Printer:true, Food:false, Quiet:false, 
        Distance:100,
         },
      {image: "images/Mills.png", 
         PC:true,Group: true, Printer:true, Food:true, Quiet:true, 
            Distance:500,
           },
      {image: "images/HSL.png", 
       PC:true,Group: false, Printer:true, Food:false, Quiet:false, 
       Distance:800,
        },
    ]})}
  
  
  
  }

    render(){

      var toDisplay = this.state.libraries;
      if(this.state.HasPC)  toDisplay=  toDisplay.filter(x => x.PC == true);
      if(this.state.HasGroup)  toDisplay=  toDisplay.filter(x => x.Group == true);
      if(this.state.HasPrinter)  toDisplay=  toDisplay.filter(x => x.Printer == true);
      if(this.state.HasFood)  toDisplay=  toDisplay.filter(x => x.Food == true);
      if(this.state.HasQuiet)  toDisplay=  toDisplay.filter(x => x.Quiet == true);
      toDisplay = toDisplay.filter(x=>x.Distance<=this.state.MaxDistance);


      return(
      <div style={{padding: '50px'}}>
        <div style={{float:'left', width:'36%', borderRight: '1px solid grey', padding: '10px', margin: '10px'}}>
        <Form>

          <Form.Group as={Row} controlId="formPlaintextSeatType">
          <Col sm="3">
            </Col>
          <Col sm="7">
            <Button  variant="outline-primary" onClick={() => this.importPreference()}>Import My Preference</Button>{' '}
            </Col>

          </Form.Group>


          <Form.Group as={Row} controlId="formPlaintextDistance">
          <Form.Label column sm="5">
            DISTANCE
          </Form.Label>
          
          <Col sm="7">
          
          
          {/* <Form.Control type="range" min={100} max={5000} defaultValue={100}  onChange={()=>this.filterDistance()} /> */}
          <Form.Control type="range" min={0} max={1000} value={this.state.MaxDistance}  onChange={this.handleChange} />
          <Form.Label>0m</Form.Label>
          <Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label>500m<Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label><Form.Label></Form.Label>
          <Form.Label>1000m</Form.Label>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextSeatType">
          <Form.Label column sm="5">
            SEAT TYPE
          </Form.Label>
          <Col sm="7">

        <ButtonGroup className="mr-2" aria-label="First group">
          <Button active={this.state.HasPC}variant="outline-primary" size = "sm" onClick={() => this.filterPC()} style={{margin:'2px'}}>PC</Button>
          <Button active={this.state.HasGroup} variant="outline-primary" size = "sm" onClick={() => this.filterGroup()} style={{margin:'2px'}}>Group</Button>
          <Button active={this.state.HasPrinter}variant="outline-primary" size = "sm" onClick={() => this.filterPrinter()}style={{margin:'2px'}}>Printer</Button>
          <Button active={this.state.HasFood}variant="outline-primary" size = "sm" onClick={() => this.filterFood()}style={{margin:'2px'}}>Food</Button>
          <Button active={this.state.HasQuiet}variant="outline-primary" size = "sm" onClick={() => this.filterQuiet()}style={{margin:'2px'}}>Quiet</Button>
        </ButtonGroup>
          </Col>
        </Form.Group>


        <Form.Group as={Row} controlId="formPlaintextSeatType">
          <Form.Label column sm="5">
            SEAT TYPE
          </Form.Label>
          <Col sm="9"style={{margin: '30px'}}>
          <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
          </Col>
        </Form.Group>

        </Form>
      <span>{this.state.test1}</span>
        </div>





        <div style={{float:'left', width:'61%', height:'550px',border: '0px solid grey', padding: '10px', margin: '10px'}}>
        { toDisplay.map( 
            ({image,Group}) => 
            <img width = "90%" src={image}/>
             )}
        </div>
      </div> 
      )}
}

class Page2 extends React.Component{

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
          <Route path="/setting" render = {(props) => <Page2 {...props}  />}/>
          <Route path="/browse" render = {(props) => <Page3 {...props}  />}/>
        
        </Router>      
      </div>
    );
  }
}





export default App;
