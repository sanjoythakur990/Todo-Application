import React, {useState} from "react";

const App=()=>{
    const [task, setTask]= useState("")
    const [todo, setTodo] =useState([])
    function addtask(){
        if(task) setTodo([...todo, task])
        setTask("")
    }

    function dltTask(i){
        let newTodo= [...todo]
        newTodo.splice(i, 1)
        console.log(newTodo);
        setTodo(newTodo)
    }
    return (
        <div>
            <h1>To-Do App</h1>
            <input placeholder="Enter task" value={task} type="text" onChange={(e)=> setTask(e.target.value)}/>
            <button onClick={addtask}> Add </button>
            <ul>
                { todo.length>=1 && (
                    todo.map((item,i)=>(
                        <li>{item} <button onClick={()=> dltTask(i)}> dlt task </button></li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default App