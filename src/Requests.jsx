import React from 'react';
import Header from './Header';

export class Requests extends React.Component {
    render() {

        const { requests } = this.props;
        console.log(requests);
        return (
            <div className="App">
                <div className="container">
                    <Header selected={2}/>
                </div>
                <div className="container letter-container tool-tip">
                    Tips
                </div>
                <textarea 
                    placeholder="Remember, be nice!"
                    className="container body-container letter-container letter"
                >
                    
                </textarea>
            </div>
        );
    }   
}

export default Requests;