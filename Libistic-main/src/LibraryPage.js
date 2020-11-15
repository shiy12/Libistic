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
                <Card.Title>H.G. Thode Library of Science and Engineering</Card.Title>
                <Card.Text>
                    1280 Main St W, Hamilton, ON 
                    L8S 4P5
                </Card.Text>
                <Image src={Rating} width={'125px'} height={'25px'}/>
                <li>
                    <div>
                    <h6>Usman Asad</h6>
                    <Card.Text>
                        Awesome place to study. There are 3 floors where you can study, 
                        if you need a lot of silence to study, there is a quiet area in the 
                        basement and small wooden cubby looking like seats around the edges 
                        main floor that are pretty quiet.
                    </Card.Text>  
                    </div>
                </li>
                <li>
                    <div>
                    <h6>Fuad Ali</h6>
                    <Card.Text>
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
        <div style={{padding:'20px'}}></div>
        <Card.Title>Overview</Card.Title>
            <div style={{padding:'20px'}}></div>
            <ListGroup>
                <ListGroup.Item>
                    <p>Computer</p>
                    <ProgressBar variant="success" now={40} label={'24/60'}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Seats</p>
                    <ProgressBar variant="success" now={75} label={'66/88'}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Study Room</p>
                    <ProgressBar variant="danger" now={100} label={'20/20'}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Projector</p>
                    <ProgressBar variant="success" now={50} label={'2/4'}/>
                </ListGroup.Item>
            </ListGroup>
        </div>

    )

}

class FacilityList extends Component{
    constructor(props) {
        super(props);
        this.state = {isLoading: false, redirect: false};
    }

    goSeats=()=>{
        if (this.state.redirect) {
        return (<Redirect to={`/Seats`} />)}
    }
    backMain=()=>{
        if (this.state.redirect) {
        return (<Redirect to={`/`} />)}
    }

    clickResult=()=> {
        console.log("clicked");
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.setState({ isLoading: false, redirect: true })
        }, 50)
    }



    render(){
        return(
            <div>
            <Card style={{ width: '35rem', height:'50rem', textAlign:"center"}}>
                <FacilityTable />
                <div style={{padding:'30px'}}></div>
                <ListGroup>
                    <ListGroup.Item variant="info" action onClick={this.clickResult}>
                        Reserve
                    </ListGroup.Item>
                    <div style={{padding:'10px'}}></div>
                    <ListGroup.Item variant="success" action onClick={this.clickResult}>
                        Back
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            {this.backMain()}
            {this.goSeats()}
            </div>
        )
    }
}

export default LibraryPage;