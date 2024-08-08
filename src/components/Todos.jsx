import React from 'react'
import Todo from './Todo'

const Todos = (props) => {


    return (
        <section className=' bg-slate-300 p-4' >
            {
                props.todos.map((todo) => <Todo key={todo.id} todo={todo} onremoveTodo={props.onRemove} />)
            }
        </section>
    )
}

export default Todos