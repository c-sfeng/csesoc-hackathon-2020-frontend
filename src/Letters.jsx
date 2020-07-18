import React from 'react';
import Header from './Header';
import { content } from './assets/content';
import { Link } from 'react-router-dom';
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
            <div className="App">
                <div className="container">
                    <Header selected={3}/>
                </div>
                letters
                <Link to={content.urls.lettersCreateURL}> 
                    <h4 className="create-button">{content.letters.create}</h4>
                </Link>
                <div>
                    {this.renderLetters()}
                </div>
            </div>
            
        );
    }
    
}

export default Letters;