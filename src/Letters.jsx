import React from 'react';
import Header from './Header';
import { content } from './assets/content';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { socket } from './App.jsx';
import { Row, Col } from 'react-bootstrap';

class Letters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {letters: []};
    }

    renderLetters() {
        if (this.state.letters == null || !this.state.letters.length) {
            return (
                <ListGroup>
                    <ListGroup.Item className="thread-link">
                        No Letters Yet
                    </ListGroup.Item>
                </ListGroup>
            );
        }
        const lettersListGroup = this.state.letters.map((letter) => 
            <Link to={{pathname: content.urls.threadURL, state: {isResponse : false, letterId: letter.letterId, userId: letter.userId}}}>
                <ListGroup.Item className="thread-link">
                    <Row className="row-thread">
                        <Col>
                            <em>{letter.dateSent}</em>
                        </Col>
                        <Col>
                            <em>Subject:</em> {letter.subject}
                        </Col>
                        <Col>
                            <em>From:</em> {letter.initials}
                        </Col>
                        <Col className="right-align">
                            <span className="carousel-control-next-icon"></span>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </Link>
        );
        return (
            <ListGroup>{lettersListGroup}</ListGroup>
        );
    }

    componentDidMount() {
        const userId = "1"; // tmp
        socket.emit("getUserLetters", userId);
        socket.on("receiveUserLetters", (letters) => {
            this.setState({letters: letters});
            console.log(letters);
        });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header selected={3}/>
                </div>
                <div className="container body-container">
                    <Link to={content.urls.lettersCreateURL}> 
                        <h4 className="create-button">{content.letters.create}</h4>
                    </Link>                   
                </div>
                <div className="container body-container thread-container">
                    {this.renderLetters()}
                </div>
            </div>
            
        );
    }
    
}

export default Letters;