import React from 'react';
import Header from './Header';
import { content } from './assets/content';
import { Link } from 'react-router-dom';

function Letters() {
    return (
        <div className="App">
            <div className="container">
                <Header selected={3}/>
            </div>
            letters
            <Link to={content.urls.lettersCreateURL}> 
                <h4 className="create-button">{content.letters.create}</h4>
            </Link>
        </div>
    );
}

export default Letters;