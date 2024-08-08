import React, { useState } from 'react'

import { v4 as uuidv4 } from "uuid"
const NewTodo = (props) => {
    const [todo, setTodo] = useState({ id: "", name: "", dec: "" })
    const { id, name, dec } = todo


    const handleOnChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }

    const handelerOnSubmit = (e) => {
        // e.preventDefault()
        // props.getNewTodo(todo)
        // setTodo({ name: "", dec: "" })

        e.preventDefault()
        const newTodo = { ...todo, id: uuidv4() } // Unique ID set করা হলো
        props.getNewTodo(newTodo)
        setTodo({ id: "", name: "", dec: "" }) // ফর্মটি রিসেট করা হলো
    }

    return (
        <div className='bg-slate-500 p-3 mb-2' >
            <form onSubmit={handelerOnSubmit}>
                <div className="space-y-12 ">
                    <div className="border-b border-gray-900/10 pb-6">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-xl font-medium leading-6 text-white">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 
                                    focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                        <input

                                            name="name"
                                            type="text"
                                            placeholder="Title"
                                            autoComplete="username"
                                            value={name}
                                            onChange={handleOnChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1
                                              text-white  focus:ring-0 sm:text-sm sm:leading-6 p-1"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-xl font-medium text-white  leading-6 ">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea

                                        name="dec"
                                        rows={3}
                                        value={dec}
                                        placeholder="Description..."
                                        onChange={handleOnChange}
                                        className="block w-full bg-transparent text-white rounded-md border-0
                                        p-1 py-1.5 0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className=" flex items-center justify-center gap-x-3">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add-Todo
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewTodo