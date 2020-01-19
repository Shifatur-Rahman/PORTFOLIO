import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/foodbazz.png" />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardTitleDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/foodbazz.png" />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardTitleDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/foodbazz.png" />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardTitleDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default RecentProjects;