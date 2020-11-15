import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Redirect,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form, Row, Col, ButtonGroup, Card, CardDeck} from 'react-bootstrap';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

var storage=window.localStorage;


class BrowsePage extends React.Component{

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
    ],
      HasGroup:false, HasPC:false, HasPrinter: false, HasFood: false, HasQuiet:false, MaxDistance:1000, isLoading: false, redirect: false}
  }



  filterGroup(){this.setState({HasGroup:!this.state.HasGroup})}
  filterPC(){this.setState({HasPC:!this.state.HasPC})}
  filterPrinter(){this.setState({HasPrinter:!this.state.HasPrinter})}
  filterFood(){this.setState({HasFood:!this.state.HasFood})}
  filterQuiet(){this.setState({HasQuiet:!this.state.HasQuiet})}

  importPreference(){
    this.setState({HasGroup:storage["pre_group"]==0?true:false,
     MaxDistance:storage["pre_distance"],
     HasPC:storage["pre_pc"]==0?true:false,
      HasPrinter:storage["pre_printer"]==0?true:false, 
      HasFood:storage["pre_food"]==0?true:false, 
      HasQuiet:storage["pre_quiet"]==0?true:false});
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
    ]})}}

  
    clickResult=()=> {
      console.log("clicked");
      this.setState({ isLoading: true })
      setTimeout(() => {
          this.setState({ isLoading: false, redirect: true })
      }, 50)
  }

  renderSeat = () => {
      if (this.state.redirect) {
          return (<Redirect to={`/Seats`} />)
      }
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
        <CardDeck style={{paddingTop:'50px'}}>
        <Card style={{ width: '30rem', textAlign:"center"}}>
        <div >
        <Form>
          <Form.Group as={Row} controlId="formPlaintextSeatType">
          <Col ></Col>
          <Col >
            <Button style={{fontSize:'16px'}} variant="outline-primary" onClick={() => this.importPreference()}>Import My Preference</Button>{' '}
          </Col>
          <Col ></Col>
          </Form.Group>


          <Form.Group as={Row} controlId="formPlaintextDistance">
          <Form.Label column sm="3" style={{margin:'10px', fontSize:'18px'}}>
            DISTANCE
          </Form.Label>
          <Col sm="7">
          <Form.Control type="range" min={0} max={1000} value={this.state.MaxDistance}  onChange={this.handleChange} />
          <Form.Label style={{float:'left', padding: '0px', margin: '0px', fontSize:'16px'}}>0m</Form.Label>
          <Form.Label style={{float:'left', paddingLeft: '80px', margin: '0px', fontSize:'16px'}}>{this.state.MaxDistance}m</Form.Label>
          <Form.Label style={{float:'right', padding: '0px', margin: '0px', fontSize:'16px'}}>1000m</Form.Label>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextSeatType">
          <Form.Label column sm="3" style={{margin:'10px', fontSize:'18px'}}>
            SEAT TYPE
          </Form.Label>
          <Col sm="7">
          <ButtonGroup className="mr-2" aria-label="First group" style={{margin:'10px', fontSize:'18px'}}>
            <Button active={this.state.HasPC} variant="outline-primary" size = "sm" onClick={() => this.filterPC()} style={{margin:'2px'}}>PC</Button>
            <Button active={this.state.HasGroup} variant="outline-primary" size = "sm" onClick={() => this.filterGroup()} style={{margin:'2px'}}>Group</Button>
            <Button active={this.state.HasPrinter} variant="outline-primary" size = "sm" onClick={() => this.filterPrinter()}style={{margin:'2px'}}>Printer</Button>
            <Button active={this.state.HasFood} variant="outline-primary" size = "sm" onClick={() => this.filterFood()}style={{margin:'2px'}}>Food</Button>
            <Button active={this.state.HasQuiet} variant="outline-primary" size = "sm" onClick={() => this.filterQuiet()}style={{margin:'2px'}}>Quiet</Button>
          </ButtonGroup>
          </Col>
        </Form.Group>

        <Form.Group controlId="formPlaintextSeatType">
          <Form.Label style={{margin:'10px', fontSize:'18px'}}> CALENDAR  </Form.Label>
          <Row>
            <Col></Col>
            <Col>
          <Calendar
          onChange={this.onChange}
          value={this.state.date}/></Col>
          <Col></Col>
          </Row>
          </Form.Group>
          </Form>
          </div>
          </Card>
          

          
        <Card tyle={{ width: '40rem', textAlign:"center"}}>
        <div className="cardImg">
        <div style={{float:'left', padding: '10px', margin: '10px'}}>
        {toDisplay.map( 
            ({image,Group}) => 
            <img width = "90%" src={image} onClick={this.clickResult}/>
             )}
        </div>
        </div>
        </Card>
        
        {this.renderSeat()}
        </CardDeck> 
      )}
}

export default BrowsePage;