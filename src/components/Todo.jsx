import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, toggleComplete} from '../features/todo/todoSlice'
import {Trash2 } from "lucide-react"

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    const handleCheckboxClick = () => {
      dispatch(
        toggleComplete({ id: id, completed: !completed })
      )
    }

  return (
   <div className="flex flex-wrap w-full justify-center items-center mt-12 text-white">
    <div className='w-full justify-center flex text-xl'>Todos</div>
    <ul className='list-none w-1/2'>
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white justify-start w-full'>
              {todo.text}
            </div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
             <Trash2 strokeWidth={2.5} />
            </button>
          </li>
        ))}
      </ul>
   </div>
  )
}

export default Todos