import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component  {
  constructor() {
    super();
      this.pages = ['Home', 'About Me','blog','images','Links'];
      this.state = {
        currentPage : 1
      }
      this.setPage = this.setState.bind(this)
    
  }
  setPage(newPageNum){
this.setState({currentPage:newPageNum})
  }
  render() {
    return (
      <div className="App container">
      <Header 
      pages= {this.pages}
      currentPage ={this.state.currentPage}
      set Page={this.setPage}

      />
      



      </div>
    );
  }
}

export default App;
