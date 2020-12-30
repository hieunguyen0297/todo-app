import React from 'react'

export default function Todo({ todo,todos, setTodos}) {

    const deleteHandler = () => {
        setTodos(todos.filter((each) => each.id !== todo.id))
        
    }
    
    const completeHandler= () => {
        setTodos(todos.map((each) => {
            if(each.id === todo.id){
                return {
                    ...each, complete: !each.complete
                }
            }
            return each
        }))
    }

    
    return (
        <li className='p-2 my-2 bg-primary text-light' style={{fontSize:'30px', textDecoration: todo.complete ? 'line-through' : 'none' }}>
            <input type="checkbox" className="bg-info mr-3 " style={{ width:'30px', height: '30px'}} onChange={completeHandler}></input>
                {todo.text}<button className='btn btn-danger p-2 float-right' onClick={deleteHandler}>X</button>
                        
        </li>
    )
}
