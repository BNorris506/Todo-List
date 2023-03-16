import React from 'react';
import { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
    const [todo, setTodo]= useState(props.edit ? props.edit.value : "")

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    } )

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: todo
            });
            setTodo("");
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <form className="todo-form" onSubmit={(e) => handleSubmit(e)}>
                {props.edit ? ( 
                <>
                <input
                name="todo"
                value={todo}
                type="text"
                placeholder="Update your 'Todo'"
                className="todo-input edit"
                onChange={(e) => setTodo(e.target.value)}
                ref={inputRef}
            ></input>
            <button className="todo-button" type="submit">Update</button></>) : (
            <>
            <input
                name="todo"
                value={todo}
                type="text"
                placeholder="Add 'Todo'"
                className="todo-input"
                onChange={(e) => setTodo(e.target.value)}
                ref={inputRef}
            ></input>
            <button className="todo-button edit" type="submit">Add Todo</button></>)}
            </form>
        </div>
    );
};

export default TodoForm;