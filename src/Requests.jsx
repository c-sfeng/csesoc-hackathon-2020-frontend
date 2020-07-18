import React from 'react';
import Header from './Header';
import { Button, Carousel } from 'react-bootstrap';
import { content } from './assets/content';
import { socket } from './App.jsx';

export class Requests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {requests: []};
    }

    renderRequests() {
        if (this.state.requests == null || !this.state.requests.length) {
            return (
                <div>No Requests :(</div>
            );
        }
        const requestsCarousel = this.state.requests.map((request) => 
            (<Carousel.Item>
                <div className="container body-container letter-container">
                    <p className="letter letter-subject">{request.subject}</p>
                    <p className="letter letter-body"> {request.body}</p>
                    <div className="letter-signature">
                        <p className="letter-signature">{request.initials}</p>
                    </div>
                </div>
                <div className="container body-container button-container">
                    <Button variant="primary" className="letter-button">
                        {content.requests.reply}
                    </Button>
                    <Button variant="primary" className="report-button">
                        {content.requests.report}
                    </Button>
                </div>
            </Carousel.Item>)
        );
        return (
            <div className="container letter-carousel">
                <Carousel fade={true} interval={null}>
                    {requestsCarousel}
                </Carousel>
            </div>
        );
    }

    componentDidMount() {
        socket.emit("getRequests");
        socket.on("receiveRequests", (requests) => {
            this.setState({requests: requests});
            console.log(requests);
        });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header selected={2}/>
                </div>
                <div className="container letter-container tool-tip">
                    Tips
                </div>
                {this.renderRequests()}
            </div>
        );
    }   
}

export default Requests;