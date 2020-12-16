import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Container, Row, Col } from 'reactstrap';

// import { Button, ButtonGroup, Container } from 'reactstrap';
import Game from "./TicTacToe/Game";
import Clock from './clock';
import Calculator from "./calculator";
import '/Users/jamesdavies/Sites/Portfolio /portfolio/src/css/card.css';
import TodoList from "./TodoList/TodoList";
// import MindReader from "./mindreader/mindReader"
// import CountDown from "./countDowntimer";
// import WeatherApp from "./weatherapp"
// import SlidingPuzzle from "./slidingPuzzle/game"
export default function Cards() {
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
                    {/* <Card>
                    <Card.Body>
                        <Card.Title>Weather App</Card.Title>
                            <WeatherApp />
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> </small>
                    </Card.Footer>
                </Card> */}
                </CardDeck>
                <br />
                <CardDeck>
                    <Card>
                        <Card.Title>Calculator</Card.Title>
                        <Calculator />
                        <Card.Footer >
                            <small className="text-muted" > </small>
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
                    <Card>
                        <Card.Body>
                            <Card.Title>
                            </Card.Title>

                                {/* <MindReader /> */}

                        </Card.Body>
                        <Card.Footer>
                            {/* <small className="text-muted">
                             
                            </small> */}
                        </Card.Footer>
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
                        <Card.Title className='text-center'>Tic-Tac-Toe</Card.Title>
                        <Game />
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title >StandAlones</Card.Title>
                            <i className="fas fa-blog">Blog</i><br />
                            <i className="fab fa-github">Github</i>

                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"> </small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        </>
    )
}
