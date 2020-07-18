import React from 'react';
import Header from './Header';
import { Button } from 'react-bootstrap';
import { socket } from './App.jsx';

export default class LettersCreate extends React.Component {
    sendLetter() {
        const letterSubject = this.sf.value;
        const letterBody = this.lb.value;
        const initials = this.iFd.value;
        this.sf.value = "";
        this.lb.value = "";
        this.iFd.value = "";
        socket.emit("sendLetter", this.props.userId, initials, letterSubject, letterBody);
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header selected={3}/>
                </div>
                <div className="container body-container letter-container tool-tip">
                    Tips
                </div>
                <div className="container body-container letter-container">
                    <textarea
                        ref={sf => {
                            this.sf = sf;    
                        }} 
                        placeholder="Subject"
                        className="letter letter-subject"
                    />
                    <textarea
                        ref={lb => {
                            this.lb = lb;
                        }}
                        placeholder="Your letter body!"
                        className="letter letter-body"
                    />
                    <div className="letter-signature">
                        <textarea
                            ref={(iFd) => {
                                this.iFd = iFd;
                            }}
                            placeholder="Your Initials!"
                            className="letter letter-subject"
                            maxLength="2"
                        />
                    </div>
                </div>
                <div className="container body-container button-container">
                    <Button variant="primary" className="letter-button" onClick={() => this.sendLetter()}>SEND</Button>
                </div>
            </div>
        );
    }   
}
