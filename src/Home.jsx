import React from 'react';
import Header from "./Header";

function Home() {
    return (
        <div className="App">
            <div className="container">
                <Header selected={1}/>
            </div>
            Home
        </div>
    );
}

export default Home;