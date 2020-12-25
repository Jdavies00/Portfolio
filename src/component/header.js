
import React from 'react'


const Header = (props) => {



    return (
        <>
            <div className="collapse bg-dark " id="navbarHeader">
                <div className="container-fluid bg-dark pt-1">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                        <img   style={{width: 220, height: 200, borderRadius: 200/2}}  src="headShot.jpg"/>
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">Velit fugiat aute cillum velit exercitation occaecat irure aliquip. Aliqua fugiat est nulla mollit est aute. Esse pariatur eu nostrud exercitation nisi. Eiusmod velit cupidatat mollit sunt. Proident quis laboris sint dolore laborum.</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Contact</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white">Blog</a></li>
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
                    <strong className ="text-white font-size= 10 px">Portfolio </strong>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header
