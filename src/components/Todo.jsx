import React from 'react'

import { MdDeleteForever } from "react-icons/md";
import "../App.css"
const Todo = (props) => {
    const { id, name, dec } = props.todo

    const handleOnClick = (id) => {
        props.onremoveTodo(id)
    }

    return (
        <article className='articles cursor-pointer flex flex-row justify-between items-center bg-orange-500 mb-2 p-2 rounded-md text-white'  >

            <div>
                <h3 className='text-xl font-bold' >{name}</h3>
                <p>{dec}</p>
            </div>
            <div>
                <button onClick={() => { handleOnClick(id) }} >
                    <MdDeleteForever className='text-2xl font-bold cursor-pointer' />
                </button>

            </div>
        </article>
    )
}

export default Todo