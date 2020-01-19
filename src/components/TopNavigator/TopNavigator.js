import React, {Component,Fragment} from 'react';
import {Navbar,Nav} from "react-bootstrap"
import  whiteLogo from "../../asset/image/whiteLogo.svg"
import  blueLogo from "../../asset/image/blueLogo.svg"
import '../../asset/css/custom.css'

class TopNavigator extends Component {
  state={
            navTitleNew: "navTitle",
      newWhiteLogo : [whiteLogo],
      newNavBar : "navBar",
      newNavBarItem : "navBarItem"
        }

onScroll = () =>{
       if(window.scrollY>100){

           this.setState({navTitleNew : "navTitleScroll" , newWhiteLogo : [blueLogo],newNavBar : "navBarScroll",newNavBarItem : "navBarItemScroll" })

       }else if(window.scrollY<100){

           this.setState({navTitleNew  : "navTitle", newWhiteLogo : [whiteLogo],newNavBar : "navBar",newNavBarItem : "navBarItem"})

       }
}


    componentDidMount() {
       window.addEventListener("scroll",this.onScroll)
}


    render() {
        return (
            <Fragment>
                <Navbar className={this.state.newNavBar} fixed="top" collapseOnSelect expand="lg" variant="dark">

                    <Navbar.Brand className={this.state.navTitleNew}> <img src={this.state.newWhiteLogo} /> Shifatur Rahman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.newNavBarItem}>Home</Nav.Link>
                               <Nav.Link className={this.state.newNavBarItem}>Services</Nav.Link>
                               <Nav.Link className={this.state.newNavBarItem}>Courses</Nav.Link>
                               <Nav.Link className={this.state.newNavBarItem}>Portfolio</Nav.Link>
                               <Nav.Link className={this.state.newNavBarItem}>Contact</Nav.Link>
                               <Nav.Link className={this.state.newNavBarItem}>About</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigator;