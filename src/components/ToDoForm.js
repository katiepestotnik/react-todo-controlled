import {useState} from 'react'

const ToDoForm = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('')
    const handleClick = () => {
        addTodo(newTodo)
        setNewTodo('')
    }
    return (
        <>
            <h2>New To-Do</h2>
            <input
                value={newTodo}
                placeholder='New To-Do'
                onChange={(e)=>setNewTodo(e.target.value)}></input>
            <button onClick={handleClick}>ADD</button>
        </>
        
    )
}
export default ToDoForm