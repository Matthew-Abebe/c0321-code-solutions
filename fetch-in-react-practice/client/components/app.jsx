import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    */

    const newDataArr = [];

    fetch('/api/todos', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(data => {
        this.state.todos.push(data);
        for (let i = 0; i < this.state.todos.length; i++) {
          newDataArr.push(this.state.todos[i]);
          console.log(newDataArr);
        }
        this.setState({ todos: newDataArr });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */

    let index = null;
    for (let i = 0; i < this.state.todos.length; i++) {
      const todo = this.state.todos[i];
      if (todo.todoId === todoId) {
        index = i;
      }
    }
    const isCompleted = this.state.todos[index].isCompleted;
    const update = {
      isCompleted: !isCompleted
    };

    const bodyJSON = JSON.stringify(update);
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const req = {
      method: 'PATCH',
      headers: headers,
      body: bodyJSON
    };
    fetch(`/api/todos/${todoId}`, req)
      .then(res => res.json())
      .then(updatedTodo => {
        const newTodos = this.state.todos.slice();
        newTodos[index] = updatedTodo;
        this.setState({ todos: newTodos });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
