import { Col, Row } from "reactstrap"
import './App.css';
import Cards from './component/cards';
function App() {
  return (

    <div className="App">
      <div className="collapse bg-dark " id="navbarHeader">
        <div className="container-fluid bg-dark pt-1">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <img style={{ width: 500, height: 350, borderRadius: 400 / 2 }} src="headShot.jpg" alt="JdaviesheadShot.jpg" />
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="https://jdaviesblog-a14a2.web.app/" className="text-white">Blog</a></li>
                <li><a href="https://github.com/Jdavies00" className="text-white">Github</a></li>
                <li><a href="https://linkedin.com/in/jdavies00" className="text-white">Linkedin</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <i className="far fa-handshake p= 3px"></i>
          </a>
          <strong className="text-white font-size= 10 px">Portfolio </strong>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div className="jumbotron mt-4" >
        <h1 className="display-4">Hello!<br /> Welcome to my protfolio</h1>

      </div>
      <div></div>
      <div className="jumbotron">
        <h1 className="display-4">Below are some of my projects,<br />Take a look!</h1>

      </div>
      <Cards id="CardDeck" />
      <Row>
        <Col>
          <footer style={{ backgroundColor: "grey", height: "15px" }} className="sticky-bottom">
            <span className="text-muted"></span>
          </footer>
        </Col>
      </Row>
    </div>
  );
}

export default App;
