import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";



class Review extends Component {
    render() {
        var settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 1500,
            infinite: true,
            vertical:true,
            verticalSwiping : true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">CLIENT REVIEWS</h1>
<Slider  {...settings}>



    <div>
        <Row className="text-center justify-content-center">
            <Col lg={8} md={6} sm={12}>
                <img className="circleImg" src="https://image.shutterstock.com/image-photo/customer-experience-concept-happy-businessman-600w-712758214.jpg" />
                <h2 className="reviewTitle">Web Development</h2>
                <p className="coursePara">I build native and cross platfrom mobile app for your business and instiution as per as your requirements. Testing is also going on with coding. Final testing take place a
                </p>

            </Col>

        </Row>
    </div>

    <div>
        <Row className="text-center justify-content-center">
            <Col lg={8} md={6} sm={12}>
                <img className="circleImg" src="https://image.shutterstock.com/image-photo/customer-experience-concept-happy-businessman-600w-712758214.jpg" />
                <h2 className="reviewTitle">Mobile App</h2>
                <p className="coursePara">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.According to the planning i start coding. Testing is also going on with coding. Final testing take place a
                </p>

            </Col>

        </Row>
    </div>

    <div>
        <Row className="text-center justify-content-center">
            <Col lg={8} md={6} sm={12}>
                <img className="circleImg" src="https://image.shutterstock.com/image-photo/customer-experience-concept-happy-businessman-600w-712758214.jpg" />
                <h2 className="reviewTitle">Ghraphics Design</h2>
                <p className="coursePara">I build native and cross platfrom mobile app for your business and instiution as per as your requirements. Testing is also going on with coding. Final testing take place a
                </p>

            </Col>

        </Row>
    </div>

</Slider>




                </Container>

            </Fragment>
        );
    }
}

export default Review;