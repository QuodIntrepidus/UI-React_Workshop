import _ from 'lodash';
import React, { Component } from 'react';

import './App.css';
import TodosList  from '../TodosList/TodosList';
import TodosListItem from '../TodosListItem/TodosListItem';

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            todos: {}
        };
    }

    componentDidMount() {
        this.setState({
            todos: {
                1: { id: 1, completed: false, description: "task 1" },
                2: { id: 2, completed: true, description: "task 2"},
                3: { id: 3, completed: false, description: "task 3"},
                4: { id: 4, completed: false, description: "task 4"}
            }
        });
    }

    toggleTodo = (id) => (e) => {
        e.preventDefault();
        const todos = _.clone(this.state.todos);
        todos[id].completed = !todos[id].completed;
        this.setState({ todos });
    };

    generateTodosListItem = (todo, id) => (
        <TodosListItem key={id}
                       todo={todo}
                       handleClick={this.toggleTodo} />
    );
        

    render() {
        const { todos } = this.state;
        return (
            <div className="app">
            <TodosList>
                {_.map(todos, this.generateTodosListItem)}
            </TodosList>
            </div>
        );
    }
}