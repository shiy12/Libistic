import React from 'react';
import MyApp from "./myApp.jsx";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Redirect } from 'react-router'
import logo1 from './img/AvailablePC.png';
import logo2 from './img/busy_ic.png';
import logo3 from './img/projector.png';
import lib from './img/Thode.jpg';
import 'react-dropdown/style.css';
import './Seats.css';

const Seat = [
    {
        name: '00',
        img: logo1,
        status: 'Available',
        location: 'Lobby',
        machine: 'PC',
        id: 0,
        css: {
            position: 'absolute',
            left: '39%',
            top: '24%'
        }
    },
    {
        name: '01',
        img: logo1,
        status: 'Available',
        location: 'Lobby',
        machine: 'PC',
        id: 1,
        css: {
            position: 'absolute',
            left: '67.5%',
            top: '24%'
        }
    },

    {
        name: '02',
        img: logo1,
        status: 'Available',
        location: 'Lobby',
        machine: 'PC',
        id: 2,
        css: {
            position: 'absolute',
            left: '33%',
            top: '55%'
        }
    },

    {
        name: '03',
        img: logo1,
        status: 'Available',
        location: 'First Floor',
        machine: 'PC',
        id: 3,
        css: {
            position: 'absolute',
            left: '44%',
            top: '55%'
        }

    },
    {
        name: '04',
        img: logo2,
        status: 'Busy',
        location: 'Lobby',
        machine: 'PC',
        id: 4,
        css: {
            position: 'absolute',
            left: '61%',
            top: '55%'
        }
    },
    {
        name: '05',
        img: logo2,
        status: 'Busy',
        location: 'Second Floor',
        machine: 'PC',
        id: 5,
        css: {
            position: 'absolute',
            left: '72%',
            top: '55%'
        }
    },
    {
        name: 'Projector 01',
        img: logo3,
        status: 'Available',
        location: 'Lobby',
        machine: 'Projector',
        id: 6,
        css: {
            position: 'absolute',
            left: '31.5%',
            top: '80%'
        }
    },
    {
        name: '06',
        img: logo2,
        status: 'Busy',
        location: 'First Floor',
        machine: 'PC',
        id: 7,
        css: {
            position: 'absolute',
            left: '44%',
            top: '80%'
        }

    },
    {
        name: 'Projector 02',
        img: logo3,
        status: 'Available',
        location: 'Lobby',
        machine: 'Projector',
        id: 8,
        css: {
            position: 'absolute',
            left: '72%',
            top: '80%'
        }
    },
    {
        name: '07',
        img: logo2,
        status: 'Available',
        location: 'First Floor',
        machine: 'PC',
        id: 9,
        css: {
            position: 'absolute',
            left: '61%',
            top: '80%'
        }

    },
];




