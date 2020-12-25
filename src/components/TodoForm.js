import { useState, useEffect, useRef } from "react";

function TodoForm(props) {

    const [input, setInput] = useState(props.edit? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleChange = e =>{
        setInput(e.target.value); 
    }

    const handleSubmit = e =>{
        e.preventDefault();

        //the text input will pass and store in todolist
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        //clear input after submit
        setInput('');
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? 
            (
            <>
            <input type='text' 
            placeholder='Update your todo task' 
            value={input} 
            name='text' 
            className='todo-input-edit'
            onChange={handleChange}
            ref={inputRef}></input>
            <button className="todo-button-edit">Update</button>
            </>
            ):
            (
            <>
            <input type='text' 
            placeholder='Enter your todo task here' 
            value={input} 
            name='text' 
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}></input>
            <button className="todo-button">Add</button>
            </>
            )}
        </form>
    );
}

export default TodoForm;
