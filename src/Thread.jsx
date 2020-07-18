import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { socket } from './App.jsx';
import { Link } from 'react-router-dom';
import { content } from './assets/content';
import { Button } from 'react-bootstrap';
import Header from './Header';

class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {thread: [], origin: ""};
    }
    // this.state.thread[last].userid ===  ----

    replyLetter() {
        const letterSubject = this.sf.value;
        const letterBody = this.lb.value;
        const initials = this.iFd.value;
        this.sf.value = "";
        this.lb.value = "";
        this.iFd.value = "";
        socket.emit("replyLetter", this.props.location.state.requestId, this.props.location.state.userId, initials, letterSubject, letterBody);
    }

    renderThread() {
        const threadListGroup = this.state.thread.map((letter) =>
            <ListGroup.Item className="col letter-cards">
                <div className="letter-container">
                    <div className="row-flex">
                        <p className="letter letter-subject">{letter.subject}</p>
                        <p className="letter letter-date">{letter.dateSent}</p>
                    </div>
                    <p className="letter letter-body">{letter.body}</p>
                    <div className="letter-signature">
                        <p className="letter-signature">- {letter.initials}</p>
                    </div>
                </div>
            </ListGroup.Item>
        );
        return (
            <ListGroup className="row-flex">
                {threadListGroup}
                <div className="col letter-cards list-group-item">
                    <div className="letter-container">
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
                    <div className="container body-container button-container thread-send">
                        <Button variant="primary" className="letter-button" onClick={() => this.replyLetter()}>SEND</Button>
                    </div>
                </div>
            </ListGroup>
        );
    }

    componentDidMount() {
        const threadInfo = this.props.location.state;
        this.setState({origin: threadInfo.origin});
        socket.emit("getThread", threadInfo.isResponse, threadInfo.letterId, threadInfo.userId);
        socket.on("receiveThread", (thread) => {
            this.setState({thread: thread});
            console.log(thread);
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.origin === "responses" ? (
                    <div className="container">
                        <Header selected={4}/>
                    </div>
                ) : 
                <div className="container">
                    <Header selected={3}/>
                </div>}
                <div className="container back-container">
                    <div className="third body-container">
                        <Link to={this.state.origin === "responses" ? (content.urls.responsesURL) : (content.urls.lettersURL)}>
                            <h4 className="back-button">{content.letters.back}</h4>
                        </Link>
                    </div>
                    <div className="third body-container"></div>
                </div>
                <div className="horizontal-thread-container" onLoad="window.scroll(10000000, 0)">
                    <div className="container-fluid">
                        <div className="row flex-nowrap">
                            {this.renderThread()}
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Thread;