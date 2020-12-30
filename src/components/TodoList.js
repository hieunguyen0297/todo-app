import React from 'react'
import Todo from "./Todo";

export default function TodoList({todos, setTodos}) {

  

    return (
        <>
            <ul className="list-group">
                {todos.map(todo => (
                    <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id}/>
                ))}
            </ul>
        </>
    )
}
