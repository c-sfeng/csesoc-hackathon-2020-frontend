import React from 'react';
import Header from './Header';
import ListGroup from 'react-bootstrap/ListGroup';
import { content } from './assets/content';
import { Link } from 'react-router-dom';
import { socket } from './App.jsx';

class Responses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {responses: []};
        alert(this.props.userId);
    }

    renderResponses() {
        if (this.state.responses == null || !this.state.responses.length) {
            return (
                <ListGroup><ListGroup.Item>No Responses :(</ListGroup.Item></ListGroup>
            );
        }
        const responsesListGroup = this.state.responses.map((response) => 
            <Link to={{pathname: content.urls.threadURL, state: {isResponse : true, letterId: response.letterId, userId: response.userId}}}>
                <ListGroup.Item>
                    {response.dateSent + " " + response.subject + " " + response.body}
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
            
                <div>
                    {this.renderResponses()}
                </div>
            </div>
        );
    } 
}

export default Responses;