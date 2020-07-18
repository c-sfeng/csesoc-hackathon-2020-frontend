import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { socket } from './App.jsx';

class Letters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {letters: []};
    }

    renderLetters() {
        if (this.state.letters == null || !this.state.letters.length) {
            return (
                <ListGroup><ListGroup.Item>No Letters :(</ListGroup.Item></ListGroup>
            );
        }
        const lettersListGroup = this.state.letters.map((letter) => 
            <ListGroup.Item>
                {letter.dateSent + " " + letter.subject + " " + letter.body}
            </ListGroup.Item>
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
            <div>
                {this.renderLetters()}
            </div>
        );
    }
    
}

export default Letters;