import React from 'react';
import { Redirect } from 'react-router';
import lib from './img/Thode.jpg';
import 'react-dropdown/style.css';
import './HistoryPage.css';

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
                <div id='OutterBox'>
                <h2 id='historyTitle'>Booking History</h2>
                <img id='lib' src={lib} alt='Thode Library' />
                <div id='box'>
                    <div className='subBox'>
                        <span className='spans'>Name: </span>
                       <div id='name'>{this.state.name},</div>
                        <div id='email'>{this.state.email}</div> 
                    </div>
                    <div className='subBox'>
                        <span className='spans'>Location: </span>
                        <div id='loc'>{this.state.Location},</div>
                        <div id='id'>{this.state.ID}</div>
                    </div>
                    <div className='subBox'>
                        <span className='spans'>Time: </span>
                         <div id='date'>{this.state.date},</div>
                        <div id='time'>{this.state.start}<span> - </span>{this.state.end}</div>
                        <button type="button" className="btn btn-primary btn-lg" id='remove' onClick={() => this.goMain()}>Delete</button>
                    </div>
                   
                    
                </div>
                
                
                </div>
                {this.renderMain()}
                
            </div>
        )
    }
}

export default HistoryPage;