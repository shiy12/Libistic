import React, { Component } from 'react';
import './LibraryPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";

import {ProgressBar, Card, CardDeck, Image, ListGroup, Button} from 'react-bootstrap';
import Rating from './img/rating.svg'
import MapView from './TestMap';

function LibraryPage(){
    return(
        <CardDeck>
            <LibSpec />
            <FacilityList />
            <CardMap />
        </CardDeck>
    )
}

function CardMap(){
    return(
        <Card style={{ width: '30rem'}}>
            <MapView />
        </Card>
    )
}


function LibSpec(){
    return(
        <Card style={{ width: '30rem', textAlign:"left"}}>
            
            <div className="cardImg">
            <Card.Img style={{width: '100%', height: '100%'}} variant="top" src="https://facilities.mcmaster.ca/app/uploads/2018/10/20785704_1237882372982563_8816577642889440390_o.jpg" />
            </div>
            <Card.Body>
                <Card.Title style={{fontSize:'18px'}}>H.G. Thode Library of Science and Engineering</Card.Title>
                <Card.Text style={{fontSize:'16px'}}>
                    1280 Main St W, Hamilton, ON 
                    L8S 4P5
                </Card.Text>
                <Image src={Rating} width={'125px'} height={'25px'}/>
                <li>
                    <div>
                    <h6 style={{fontSize:'18px'}}>Usman Asad</h6>
                    <Card.Text style={{fontSize:'16px'}}>
                        Awesome place to study. There are 3 floors where you can study, 
                        if you need a lot of silence to study, there is a quiet area in the 
                        basement and small wooden cubby looking like seats around the edges 
                        main floor that are pretty quiet.
                    </Card.Text>  
                    </div>
                </li>
                <li>
                    <div>
                    <h6 style={{fontSize:'18px'}}>Fuad Ali</h6>
                    <Card.Text style={{fontSize:'16px'}}>
                        Best library on campus. A rowdier second floor for group study sessions, 
                        a quieter first floor, and a silent study zone basement. There are also 
                        study rooms you can reserve, and it’s 24 hours during exams. All in all, 
                        great place to get stuff done and socialize as well.
                    </Card.Text>  
                    </div>
                </li>
            </Card.Body>
            
        </Card>
        
    )
}


function FacilityTable(){
    return(
        <div>
        <Card.Title style={{fontSize:'18px', padding:'10px'}}>Overview</Card.Title>
            <ListGroup>
                <ListGroup.Item>
                    <p style={{fontSize:'16px'}}>Computer</p>
                    <ProgressBar style={{fontSize:'14px'}} variant="success" now={40} label={'24/60'}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p style={{fontSize:'16px'}}>Seats</p>
                    <ProgressBar style={{fontSize:'14px'}} variant="success" now={75} label={'66/88'}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p style={{fontSize:'16px'}}>Study Room</p>
                    <ProgressBar style={{fontSize:'14px'}} variant="danger" now={100} label={'20/20'}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p style={{fontSize:'16px'}}>Projector</p>
                    <ProgressBar style={{fontSize:'14px'}} variant="success" now={50} label={'2/4'}/>
                </ListGroup.Item>
            </ListGroup>
        </div>

    )

}

class FacilityList extends Component{
    constructor(props) {
        super(props);
        this.state = {isLoading1: false, isLoading2: false, redirect1: false, redirect2: false};
    }

    goSeats=()=>{
        if (this.state.redirect1) {
        return (<Redirect to={`/Seats`} />)}
    }

    backMain=()=>{
        if (this.state.redirect2) {
        return (<Redirect to={``} />)}
    }

    clickResult1=()=> {
        console.log("clicked_reserve");
        this.setState({ isLoading1: true })
        setTimeout(() => {
            this.setState({ isLoading1: false, redirect1: true })
        }, 200)
    }

    clickResult2=()=> {
        console.log("clicked_back");
        this.setState({ isLoading2: true })
        setTimeout(() => {
            this.setState({ isLoading2: false, redirect2: true })
        }, 200)
    }



    render(){
        return(
            <div>
            <Card style={{ width: '35rem', height:'50rem', textAlign:"center"}}>
                <FacilityTable />
                <div style={{padding:'30px'}}></div>
                <ListGroup>
                    <ListGroup.Item variant="info" action onClick={this.clickResult1}>
                        Reserve
                    </ListGroup.Item>
                    
                    <div style={{padding:'10px'}}></div>
                    <ListGroup.Item variant="success" action onClick={this.clickResult2}>
                        Back
                    </ListGroup.Item>
                    
                    
                </ListGroup>
            </Card>
            {this.goSeats()}
            {this.backMain()}
            </div>
        )
    }
}

export default LibraryPage;