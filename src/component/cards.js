import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Container, Row, Col } from 'reactstrap';
import Game from "./TicTacToe/Game";
import Clock from './clock';
import Calculator from "./calculator";
import '/Users/jamesdavies/Sites/Portfolio /portfolio/src/css/card.css';
import TodoList from "./TodoList/TodoList";
// import SlidingPuzzle from "./slidingPuzzle/SPapp"

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
                <CardDeck>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title>Clock | Timer</Card.Title>
                            <Clock id="clock" />
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"> </small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <br />
                <CardDeck>
                    <Card>
                        <Card.Title>Calculator</Card.Title>
                        <Calculator />
                        <Card.Footer >
                            <small className="text-muted"> </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>To-Do List</Card.Title>
                            <TodoList />
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"> </small>
                        </Card.Footer>
                    </Card>
                    <Card style={ticTacToeStyle}>
                        <Card.Title className='text-center'>Tic-Tac-Toe</Card.Title>
                        <Game />
                    </Card>
                </CardDeck>
                <br />
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>Sliding Puzzle</Card.Title>
                            {/* <SlidingPuzzle /> */}
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"> </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body style={standAloneStyle} className="text-center">
                            <Card.Title >StandAlones</Card.Title>
                            <i className="fas fa-blog"> Blog</i>
                            <br />
                            <a href="https://github.com/Jdavies00">
                                <i className="fab fa-github"> Github</i></a>
                            <a href="https://jdavies00.github.io/weather-API/">
                                <i class="fas fa-cloud">Weather API</i></a>
                            <br />
                            <a href="https://jdavies00.github.io/MindReader/"><i class="fab fa-readme">Mind Reader App </i></a>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"> </small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
            <Row>
                <Col>
                    <footer id="footer">
                        <span className="text-muted">sometext</span>
                    </footer>
                </Col>
            </Row>
        </>
    )
}
