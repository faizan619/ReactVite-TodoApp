import React, { useState } from 'react';
// import style from 'styled-components';

function App() {

    // const Heading = style.h1`
    //     color:white;
    //     background-color:black;
    //     text-align:center;
    //     padding:.5rem 0;
    //     font-family:sans-serif;
    // `

    // const Button = style.button`
    //     padding:.4rem 1rem;
    //     background-color:black;
    //     color:white;
    //     border-radius:.3rem;
    // `

    // const TaskContainer = style.div`
    //     padding:1rem;
    //     height:80vh;
    //     overflow-y:auto;
    //     & ul{
    //         background-color:gray;
    //         border:1px solid black;
    //         padding:.3rem .5rem;
    //         border-radius:.5rem;
    //     }
    // `

    const [title,settile] = useState("");
    const [desc,setdesc] = useState("");
    const [maintask,setmaintask] = useState([]);

    const submitForm = (e)=>{
        e.preventDefault();
        setmaintask([...maintask,{title,desc}]);
        console.log(maintask)
        settile("");
        setdesc("");
    }

    const deletehandle = (i)=>{
        let copyTask = [...maintask];
        copyTask.splice(i ,1);
        setmaintask(copyTask);
    }

    let renderTask = <h3>No Task Available</h3>;
    // 🔑🔖🏷🖇📎❌ 
    if(maintask.length > 0){
        renderTask = maintask.map((t,i)=>{
            return <><li key={i} className='tasklist'>
                <div className="tasktask">
                    <h3 className='tasktitle'>📌&nbsp;{t.title}</h3>
                    <h3 className='taskdesc'>➡ {t.desc}</h3>
                </div>
                    <button className='donebtn' onClick={()=>deletehandle(i)}>
                    Done&nbsp;✅
                    </button>
                </li></>
        })
    }

  return (
    <div className="container">
        {/* <Heading>Todo List</Heading> */}
        <h1>📑Todo List&nbsp;📑</h1>
        <form onSubmit={submitForm}>
            <input type="text" placeholder='Enter Title' value={title} onChange={(e)=>settile(e.target.value)} />
            <input type="text" placeholder='Enter Description' value={desc} onChange={(e)=>setdesc(e.target.value)} />
            <button className='taskbtn'>Add Task</button>
        </form>
        <div className="taskContainer">
        {/* <TaskContainer> */}
            <ul>
                {renderTask}
            </ul>
        {/* </TaskContainer> */}
        </div>
    </div>
  )
}

export default App;