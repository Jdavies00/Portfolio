import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
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
            <CardDeck>
                {/* <Card>
                    <Card.Body>
                        <Card.Title>CountDown Timer</Card.Title>
                        <CountDown />
                    </Card.Body>
                    <Card.Footer>
                        <ButtonGroup className='text-muted'>
                        </ButtonGroup>
                        <small className="text-muted"></small>
                    </Card.Footer>
                </Card> */}

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
            <br></br>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Calculator</Card.Title>

                        <Calculator />

                    </Card.Body>
                    <Card.Footer>
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
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h4 id="header" className="card-title text-center pt-3 " ><i className="fab fa-readme"></i> I Can Read Your Mind <i className="fab fa-readme"></i> </h4>
                            <hr />
                        </Card.Title>
                        <p id="content1" className="display-4  pt-6">  
                        {/* <MindReader /> */}
                        </p>
                        <p id="instruction" className="text-center"></p>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            <div className="container">
                                <div className=" text-center ">
                                    <button id="reset" type="button" className="btn btn-secondary btn-lg justify-content-center" onClick='reverse()'>Restart</button>
                                    <button id="go" type="button" className="btn btn-primary btn-lg" >Go</button>
                                </div>
                            </div>
                        </small>
                    </Card.Footer>
                </Card>
            </CardDeck>

            <br></br>

            <CardDeck>
                {/* <Card>
                    <Card.Body>
                        <Card.Title>Sliding Puzzle</Card.Title>
                        <SlidingPuzzle />
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> </small>
                    </Card.Footer>
                </Card> */}
                <Card>
                    <Card.Title className='text-center'>Tic-Tac-Toe</Card.Title>
                    <Game />
                    <Card.Footer>
                        <small className="text-muted"> </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>StandAlones</Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> </small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    )
}
