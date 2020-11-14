import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form} from 'react-bootstrap';

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
      <div style={{padding:'50px'}}>
      <div style={{float:'left', width:'60%'}}>
      <h2>FAQ</h2><br/>
      <h4>Q: How do I know I've booking successfully?</h4><br/>
      <h6 style={{paddingLeft:'50px'}}> A: A confirmation email will be sent to your email.</h6><br/>
      <h4>Q: What should I do if I encounter an error when booking?</h4><br/>
      <h6 style={{paddingLeft:'50px'}}> A: Please contact the libarian stuff directly and they will be able to assist you.</h6><br/>
      <h4>Q: I have some advice for improving the system.</h4><br/>
      <h6 style={{paddingLeft:'50px'}}> A: Yes! Please don't hesitate to email us at libistic@mcmaster.ca. We would like to hear from you.</h6><br/>
      </div>

      <div style={{float:'left', width:'30%',height:'500px',borderLeft:'1px solid grey',paddingLeft:'20px',marginTop:'50px'}}>
        <h4>If you have other questions, please feel free to contact an librarian.</h4>
        <Button style={{marginTop:'40px',marginLeft:'100px',marginBottom:'40px'}} variant="outline-primary" onClick={() => this.CallLib()}>Call a librarian</Button>{' '}
        <h4>or Leave Us a Message</h4>
        <Form.Group controlId="exampleForm.ControlTextarea1">
         <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button style={{marginTop:'20px',marginLeft:'150px',marginBottom:'40px'}} variant="outline-primary" onClick={() => this.ContactUs()}     >Sent</Button>{' '}

      </div>


      </div>
    )
  }
}

export default SupportPage;