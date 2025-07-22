import React from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

export function AddTodo() {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('') // Clear input after adding todo
    }

    return (
    <form onSubmit={addTodoHandler} classname="space-x-3 mt-12">
        <input
        type="text"
        className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900
        text-base-outline-none text-gray-100 py-1 x-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='Add Todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button
        type="submit"
        className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded'>Add Todo</button>
        </form>

    )

}
