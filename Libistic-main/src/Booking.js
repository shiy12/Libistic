import React from 'react';
import { Redirect } from 'react-router';
import imgPC from './img/ic.png';
import lib from './img/Thode.jpg';
import userIcon from './img/user.svg';
import emailIcon from './img/email.svg';
import clockIcon from './img/clock.svg';
import libIcon from './img/LibIcon.png';
import 'react-dropdown/style.css';
import './Booking.css';
import { Card, CardDeck, Form, Row, Col, Image } from 'react-bootstrap';


class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: '',
            Location: '',
            Specification: 'Win 10 with MS Office, Matlab, Photoshop',
            start: '11:00',
            end: '12:00',
            date: '2020-12-10',
            name: '',
            email: '',
            isLoading: false,
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        
    };

    componentWillMount() {
        let selected = '';
        let selectedM = '';
        if (localStorage && localStorage.getItem('select') && localStorage.getItem('selectM')) {
            selected = JSON.parse(localStorage.getItem('select'));
            selectedM = JSON.parse(localStorage.getItem('selectM'));
          }
         this.setState({ID: selected})
         this.setState({Location: selectedM})

    }
    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleChange2(e) {
        this.setState({ email: e.target.value });
    }
    goSeat = () => {
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.setState({ isLoading: false, redirect: true })
        }, 50)
    }
    goSeat2 = () => {
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.setState({ isLoading: false, redirect: true })
        }, 2000)
        localStorage.setItem('name',
                JSON.stringify(this.state.name));
        localStorage.setItem('email',
                JSON.stringify(this.state.email));
        alert('Submit successfully!\nA confirmation email has been sent to '+this.state.email+'!');
    }
    renderSeat = () => {
        if (this.state.redirect) {
            return (<Redirect to={`/`} />)
        }
    }

    render() {

        return (
            <CardDeck style={{paddingTop:'30px'}}>
                <div>
                <Card style={{ width: '35rem', textAlign:"center", height:'50rem', margin:'5px', padding:'10px'}}>
                <Card.Title><h3 style={{padding:'10px',fontSize:'22px'}}>Thode Library</h3></Card.Title>
                <div className='cardImg'>
                <Card.Img style={{width: '95%', height: '70%', overflow:'auto', padding:'10px', margin:'5px'}} variant="top" src={lib} alt='Thode Library img' />
                <Image style={{width: '80%', height: '20%'}} variant="top" id='LibIcon' src={libIcon} alt='Avaliable Service' />
                </div>
                </Card>
                </div>
                <Card style={{ width: '60rem', textAlign:"left", height:'50rem', margin:'5px', padding:'10px'}}> 
                <Form>
                    <Row>
                        <Col sm='2'></Col>
                        <Col sm='2'>
                        <img style={{width: '135px', height: '130px', marginTop:'10px'}} className='ic' src={imgPC} alt="PC ICON" />
                        </Col>
                        <Col>
                        <div>
                            <label className = 'Blabel' htmlFor='id' style={{padding:'10px',fontSize:'18px'}}>ID :</label>
                            <span style={{padding:'5px',fontSize:'16px'}} id='id'>{this.state.ID}</span>
                        </div>
                        <div>
                            <label className = 'Blabel' htmlFor='location'style={{padding:'10px',fontSize:'18px'}}>Location :</label>
                            <span style={{padding:'5px',fontSize:'16px'}} id='location'>{this.state.Location}</span>
                        </div>
                        <div>
                            <label className = 'Blabel' htmlFor='Spec' style={{padding:'10px',fontSize:'18px'}}>Specification :</label>
                            <span style={{padding:'5px',fontSize:'16px'}} id='Spec'>Win 10 with MS Office, Matlab, Photoshop</span>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                    <div className='subSec'>
                    <div className='data'>
                        <div className='Subbox'>
                            <img className='icon' src={userIcon} alt='User Icon'/>
                            <label className = 'Blabel' htmlFor='name' style={{padding:'10px',fontSize:'18px'}}>Name:</label>
                            <input type="text" id="nameBox"
                                onChange={this.handleChange} style={{fontSize:'16px'}}/>
                        </div>
                        <div className='Subbox'>
                            <img className='icon' src={emailIcon} alt='Emial Icon' />
                            <label className = 'Blabel' htmlFor='email' style={{padding:'10px',fontSize:'18px'}}>Email:</label>
                            <input type="email" id="emailBox"
                                onChange={this.handleChange2} style={{fontSize:'16px'}}/>
                        </div>

                    </div>
                    <div id='TimeDate'>
                        <div className='Time'>
                            <div className='inputBox'>
                                <img className='icon' src={clockIcon} alt='Clock Icon' />
                                <label className = 'Blabel' htmlFor='box1' style={{padding:'10px',fontSize:'18px'}}>Time slot:</label>
                                <input type="time" step="60" className="box1"
                                    value={this.state.start} disabled={true}
                                    onChange={(ev) => { this.setState({ time: ev.target.value }) }} />
                            </div>
                            <div className='inputBox'>
                                <label htmlFor='box2' id='slash'> - </label>
                                <input type="time" step="60" className="box2"
                                    value={this.state.end} disabled={true}
                                    onChange={(ev) => { this.setState({ time: ev.target.value }) }} />
                            </div>
                            <input type="date" value={this.state.date} id="box3" disabled={true}></input>
                        </div>
                    </div>
                    <div id='btns'>
                        <button type="button" style={{fontSize:'16px'}} className="btn btn-primary btn-lg" id='back' onClick={() => this.goSeat()}>Back</button>
                        <button type="button" style={{fontSize:'16px'}} className="btn btn-primary btn-lg" id='submit' onClick={() => this.goSeat2()}>Reserve Now</button>
                    </div>
                    </div>
                    </Row>
                </Form>
                    {this.renderSeat()}
                    
                </Card>
           
            </CardDeck>
        )
    }
}

export default Booking;
