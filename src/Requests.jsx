import React from 'react';
import Header from './Header';
import { Button, Carousel } from 'react-bootstrap';
import { content } from './assets/content';

export class Requests extends React.Component {
    render() {

        const { requests } = this.props;
        console.log(requests);
        
        let currentIndex = 0;

        // CURRENT INDEX HERE!
        const handleSelect = (selectedIndex, e) => {
            currentIndex = selectedIndex;
            console.log(currentIndex);
        }
        
        return (
            <div className="App">
                <div className="container">
                    <Header selected={2}/>
                </div>
                <div className="container letter-container tool-tip">
                    Tips
                </div>
                <div className="container letter-carousel">
                    <Carousel fade={true} interval={null} onSelect={handleSelect}>
                        <Carousel.Item>
                            <div className="container body-container letter-container">
                                <p className="letter letter-subject">Subject 1</p>
                                <p className="letter letter-body"> testtestesttestetsetstetstestet</p>
                                <div className="letter-signature">
                                    <p className="letter-signature">- INITIALS</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="container body-container letter-container">
                                <p className="letter letter-subject">Subject 2</p>
                                <p className="letter letter-body"> blahhhhhhhhhhhhhhhhh</p>
                                <div className="letter-signature">
                                    <p className="letter-signature">- INITIALS</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <div className="container body-container button-container">
                        <Button variant="primary" className="letter-button">
                            {content.requests.reply}
                        </Button>
                        <Button variant="primary" className="report-button">
                            {content.requests.report}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }   
}

export default Requests;