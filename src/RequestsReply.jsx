import React from 'react';
import Header from './Header';
import { Button } from 'react-bootstrap';
import { content } from './assets/content';
import { Link } from 'react-router-dom';
import { socket } from './App.jsx';

export default class RequestsReply extends React.Component {

    replyLetter() {
        const letterSubject = this.sf.value;
        const letterBody = this.lb.value;
        const initials = this.iFd.value;
        this.sf.value = "";
        this.lb.value = "";
        this.iFd.value = "";
        socket.emit("replyLetter", this.props.location.state.id, this.props.userId, initials, letterSubject, letterBody);
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header selected={2}/>
                </div>
                <div className="container back-container">
                    <div className="third body-container">
                        <Link to={content.urls.requestsURL}>
                            <h4 className="back-button">{content.letters.back}</h4>
                        </Link>
                    </div>
                    <div className="body-container letter-container tool-tip">
                        Tips
                    </div>
                    <div className="third body-container"></div>
                </div>
                <div className="row row-evenly">
                    <div className="body-container letter-container letter-container-reply">
                        <p className="letter letter-subject">{this.props.location.state.subject}</p>
                        <p className="letter letter-body"> {this.props.location.state.body}</p>
                        <div className="letter-signature">
                            <textarea
                                value={`- ${this.props.location.state.initials}`}
                                className="letter letter-subject"
                                maxLength="2"
                            />
                        </div>
                    </div>
                    <div classname="container">
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
                        <Button variant="primary" className="letter-button" onClick={() => this.replyLetter()}>SEND</Button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }   
}
