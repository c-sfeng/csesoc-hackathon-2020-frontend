import React from 'react';
import Header from "./Header";
import './css/PrimaryBanner.scss';

function Home() {
    return (
        <div className="App">
            <div className="container">
                <Header selected={1}/>
            </div>
            <div className="banner-primary">
                <div className="banner-primary-text-container">
                    <h4 className="banner-primary-text banner-primary-title">
                        REACH ACROSS
                    </h4>
                    <p className="banner-primary-subtitle">
                        Connecting people in social isolation
                    </p>
                </div>
            </div>
            <div className="container body-container">
                <p>Use your words to lift others, and be lifted in return.</p>
                <p>REACH ACROSS allows people in isolation to talk to one another, about movies, books, your new hobby, or things weighing on your mind.</p>
                <p>In an unprecedented age, where we are so inter-connected but yet alone, it's important to reach across to those of us who need it most.</p>
            </div>
            <div className="container body-container credits">
                <p>REACH ACROSS is a project made by Ryan King, Joyce Feng, Arsham Emad, Sunny Chen and Clarence Feng for UNSW CSESoc's 2020 Annual Hackathon</p>
            </div>
        </div>
    );
}

export default Home;