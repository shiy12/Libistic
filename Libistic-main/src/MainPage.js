import React, { Component } from 'react';
import {Button, ListGroup, Card, CardDeck,Row, Col} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import './MainPage.css'
import MapView from './TestMap';
import FreeSoloCreateOption from './AutoComplete'


function MainPage(){
    return(
        <SearchBar />
    )
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', showSearch: false, isLoading: false, redirect: false};
    }

    handleSubmit=()=> {
        this.setState({showSearch: true})
    }

    clickResult=()=> {
        console.log("clicked");
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.setState({ isLoading: false, redirect: true })
        }, 500)
    }

    renderLib = () => {
        if (this.state.redirect) {
            return (<Redirect to={`/LibraryPage`} />)
        }
    }

    render() {
        if (this.state.showSearch){
            return (
                <div>
                    <Row style={{margin:'5px'}}>
                    <Col></Col>
                    <Col>
                    <div className="SearchComponent" >
                    <FreeSoloCreateOption />
                    <Button onClick={this.handleSubmit} style={{fontSize:'16px'}}>search</Button>
                    </div></Col>
                    <Col></Col>
                    </Row>

                    <Row style={{margin:'5px'}}>
                    <CardDeck onClick={this.clickResult}>
                        <SearchResult />
                        <Card style={{ width: '72vw'}}>
                            <MapView />
                        </Card>
                    </CardDeck>
                    </Row>
                    {this.renderLib()}
                </div>
            );
        }else{
            return (
                <div>
                    <Row style={{margin:'5px'}}>
                    <Col></Col>
                    <Col>
                    <div className="SearchComponent" >
                    <FreeSoloCreateOption />
                    <Button onClick={this.handleSubmit} style={{fontSize:'16px'}}>search</Button>
                    </div></Col>
                    <Col></Col></Row>
                
                    <Row style={{margin:'5px'}}>
                    <Card style={{ width: '100vw'}}>
                        <MapView />
                    </Card>
                    </Row>
                </div>
            );
        }  
        
    }
}




function SearchResult() {
    return (
        <div>
        <Card style={{ width: '25vw', textAlign:"left"}}>
            <ListGroup style={{textAlign:"left"}}>
                <ListGroup.Item>
                    <h6 style={{fontSize:'18px'}}>H.G. Thode Library of Science and Engineering</h6>
                    <p style={{fontSize:'16px'}}>1280 Main St W, Hamilton, ON L8S 4P5 <br />Open until 5:45p.m.<br />(905)-525-9140</p>
                </ListGroup.Item>
                <ListGroup.Item disabled style={{backgroundColor:"#F1F1F1"}}>
                    <h6 style={{fontSize:'18px'}}>Mills Memorial Library</h6>
                    <p style={{fontSize:'16px'}}>1280 Main St W, Hamilton, ON L8S 4P5 <br />Temporary Closed<br />(905)-525-9140</p>
                </ListGroup.Item>
                <ListGroup.Item disabled >
                    <h6 style={{fontSize:'18px'}}>Health Sciences Library</h6>
                    <p style={{fontSize:'16px'}}>McMaster University, Health Sciences Centre, 1280 Main Street West, Hamilton, ON <br />Open until 5:45p.m.<br />(905) 525-9140 ext.22327</p>
                </ListGroup.Item>
                <ListGroup.Item disabled style={{backgroundColor:"#F1F1F1"}}>
                    <h6 style={{fontSize:'18px'}}>Hamilton Public Library - Westdale Branch</h6>
                    <p style={{fontSize:'16px'}}>955 King St W, Hamilton, ON L8S 1K9 <br />Closed<br />(905) 546-3200</p>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </div>
    )  
}


export default MainPage;