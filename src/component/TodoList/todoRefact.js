import React, {useState, useEffect} from 'react'

export default function todoRefact() {

    const[listItem, setListItem] = useState();
    const[addListItem, setAddListItem] = useState();
    const[change, setListItem] = useState();

    return (
        <div className="todoListMain">
            <h2 className="toDoHeader">2 Much 2 Do 2 Day</h2>
            <div className="header">
                <form onSubmit={e => setAddListItem(e)}>
                    <input
                        value= {listItem}
                        type='text'
                        onChange={e => setListItem(e.target.value)}
                        placeholder=" What would you like to do? ">
                    </input>
                    <button type="submit"> + </button>
                </form>
            </div>
        </div>
    )
}