class Seats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seatList: [],
            Busy: true,
            Ava: true,
            Loc: 'All',
            Type: 'All',
            select: '',
            selectM: '',
            isLoading: false,
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    };

    componentWillMount() {
        this.setState({
            seatList: Seat
        })

    }

    flipBusy() { this.setState({ Busy: !this.state.Busy }); }
    flipAva() { this.setState({ Ava: !this.state.Ava }); }



    handleChange(e) {
        this.setState({ Loc: e.target.value });
    }

    handleChange2(e) {
        this.setState({ Type: e.target.value });
    }
    onClicked() {
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.setState({ isLoading: false, redirect: true })
        }, 5000)
    }
    goBooking = (name, location, status) => {
        if (status === 'Busy') {
            alert('Sorry,this machine is busy at this time...\n\nPlease try another available one!')
        }
        else {
            this.setState({ isLoading: true, select: name, selectM: location })
            setTimeout(() => {
                this.setState({ isLoading: false, redirect: true })
            }, 50)
        }

    }

    renderBooking = () => {
        if (this.state.redirect) {
            localStorage.setItem('select',
                JSON.stringify(this.state.select));
            localStorage.setItem('selectM',
                JSON.stringify(this.state.selectM));
            return (<Redirect to={`/Booking`} />)
        }
    }
    render() {
        var toshow = this.state.seatList;

        if (!this.state.Busy) {
            toshow = toshow.filter(toshow => toshow.status !== 'Busy');
        }
        if (!this.state.Ava) {
            toshow = toshow.filter(toshow => toshow.status !== 'Available');
        }


        if (this.state.Loc === 'Lobby') {
            toshow = toshow.filter(toshow => toshow.location === 'Lobby');
        }
        if (this.state.Loc === 'First Floor') {
            toshow = toshow.filter(toshow => toshow.location === 'First Floor');
        }
        if (this.state.Loc === 'Second Floor') {
            toshow = toshow.filter(toshow => toshow.location === 'Second Floor');
        }
        if (this.state.Type === 'PC') {
            toshow = toshow.filter(toshow => toshow.machine === 'PC');
        }
        if (this.state.Type === 'Projector') {
            toshow = toshow.filter(toshow => toshow.machine === 'Projector');
        }

        return (

            <div className='sec' style={{paddingTop:'30px'}}>
                <div className='left'>
                    <div className='Info'>
                        <h3 style={{margin:'10px', fontSize:'22px'}}>Thode Library</h3>
                        <img className='imgs' src={lib} alt='Thode Library img' />
                    </div>
                    <div className='filters'>
                        <div className='TimeDate'>
                            <div className='Time'>
                                <div className='inputBox' style={{margin:'10px', fontSize:'14px'}}>
                                    <label htmlFor='box1'style={{margin:'10px', fontSize:'18px'}}>Time:</label>
                                    <input type="time" step="60" className="box1" value='10:00'
                                        onChange={(ev) => { this.setState({ time: ev.target.value }) }} />
                                </div>
                                <div className='inputBox' style={{margin:'10px', fontSize:'14px'}}>
                                    <label htmlFor='box2' id='slash'> - </label>
                                    <input type="time" step="60" className="box2" value='11:00'
                                        onChange={(ev) => { this.setState({ time: ev.target.value }) }} />
                                </div>
                            </div>
                            <div className='date' style={{fontSize:'14px'}}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <MyApp />
                                </MuiPickersUtilsProvider>
                            </div>
                        </div>
                        <div className='Location'>
                            <label htmlFor='opt'style={{margin:'10px', fontSize:'18px'}}> Location: </label>
                            <select className='opt' value={this.state.seatList.location}
                                onChange={this.handleChange} style={{fontSize:'14px'}}>
                                <option name="All" style={{fontSize:'14px'}}> All</option>
                                <option name="Lobby" style={{fontSize:'14px'}}> Lobby</option>
                                <option name="First Floor" style={{fontSize:'14px'}}>First Floor</option>
                                <option name="Second Floor" style={{fontSize:'14px'}}>Second Floor</option>
                            </select>
                        </div>
                        <div className='Machine'>
                            <label htmlFor='opt'style={{margin:'10px', fontSize:'18px'}}> Machine: </label>
                            <select className='opt' style={{fontSize:'14px'}} value={this.state.seatList.machine} onChange={this.handleChange2}>
                                <option name="ll" style={{fontSize:'14px'}}> All</option>
                                <option name="PC" style={{fontSize:'14px'}}> PC</option>
                                <option name="Projector" style={{fontSize:'14px'}}>Projector</option>
                            </select>
                        </div>
                        <div className='Status'>
                            <input type="checkbox" id="Busy" checked={this.state.Ava}
                                onChange={this.flipAva.bind(this)} />
                            <label htmlFor="Busy"style={{margin:'10px', fontSize:'18px'}}>Available</label>

                            <input type="checkbox" id="Ava" checked={this.state.Busy}
                                onChange={this.flipBusy.bind(this)} />
                            <label htmlFor="Ava" style={{margin:'10px', fontSize:'18px'}}>Busy</label>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className='map'>
                    {toshow.map(
                        ({ name, location, img, status, id, css }) =>
                            <div className='Seats' style={css} key={id} onClick={() => this.goBooking(name, location, status)}  >
                                {this.renderBooking()}
                                <img className='imgPC' src={img} alt={name} />
                                <div className="names">{name} </div>
                            </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Seats;
