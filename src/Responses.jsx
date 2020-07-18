import React from 'react';
import Header from './Header';
import ListGroup from 'react-bootstrap/ListGroup';
import { content } from './assets/content';
import { Link } from 'react-router-dom';
import { socket } from './App.jsx';
import { Row, Col } from 'react-bootstrap';

class Responses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {responses: []};
        console.log(this.props.userId);
    }

    renderResponses() {
        if (this.state.responses == null || !this.state.responses.length) {
            return (
                <ListGroup>
                    <ListGroup.Item className="thread-link">
                        No Responses Yet
                    </ListGroup.Item>
                </ListGroup>
            );
        }
        const responsesListGroup = this.state.responses.map((response) => 
            <Link to={{pathname: content.urls.threadURL, state: {isResponse : true, letterId: response.letterId, userId: response.userId, origin: "responses"}}}>
                <ListGroup.Item className="thread-link">
                    <Row className="row-thread">
                        <Col>
                            <em>{response.dateSent}</em>
                        </Col>
                        <Col>
                            <em>Subject:</em> {response.subject}
                        </Col>
                        <Col>
                            <em>From:</em> {response.initials}
                        </Col>
                        <Col className="right-align">
                            <span className="carousel-control-next-icon"></span>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </Link>
        );
        return (
            <ListGroup>{responsesListGroup}</ListGroup>
        );
    }

    componentDidMount() {
        socket.emit("getUserResponses", this.props.userId);
        socket.on("receiveUserResponses", (responses) => {
            this.setState({responses: responses});
            console.log(responses);
        });
    }

    render(){
        return(
            <div className="App">
                <div className="container">
                    <Header selected={4}/>
                </div>
            
                <div className="container body-container thread-container responses-container">
                    {this.renderResponses()}
                </div>
            </div>
        );
    } 
}

export default Responses;