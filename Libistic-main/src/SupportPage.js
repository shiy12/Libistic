import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card, CardDeck, Row} from 'react-bootstrap';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

var storage=window.localStorage;


class SupportPage extends React.Component{

  constructor(props) {
    super(props);
  }
  
  
  CallLib(){
    alert("A librarian will assist you in 10 minutes");
  }

  ContactUs(){
    alert("Message has been send, Thank you!");
  }

  render(){
    return(
      <CardDeck> 
        <div style={{padding:'50px'}}>
        <Card style={{ width: '50rem', textAlign:"left"}}>
          <Card.Body>
          <h2 style={{fontSize:'22px'}}>FAQ</h2><br/>
          <h4 style={{fontSize:'18px'}}>Q: How do I know I've booking successfully?</h4><br/>
          <Card.Text style={{paddingLeft:'30px', fontSize:'16px'}}> A: A confirmation email will be sent to your email.</Card.Text><br/>
          <h4 style={{fontSize:'18px'}}>Q: What should I do if I encounter an error when booking?</h4><br/>
          <Card.Text style={{paddingLeft:'30px', fontSize:'16px'}}> A: Please contact the libarian stuff directly and they will be able to assist you.</Card.Text><br/>
          <h4 style={{fontSize:'18px'}}>Q: I have some advice for improving the system.</h4><br/>
          <Card.Text style={{paddingLeft:'30px', fontSize:'16px'}}> A: Yes! Please don't hesitate to email us at libistic@mcmaster.ca. We would like to hear from you.</Card.Text><br/>
          </Card.Body>
        </Card>
        </div>
        <div style={{padding:'50px'}}>
        <Card style={{ width: '40rem', textAlign:"left"}}>
          <Card.Body style={{margin:'20px'}}>
          <Form>
            <Row>
            <h4 style={{fontSize:'18px'}}>If you have other questions, please feel free to contact an librarian.</h4>
            <Button style={{margin: '30px', fontSize:'16px'}} variant="outline-primary" onClick={() => this.CallLib()}>Call a librarian</Button>{' '}
            </Row>
            <Row>
            <h4 style={{fontSize:'18px'}}>or Leave Us a Message</h4>
            </Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Row>
            <Button style={{margin: '30px', fontSize:'16px'}} variant="outline-primary" onClick={() => this.ContactUs()}>Sent</Button>{' '}
            </Row>
          </Form>
          </Card.Body>
        </Card>
        </div>
      </CardDeck>
    )
  }
}

export default SupportPage;