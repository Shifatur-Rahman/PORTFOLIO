import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faPhone} from  "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="reviewTitle">Follow Me</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a> <br />
                            <a className="socialLink" href="#"><FontAwesomeIcon  icon={faTwitter} /> Twitter</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="reviewTitle">Address</h1>
                            <p className="serviceDescription">Khilkhet,Dhaka-1229</p>
                            <p className="serviceDescription"><FontAwesomeIcon  icon={faEnvelope} /> shifaturnovel@gmail.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon  icon={faPhone} /> 01921601608</p>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="reviewTitle">Information</h1>
                            <a className="footerLink" href="#">About Me</a> <br />
                            <a className="footerLink" href="#">My Resume</a><br />
                            <a className="footerLink" href="#">Contact</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="reviewTitle">Legal</h1>
                            <a className="footerLink" href="#">Refund policy</a> <br />
                            <a className="footerLink" href="#">Terms & Condition</a><br />
                            <a className="footerLink" href="#">Privacy Policy</a>

                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyRightSection">
                    <a className="copyRightLink" href="#">Developed By Shifatur :) 2019-2020</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;