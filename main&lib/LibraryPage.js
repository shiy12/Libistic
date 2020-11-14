import React, { Component } from 'react';
import './LibraryPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {ProgressBar, Card, CardDeck, Image, ListGroup, Button} from 'react-bootstrap';
import Rating from '../assets/rating.svg'
import MapView from './TestMap';

function LibraryPage(){
    return(
        <CardDeck eventKey="#LibraryPage">
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
            <Card.Img style={{width: '400px', height: '300px'}} variant="top" src="https://facilities.mcmaster.ca/app/uploads/2018/10/20785704_1237882372982563_8816577642889440390_o.jpg" />
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
        <Card.Title>Overview</Card.Title>
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
                    <ProgressBar variant="success" now={60} label={'12/20'}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Projector</p>
                    <ProgressBar variant="danger" now={100} label={'4/4'}/>
                </ListGroup.Item>
            </ListGroup>
        </div>

    )

}

class FacilityList extends Component{
    reserveClick=(e)=>{
        console.log("reserve click");
    }
    backClick=(e)=>{
        console.log("Back click");
    }


    render(){
        return(
            <Card style={{ width: '30rem' }}>
                <FacilityTable />
                <ListGroup horizontal={'sm'}>
                    <ListGroup.Item>
                        <Button onClick={this.reserveClick}>Reserve</Button>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Button onClick={this.backClick}>Back</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            
        )
    }
}

export default LibraryPage;