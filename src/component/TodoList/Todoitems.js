import React, { Component } from "react";

class  TodoItems extends Component {
    constructor(props){
        super(props);
        // console.log(props)
    }
    render (){
        
        var todoEntries = this.props.entries;
        var self = this;
        var listItems=todoEntries.filter(
            todoEntry=>todoEntry.isCompleted!==true).map(function (item){
                return(
                    <div className="form-check" key = {item.key}>
                        <input className="form-check-input" type="checkbox" id="defaultCheck1"  checked = {item.checked} onChange={()=>self.props.handelTodoCheck(item.key)}  />
                        <label className="form-check-label" >
                            {item.text}
                        </label>
                    </div>
                );
            });
    //  console.log(listItems)
    
    return (
            <ul className ="theList">
            {listItems}
            </ul>
    );
}

};
export default TodoItems;



