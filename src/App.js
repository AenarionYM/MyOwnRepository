//Imports
import {useState, useEffect} from "react";

//Components
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    //Show Add Task
    const [showAddTask, setShowAddTask] = useState(false)

    //Tasks
    const [tasks, setTasks] = useState([])

    useEffect(() =>{
        const getTask = async () => {
          const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTask()
    }, [])

    //Fetch Data
    const fetchTasks = async () =>{
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()

        return data
    }

    //Fetch single data
    const fetchTask = async (id) =>{
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }

    //Add Task
    const addTask = async (task) => {
        const res = await fetch(`http://localhost:5000/tasks/`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()

        setTasks([...tasks, data])

        // const id = Math.floor(Math.random() * 10000) + 1
        // const newTask = {id, ...task}
        // setTasks([...tasks, newTask])
    }

    //Delete Task
    const deleteTask =async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    //Map == Foreach
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)

        })

        setTasks(
            tasks.map((task) =>
                task.id === id ? {...task, reminder: !task.reminder} : task
            )
        )
    }

    //Main output
    return (
    <div className="container">
      <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
      />
        {showAddTask && <AddTask onAdd={addTask}/>}
        {
            tasks.length > 0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):('No Tasks To Show')
        }
    </div>
  );
}

export default App;
