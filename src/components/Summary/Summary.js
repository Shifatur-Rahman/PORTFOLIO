import React, {Component,Fragment} from 'react';
import { Col, Container, Row,Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  {faCheckCircle} from "@fortawesome/free-solid-svg-icons"
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="summary summaryMargin p-0">
                    <div className="summaryOverlay">
<Container className="text-center">
    <Row>

        <Col lg={8} md={8} sm={12}>

<Row className="projectsTitleMargin">
    <Col>
        <h1 className="countNumber">
            <CountUp start={0} end={100} delay={0}>
                {({ countUpRef,start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
        </h1>
        <h3 className="countNumberText">Total Projects</h3>
        <hr className="bg-white w-25" />
    </Col>
    <Col>
        <h1 className="countNumber">
            <CountUp start={101} end={300} delay={0}>
                {({ countUpRef,start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
        </h1>
        <h3 className="countNumberText">Total Clients</h3>
        <hr className="bg-white w-25" />
    </Col>
</Row>

        </Col>




        <Col lg={4} md={4} sm={12} >

                <Card className="workCard">

                    <Card.Body>
                        <Card.Title className="cardTitle text-justify">How i Work</Card.Title>
                        <Card.Text>
                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirement</p>
                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> System Analysis</p>
                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coding Testing</p>
                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Implementation</p>
                        </Card.Text>

                    </Card.Body>
                </Card>


        </Col>

    </Row>

</Container>

                    </div>

                </Container>
            </Fragment>
        );
    }
}

export default Summary;