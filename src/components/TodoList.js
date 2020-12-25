import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        //to check whether the input is blank or only space
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        //add the new todo into todo list
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) =>{
        //to check whether the input is blank or only space
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));

    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id ===id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

    return (
        <div className="todoList"> 
        <br></br> 
        <h1>Simple Todo List </h1>
        <TodoForm onSubmit={addTodo} />
        <br></br>
        <hr></hr>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    );
}

export default TodoList;
