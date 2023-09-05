import React, { useState,useEffect } from 'react';
function App() {


    const [title,settile] = useState("");
    const [desc,setdesc] = useState("");
    const [maintask,setmaintask] = useState([]);

    useEffect(()=>{
        const savedTasks = localStorage.getItem("tasks");
        console.log("Saved Tasks from local storage :",savedTasks);
        if(savedTasks){
            setmaintask(JSON.parse(savedTasks));
        }
    },[])

    const submitForm = (e)=>{
        e.preventDefault();
        const newTask = {title,desc};
        const updateTasks = [...maintask,newTask];
        setmaintask(updateTasks);
        localStorage.setItem("tasks",JSON.stringify(updateTasks));
        console.log("Tasks Saved to Local Storage :",updateTasks)
        console.log(maintask)
        settile("");
        setdesc("");
    }

    const deletehandle = (i)=>{
        let copyTask = [...maintask];
        copyTask.splice(i ,1);
        setmaintask(copyTask);
        localStorage.setItem("tasks",JSON.stringify(copyTask))
    }

    let renderTask = <h3>No Task Available</h3>;
    if(maintask.length > 0){
        renderTask = maintask.map((t,i)=>{
            return <><li key={i} className='tasklist'>
                <div className="tasktask">
                    <h3 className='tasktitle'>📌&nbsp;{t.title}</h3>
                    <h3 className='taskdesc'><span>➡</span>&nbsp;{t.desc}</h3>
                </div>
                    <button className='donebtn' onClick={()=>deletehandle(i)}>
                    Done&nbsp;<span>✅</span>
                    </button>
                </li></>
        })
    }

  return (
    <>
    <div className='invisible'>
       <mark><h1>Opps! Sorry for the Problem.</h1></mark>
        <br/><hr/> <marquee behavior="" direction="">TaskList Doesn't Support In Small Devices</marquee>
    </div>
    <div className="container">
        <h1>📑Todo List&nbsp;📑</h1>
        <form onSubmit={submitForm}>
            <input type="text" placeholder='Enter Title' value={title} onChange={(e)=>settile(e.target.value)} />
            <input type="text" placeholder='Enter Description' value={desc} onChange={(e)=>setdesc(e.target.value)} />
            <button className='taskbtn'>Add Task</button>
        </form>
        <div className="taskContainer">
            <ul>
                {renderTask}
            </ul>
        </div>
    </div>
    </>
  )
}

export default App;