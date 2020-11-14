import React, { Component } from 'react';
import {Button, ListGroup, Card, CardDeck} from 'react-bootstrap';
import './MainPage.css'
import MapView from './TestMap';
import FreeSoloCreateOption from './AutoComplete'

var storage = window.localStorage;
storage["showComp"] = false;

function MainPage(){
    return(
        <div eventKey="#MainPage">
            <SearchBar />
        </div>
        )
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', showSearch: false};
    }

    handleSubmit=()=> {
        storage["showComp"] = true;
        this.setState({showSearch: true})
    }

    render() {
        var searchNames = ['Thode Library', 'Thode', 'Brisbane', 'Adelaide', 'Perth', 'Hobart'];
        if (this.state.showSearch){
            return (
                <div>
                    <div className="SearchComponent" >
                    <FreeSoloCreateOption />
                    <Button onClick={this.handleSubmit}>search</Button>
                    </div>
                        <CardDeck>
                        <SearchResult showComp={this.state.showSearch} />
                        <Card style={{ width: '75rem'}}>
                        <MapView />
                        </Card>
                        </CardDeck>
                </div>
            );

        }else{
            return (
                <div>
                    <div className="SearchComponent" >
                    <FreeSoloCreateOption />
                    <Button onClick={this.handleSubmit}>search</Button>
                    </div>
                    <Card style={{ width: '100rem'}}>
                        <MapView />
                    </Card>
                </div>
            );
        }
        
    }
}




function SearchResult() {
    return (
        <div>
        <Card style={{ width: '25rem', textAlign:"left"}}>
            <ListGroup style={{textAlign:"left"}}>
                <ListGroup.Item>
                    <h6>H.G. Thode Library of Science and Engineering</h6>
                    <p>1280 Main St W, Hamilton, ON L8S 4P5 <br />Open until 5:45p.m.<br />(905)-525-9140</p>
                </ListGroup.Item>
                <ListGroup.Item disabled style={{backgroundColor:"#F1F1F1"}}>
                    <h6>Mills Memorial Library</h6>
                    <p>1280 Main St W, Hamilton, ON L8S 4P5 <br />Temporary Closed<br />(905)-525-9140</p>
                </ListGroup.Item>
                <ListGroup.Item disabled >
                    <h6>Health Sciences Library</h6>
                    <p>McMaster University, Health Sciences Centre, 1280 Main Street West, Hamilton, ON <br />Open until 5:45p.m.<br />(905) 525-9140 ext.22327</p>
                </ListGroup.Item>
                <ListGroup.Item disabled style={{backgroundColor:"#F1F1F1"}}>
                    <h6>Hamilton Public Library - Westdale Branch</h6>
                    <p>955 King St W, Hamilton, ON L8S 1K9 <br />Closed<br />(905) 546-3200</p>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </div>
    )  
}


export default MainPage;