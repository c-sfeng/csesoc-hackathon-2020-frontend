import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { socket } from './App.jsx';

class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {thread: []};
    }

    renderThread() {
        const threadListGroup = this.state.thread.map((letter) =>
            <ListGroup.Item>
                {letter.dateSent}<br/>{letter.subject}<br/>{letter.body}<br/>{letter.initials}
            </ListGroup.Item>
        );
        return (
            <ListGroup>{threadListGroup}</ListGroup>
        );
    }

    componentDidMount() {
        const threadInfo = this.props.location.state;
        socket.emit("getThread", threadInfo.isResponse, threadInfo.letterId, threadInfo.userId);
        socket.on("receiveThread", (thread) => {
            this.setState({thread: thread});
            console.log(thread);
        });
    }

    render() {
        return (
            <div>
                {this.renderThread()}
            </div>
        );
    }
    
}

export default Thread;