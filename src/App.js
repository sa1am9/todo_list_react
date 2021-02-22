import React, { Component } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import './App.css'

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    handleChange(text){
        // this.setState ((prevState) => {
        //     console.log(prevState)
        //     return {
        //     items: prevState.items.map (item => {
        //         if (item.text === text) {
        //             item.checked = !item.checked;
        //         }
        //         return item;
        //     }),
        //     }
        // });
    };
    createTasks(item, index) {
        return <div key={item.name}><li><Checkbox checked={item.complete}
                                                  onChange={this.handleChange(item.text)}
                                                  />
                                        {item.name}</li></div>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {name : 'create skeleton of todo', complete : true},
                {name : 'add ability to add tasks', complete : true},
                {name : 'clear task name after clicking "Add"', complete : false},
                {name : 'put "Add" button in one line with input', complete : false},
                {name : 'add new task by hitting Enter instead of clicking "Add"', complete : false},
                {name : 'replace <input> with <ui-checkbox> in tasks list', complete : false},
                {name : 'when task is complete cross it out', complete : false},
                {name : 'split tasks into "pending" and "complete" tabs using keen-ui component <ui-tabs>', complete : false},
                {name : 'don\'t allow to add empty tasks', complete : false},
                {name : 'make list of tasks scrollable, if there\'re are a lot of tasks', complete : false},
                {name : 'extract list item into a separate vue.js component', complete : false},
                {name : 'persist tasks list in a local storage', complete : false},
                {name : 'add animation on task completion', complete : false},
            ]
        };
        this.addItem = this.addItem.bind(this);
    }
    // _handleKeyDown(e) {
    //     if (e.key === 'Enter') {
    //         console.log('do validate');
    //     }
    // }
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                name: this._inputElement.value,
                complete: false
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        e.preventDefault();
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input  ref={(a) => this._inputElement = a}
                               placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}

export default TodoList;
