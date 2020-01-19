import React, {Component, Fragment} from 'react';
import {Row, Col, Container, Modal, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import { Player,BigPlayButton } from 'video-react';

class Video extends Component {
    state={
        show: false
    }

    modalShowOn=()=>{this.setState({show:true})}
    modalShowOff=()=>{this.setState({show:false})}



    render() {
        return (
            <Fragment>

                <Container className="text-center">
                    <Row>
                        <Col>
                            <div className="videoCard">
                                <p className="videoMainTitle">How I Do</p>
                                <p className="coursePara">
                                    First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.
                                </p>
                                <p><FontAwesomeIcon onClick={this.modalShowOn} className="playBtn" icon={faPlayCircle} /> </p>
                            </div>
                        </Col>

                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalShowOff}>

                    <Modal.Body>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalShowOff}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;