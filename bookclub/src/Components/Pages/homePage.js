
import React, { Component } from 'react';
import Login from '../userComponent/login'
import {Container, Row, Col} from 'react-grid-system';
import UserRegistration from '../userComponent/userRegistration'
class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <div>
                <Container>
                <Row>
                    <Col lg={6} xs={12}>
                <h1 className="mainh">book<span className="homeHeader">club</span></h1>
                    </Col>
                    <Col lg={6} xs={12}>
                        <Login/>
                    </Col>
                </Row>
                </Container>
                </div>
                <hr/>
                <Container>
                    <Row>
                        <Col lg={8} xs={12}>
                <h1 className="companionText">Meet your next companion!!! </h1>
                        </Col>
                        <Col lg={4} xs={12}>
                <UserRegistration/>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container>
                    <Row>
                        <Col  lg={4} xs={12}>
                        <h5 className="mainp">Thinking what to read next?</h5>
                        <p className="mainp">You have come to correct place. Explore the vast collection of books, travel into the world you want</p>
                        </Col>
                        <Col  lg={4} xs={12}>
                            <h5 className="mainp">Whats new?</h5>
                        <p className="mainp">Like the books you want, write reviews, share the books you like with your friends, find amazing deals on the books, buy the books you want and indulge in the quote of the day</p>
                        </Col>
                        <Col lg={4} xs={12}>
                            <h5>What will <i>you</i> discover?</h5>
                            <ul>
                                <li>Fiction</li>
                                <li>Fantasy</li>
                                <li>Romance</li>
                                <li>Comedy</li>
                                <li>Thriller</li>
                                <li>BioGraphy</li>
                                <li>And more....</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
              <hr/>
            </div>

        );
    }
}

export default HomePage;
