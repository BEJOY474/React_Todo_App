import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'

const Home = () => {
    const [todos, setTodos] = useState([])

    const getNewTodo = (newTodo) => {

        setTodos([...todos, newTodo])
        console.log("Data : ", newTodo)

    }

    const handelRemovetodo = (id) => {
        setTodos((previousToto) => {
            const filterTodos = previousToto.filter((todo) => todo.id != id)
            return filterTodos
        })
    }

    return (
        <div>
            <h1 className='text-white text-2xl mb-4 text-center' >Todo App</h1>
            <NewTodo getNewTodo={getNewTodo} />
            <Todos todos={todos} onRemove={handelRemovetodo} />
        </div>
    )
}

export default Home