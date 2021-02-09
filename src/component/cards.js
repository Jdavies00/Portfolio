import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'reactstrap';
import Game from "./TicTacToe/Game";
import Clock from './clock';
import Calculator from "./calculator";
import '/Users/jamesdavies/Sites/Portfolio /portfolio/src/css/card.css';
import TodoList from "./TodoList/TodoList";
import SlidingPuzzle from "./slidingPuzzle/SPapp"

export default function Cards() {
    const standAloneStyle = {
        fontSize: 50,
        textAlign: "center",
    }
    const ticTacToeStyle = {
        topPadding: 30,
        textAlign: "center",
    }
    return (
        <>
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card>
                            <Card.Body className="text-center">
                                <Card.Title>Clock | Timer</Card.Title>
                                <Clock id="clock" />
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"> </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
             
                <br />
                <Row>
                    <Col xs="auto" md="6">
                        <Card>
                            <Card.Title className="text-center">Calculator</Card.Title>
                            <Calculator />
                            <Card.Footer >
                                <small className="text-muted"> </small>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col xs="auto" md="6">
                        <Card style={ticTacToeStyle}>
                            <Card.Title className='text-center'>Tic-Tac-Toe</Card.Title>
                            <Game />
                            <Card.Footer>
                                <small className="text-muted"> </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs="auto" md="6">
                        <Card>
                            <Card.Body className="text-center">
                                <Card.Title>To-Do List</Card.Title>
                                <TodoList />
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"> </small>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col xs="auto" md="6">
                        <Card>
                            <Card.Body style={standAloneStyle} className="text-center">
                                <Card.Title >StandAlones</Card.Title>
                             
                                <a href="https://jdavies00.github.io/weather-API/">
                                    <i class="fas fa-cloud">Weather API</i></a>
                                <br />
                                <a href="https://jdavies00.github.io/MindReader/"><i class="fab fa-readme">Mind Reader App </i></a>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"> </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>

                    <Card className="text-center">
                        <SlidingPuzzle />
                        <Card.Footer>
                            <small className="text-muted"> </small>
                        </Card.Footer>
                    </Card>
                    <Col xs="auto" md="6">
                        <br />
                    </Col>
                </Row>
            </Container>
        </>


    )
}
