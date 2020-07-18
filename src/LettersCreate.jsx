import React from 'react';
import Header from './Header';
import { Button } from 'react-bootstrap';

export default class LettersCreate extends React.Component {
    render() {

        const { requests } = this.props;
        console.log(requests);
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
                        placeholder="Subject"
                        className="letter letter-subject"
                    />
                    <textarea 
                        placeholder="Your letter body!"
                        className="letter letter-body"
                    />
                    <div className="letter-signature">
                        <p className="letter-signature">- INITIALS</p>
                    </div>
                </div>
                <div className="container body-container button-container">
                    <Button variant="primary" className="letter-button">SEND</Button>
                </div>
            </div>
        );
    }   
}
