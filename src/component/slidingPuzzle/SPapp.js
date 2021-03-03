import React, { Component } from 'react'
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tiles:
        [{ "id": 0, "moves": [1, 4], "value": 0 }, { "id": 1, "moves": [0, 2, 5], "value": 1 }, { "id": 2, "moves": [1, 3, 6], "value": 2 }, { "id": 3, "moves": [2, 7], "value": 3 },
        { "id": 4, "moves": [0, 5, 8], "value": 4 }, { "id": 5, "moves": [1, 4, 6, 9], "value": 5 }, { "id": 6, "moves": [2, 5, 7, 10], "value": 6 }, { "id": 7, "moves": [3, 6, 11], "value": 7 },
        { "id": 8, "moves": [4, 9, 12], "value": 8 }, { "id": 9, "moves": [5, 8, 10, 13], "value": 9 }, { "id": 10, "moves": [6, 9, 11, 14], "value": 10 }, { "id": 11, "moves": [7, 10, 15], "value": 11 },
        { "id": 12, "moves": [8, 13], "value": 12 }, { "id": 13, "moves": [9, 12, 14], "value": 13 }, { "id": 14, "moves": [10, 13, 15], "value": 14 }, { "id": 15, "moves": [11, 14], "value": 15 }],
      Clicks: 0
    }
  }
//when tile is clicked
  isClicked({ id, value, moves }) {
    let Tiles = this.state.Tiles
    let Clicks = this.state.Clicks
    for (let j = 0; j < moves.length; j++) {  //loops through random moves 
      if (Tiles[moves[j]].value === 0) {   //if 0 is in random moves
        Tiles[id].value = Tiles[moves[j]].value // swap tile values
        Tiles[moves[j]].value = value
        Clicks++
        this.checkWin()
      }
    }
    this.setState({
      Tiles,
      Clicks
    })
  }
  checkWin() {
    this.state.Tiles.every((item, index) => item.value === index)
      && alert('you won!');
  }
  //moves the 0 tile to one of its open moves
  shuffle() {
    let Tiles = this.state.Tiles
    let Clicks = this.state.Clicks
    Clicks = 0
    for(let i=0;i<=50;i++){
    let blank = Tiles.find(item => item.value === 0)  //find tile value 0
    let blankValue = blank.value
    let newTile = Tiles[blank.moves[Math.floor(Math.random() * ((blank.moves.length)))]] //picks random move
    let newValue = newTile.value  //swaps values
    newTile.value = blankValue
    blank.value = newValue
    }
    this.setState({
      Tiles,
      Clicks
    })
  }
  //sets all all values back to their original position
  reset(){
    let Tiles = this.state.Tiles
    let Clicks = this.state.Clicks
    for(let i=0; i<=15; i++){
        Tiles[i].value = i
    }
    Clicks = 0
    this.setState({
      Tiles,
      Clicks
    })
  }
  render() {
    return (
      <div className="container  bg-info">
        <div className="row d-flex text-center">
          <h4 className="col-12 text-primary">Zero is the empty block! Click Start, then slide the peices back to their orignal positions</h4>
          {
            this.state.Tiles.map((item, i) =>   //mapping through tiles array
              <div
                key={i}
                id={i}
                className="col-3 border border-info text-primary bg-success"
                onClick={() => this.isClicked(item)}
                style={{height: 110, fontSize: '15px', fontWeight: 700, margin:"auto"}}>
                {item.value}
              </div>
            )
          }
        </div>
        <p className="text-primary">Moves: {this.state.Clicks}</p>
        <button className="btn btn-primary text-white" onClick={() => this.shuffle()}>Start!</button>  
        <button className="btn btn-primary text-white" onClick={() => this.reset()}>Reset</button>
      </div>
    )
  }
}