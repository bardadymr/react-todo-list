import React from 'react'
import {IoMdClose} from 'react-icons/io'


export default function Tasks({list}) {

const [tasks, setTask] = React.useState([]);

React.useEffect(() => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
   setTask(tasks);
  }
}, []); //GetItems from localstorage

const [input, setValue] = React.useState('');

  const AddTask = () => {
    if (!input) {
      alert('Please, add your task!')
    } else {
      const obj =  {
        id: Date.now(),
        text: input,
        category: input,
        done: false,
        filter: list.id
  
      }
        setTask([...tasks, obj]);
        setValue('');  
    }
  }

  const RemoveTask = (task) => {
    tasks.splice(([...tasks].indexOf(task)), 1)
    setTask([...tasks]);
  }

  const setDoneTask = (task) => {
     
    
    const currentTask = tasks.find(item=> {
      return item.id === task.id;
    })
    currentTask.done = !currentTask.done
    setTask([...tasks]);
       
  }

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]) // SetItems to localstorage

  return (
    <div className='container_tasks'>
      <div>
        <h2 className='tasks_title'>
        {list.text}
        </h2>
      </div>

      <div className='tasks_items'>
        <ul>
        {list.id === 1 ? (tasks.map(task => (
            <li 
            key={task.id} 
            className = {`${task.category} ${task.done ? 'checked' : ''}`}
            id= {task.id}
            onClick = {() => setDoneTask(task)}
            >
            {task.text}
            <IoMdClose 
              className='img_delete_task'
              onClick = {() => RemoveTask(task)} 
              />
            </li>
           ))) : (tasks.filter(name => name.filter === list.id).map(task => (
            <li 
            key={task.id} 
            className = {`${task.category} ${task.done ? 'checked' : ''}`}
            id= {task.id}
            onClick = {() => setDoneTask(task)}
            >
            {task.text}
            <IoMdClose 
              className='img_delete_task'
              onClick = {() => RemoveTask(task)} 
              />
            </li>
           )))
          }
        </ul>
      <div className='add_tasks_input'>
        <input value={input} onChange={e => setValue(e.target.value)} className='field' type='text' placeholder='Add new task'/>
        <button onClick={AddTask} className='btn'>Add</button>
      </div>
       </div>
      </div>
  )
}
