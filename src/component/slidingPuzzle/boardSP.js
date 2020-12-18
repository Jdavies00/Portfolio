import React from 'react';


function Board(props) {
    let bunchoButonsArray = []
    for (let i = 0; i < props.tile_Data_Raw.length; i++) {
        let num = props.tile_Data_Raw[i]
        if (i = 0) {
            let ogButton = <button id='eviltile'
                className=" col-3 btn-primary  special class to blank out" onClick={() => props.tile_click(i)}
                style={{ height: 150 }} key={0}>{num.currentValue}</button>
            bunchoButonsArray.push(ogButton)
        }
        let ogButton =
             <button className=" col-3 btn-primary" onClick={() => props.tile_click(i)} style={{ height: 150 }} key={i}>{num.currentValue}</button>
        bunchoButonsArray.push(ogButton)
        console.log(bunchoButonsArray)
    }
    return (
        <div className='container'>
            <div className='row'>
                {bunchoButonsArray}
            </div>
        </div>
    )
}

export default Board;