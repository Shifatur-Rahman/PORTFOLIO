import React, {Component,Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap"
import {BarChart,XAxis,ResponsiveContainer,Bar,Tooltip} from "recharts"
class Analysis extends Component {

    state={
        dataType:[
            {
                Technology:"Java",
                Projects : "90"
            },
            {
                Technology:"Php",
                Projects : "80"
            },
            {
                Technology:"JS",
                Projects : "80"
            },
            {
                Technology:"API",
                Projects : "70"
            },
            {
                Technology:"Boots",
                Projects : "45"
            },
            {
                Technology:"Ios",
                Projects : "50"
            },
            {
                Technology:"Kotlin",
                Projects : "90"
            },
            {
                Technology:"Ruby",
                Projects : "75"
            }

        ]
    }



    render() {
        var blue = "rgba(0,115,230,0.8)";
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle text-uppercase">Technology Used</h1>
<Row>

    <Col lg={6} md={12} sm={12} style={{width:'100%' , height:'300px'}}>
        <ResponsiveContainer>
        <BarChart data={this.state.dataType} width={100} height={300}>
            <XAxis dataKey="Technology"/>
            <Tooltip />
<Bar dataKey="Projects" fill={blue}> </Bar>

        </BarChart>
            </ResponsiveContainer>
    </Col>

    <Col lg={6} md={12} sm={12}>
<p className="analysisText text-justify">
    To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.
<br />
    <br />
    I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.
    <br />
    <br />
    Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.
</p>
    </Col>
</Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;