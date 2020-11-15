import React from 'react';
import { Redirect } from 'react-router';
import lib from './img/Thode.jpg';
import 'react-dropdown/style.css';
import './HistoryPage.css';
import {Form, Row, Col, Button, Image} from 'react-bootstrap';

class HistoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: '',
            Location: '',
            start: '11:00',
            end: '12:00',
            date: '2020-12-10',
            name: '',
            email: '',
            isLoading: false,
            redirect: false
        }
    };

    componentWillMount() {
        let selected = '';
        let selectedM = '';
        let selectName = '';
        let selectEmail ='';
        if (localStorage && localStorage.getItem('select') && localStorage.getItem('selectM')
        && localStorage.getItem('name')&& localStorage.getItem('email')) {
            selected = JSON.parse(localStorage.getItem('select'));
            selectedM = JSON.parse(localStorage.getItem('selectM'));
            selectName = JSON.parse(localStorage.getItem('name'));
            console.log({selectName});
            selectEmail = JSON.parse(localStorage.getItem('email'));
            console.log({selectEmail});
          }
         this.setState({ID: selected})
         this.setState({Location: selectedM})
         this.setState({name: selectName})
         this.setState({email: selectEmail})

    }


    goMain = () => {
        localStorage.setItem('name',
                JSON.stringify(''));
        localStorage.setItem('email',
                JSON.stringify(''));
        localStorage.setItem('select',
                JSON.stringify(''));
        localStorage.setItem('selectM',
                JSON.stringify(''));
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.setState({ isLoading: false, redirect: true })
        }, 2000)
        alert('This booking history has been deleted!');
    }
    renderMain = () => {
        if (this.state.redirect) {
            return (<Redirect to={`/`} />)
        }
    }

    render() {
        return (
            <div className='sec'>
            <h3 id='historyTitle' style={{fontSize:'22px'}}>Booking History</h3>
            <Form>
                <Row>
                <Col sm='1'></Col>
                <Col xs='auto'>
                <Image style={{width: '80%', height: '80%', marginLeft:'20%'}} src={lib} id='lib' alt='Thode Library' rounded/>
                </Col>
                <Col sm='7' style={{marginTop:'10px'}}>
                <div className='hbox'>
                <div className='subBox' style={{padding:'2px', fontSize:'14px'}}>
                    <span className='spans'>Name: </span>
                    <div id='name'>{this.state.name},</div>
                    <div id='email'>{this.state.email}</div> 
                </div>
                <div className='subBox' style={{padding:'2px', fontSize:'14px'}}>
                    <span className='spans'>Location: </span>
                    <div id='loc'>{this.state.Location},</div>
                    <div id='id'>{this.state.ID}</div>
                </div>
                <div className='subBox' style={{padding:'2px', fontSize:'14px'}}>
                    <span className='spans'>Time: </span>
                        <div id='date'>{this.state.date},</div>
                    <div id='time'>{this.state.start}<span> - </span>{this.state.end}</div>
                    <Button style={{fontSize:'14px'}} id='remove' onClick={() => this.goMain()}>Delete</Button>
                </div>
                </div>
                </Col>
                </Row>
            </Form>
            
                
                
                
                
                
                
                
                {this.renderMain()}
                
            </div>
        )
    }
}

export default HistoryPage;