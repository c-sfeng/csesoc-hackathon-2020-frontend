import React from 'react';
import Header from './Header';
import { Button } from 'react-bootstrap';
import { content } from './assets/content';
import { Link } from 'react-router-dom';

export default class LettersCreate extends React.Component {
    render() {

        const { requests } = this.props;
        console.log(requests);
        return (
            <div className="App">
                <div className="container">
                    <Header selected={3}/>
                </div>
                <div className="container back-container">
                    <div className="third body-container">
                        <Link to={content.urls.lettersURL}>
                            <h4 className="back-button">{content.letters.back}</h4>
                        </Link>
                    </div>
                    <div className="body-container letter-container tool-tip">
                        Tips
                    </div>
                    <div className="third body-container"></div>
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
