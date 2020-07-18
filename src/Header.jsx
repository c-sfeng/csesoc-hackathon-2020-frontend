import React from 'react';
import { NavTab } from './NavTab.jsx';
import './css/Header.scss';
import { content } from './assets/content';

export class Header extends React.Component {
    render() {
        const { selected } = this.props;
        if (selected === 1) {
            return(
                <div className="navigation-norm">
                    <NavTab title={content.header.home} url={content.urls.homeURL} selected={true}/>
                    <NavTab title={content.header.requests} url={content.urls.requestsURL} selected={false}/>
                    <NavTab title={content.header.letters} url={content.urls.lettersURL} selected={false}/>
                    <NavTab title={content.header.responses} url={content.urls.responsesURL} selected={false}/>
                    <NavTab title={content.header.support} url={content.urls.supportURL} selected={false}/>
                </div>
            );
        } else if (selected === 2) {
            return(
                <div className="navigation-norm">
                    <NavTab title={content.header.home} url={content.urls.homeURL} selected={false}/>
                    <NavTab title={content.header.requests} url={content.urls.requestsURL} selected={true}/>
                    <NavTab title={content.header.letters} url={content.urls.lettersURL} selected={false}/>
                    <NavTab title={content.header.responses} url={content.urls.responsesURL} selected={false}/>
                    <NavTab title={content.header.support} url={content.urls.supportURL} selected={false}/>
                </div>
            );
        } else if (selected === 3) {
            return(
                <div className="navigation-norm">
                    <NavTab title={content.header.home} url={content.urls.homeURL} selected={false}/>
                    <NavTab title={content.header.requests} url={content.urls.requestsURL} selected={false}/>
                    <NavTab title={content.header.letters} url={content.urls.lettersURL} selected={true}/>
                    <NavTab title={content.header.responses} url={content.urls.responsesURL} selected={false}/>
                    <NavTab title={content.header.support} url={content.urls.supportURL} selected={false}/>
                </div>
            );
        } else if (selected === 4) {
            return(
                <div className="navigation-norm">
                    <NavTab title={content.header.home} url={content.urls.homeURL} selected={false}/>
                    <NavTab title={content.header.requests} url={content.urls.requestsURL} selected={false}/>
                    <NavTab title={content.header.letters} url={content.urls.lettersURL} selected={false}/>
                    <NavTab title={content.header.responses} url={content.urls.responsesURL} selected={true}/>
                    <NavTab title={content.header.support} url={content.urls.supportURL} selected={false}/>
                </div>
            );
        } else if (selected === 5) {
            return(
                <div className="navigation-norm">
                    <NavTab title={content.header.home} url={content.urls.homeURL} selected={false}/>
                    <NavTab title={content.header.requests} url={content.urls.requestsURL} selected={false}/>
                    <NavTab title={content.header.letters} url={content.urls.lettersURL} selected={false}/>
                    <NavTab title={content.header.responses} url={content.urls.responsesURL} selected={false}/>
                    <NavTab title={content.header.support} url={content.urls.supportURL} selected={true}/>
                </div>
            );
        }
    }
}

export default Header;