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
            <div className='sec'>
                <h3>Thode Library</h3>
                <div className='left'>
                    <div className='Info'>
                        
                        <img className='imgs' src={lib} alt='Thode Library img' />
                        <img id='LibIcon' src={libIcon} alt='Avaliable Service' />
                    </div>
                </div>
                <div className='right'>

                    <div className='PC'>
                        <img className='ic' src={imgPC} alt="PC ICON" />
                        <div className='info'>
                            <div>
                                <label className = 'Blabel' htmlFor='id'>ID:</label>
                                <span id='id'>{this.state.ID}</span>
                            </div>
                            <div>
                                <label className = 'Blabel' htmlFor='location'>Location:</label>
                                <span id='location'>{this.state.Location}</span>
                            </div>
                            <div>
                                <label className = 'Blabel' htmlFor='Spec'>Specification:</label>
                                <span id='Spec'>Win 10 with MS Office, Matlab, Photoshop</span>
                            </div>
                        </div>
                    </div>
                    <div className='subSec'>
                        <div className='data'>
                            <div className='Subbox'>
                                <img className='icon' src={userIcon} alt='User Icon' />
                                <label className = 'Blabel' htmlFor='name'>Name:</label>
                                <input type="text" id="nameBox"
                                    onChange={this.handleChange} />
                            </div>
                            <div className='Subbox'>
                                <img className='icon' src={emailIcon} alt='Emial Icon' />
                                <label className = 'Blabel' htmlFor='email'>Email:</label>
                                <input type="email" id="emailBox"
                                    onChange={this.handleChange2} />
                            </div>

                        </div>
                        <div id='TimeDate'>
                            <div className='Time'>
                                <div className='inputBox'>
                                    <img className='icon' src={clockIcon} alt='Clock Icon' />
                                    <label className = 'Blabel' htmlFor='box1'>Time slot:</label>
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
                            <button type="button" className="btn btn-primary btn-lg" id='back' onClick={() => this.goSeat()}>Back</button>
                            <button type="button" className="btn btn-primary btn-lg" id='submit' onClick={() => this.goSeat2()}>Reserve Now</button>
                        </div>
                    
                        
                    </div>
                    {this.renderSeat()}
                </div>
                
            </div>
        )
    }
}

export default Booking;