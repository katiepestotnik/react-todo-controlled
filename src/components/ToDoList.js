const ToDoList = ({ todos }) => {
    const todosArray = todos.map((ele, idx)=>{
        return(
            <li key={idx}>{ele}</li>
        )
    })
    return (
        <ul>
            {todosArray}
        </ul>
    )
}
export default ToDoList