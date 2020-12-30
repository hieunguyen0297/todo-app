import React, {useState} from 'react'
// import {v4 as uuid} from 'uuid'

export default function Form({ setValueInput, value, todos, setTodos}) {
   
    const [message, setMessage ] = useState('')
    const inputHandler = (e) => {
        setValueInput(e.target.value)
        // console.log(e)
    }

    const fadeOut =() =>{
        setMessage('')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(value){
            setTodos([  //pass in current todos, then add new to it
                ...todos,{ id: Math.random() * 1000 ,text: value, complete: false}
            ])
            setValueInput("")
        }else{
            setMessage('You need some input!!!!!')
            setTimeout(() => {
                fadeOut()
            }, 4000);
            
        }
        
    }

    return (
        <div>
            <h2 className='bg-danger'>{message}</h2>
            <form style={formStyle} onSubmit={submitHandler} >
                <input type='text' style={{flex: 6, padding: '10px'}} value= {value} onChange={inputHandler}></input>
                <input type='submit' className='btn btn-primary' style={{flex: 2}} value='Submit'></input>
            </form>
        </div>
        
    )
}

const formStyle = {
    display: 'flex',
    margin: 'auto'
}