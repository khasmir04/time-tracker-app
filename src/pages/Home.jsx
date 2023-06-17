import { useState, useEffect } from 'react'
import Profile from '../components/Profile'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'
import EmptyTask from '../components/EmptyTask'

const Home = () => {
  const [user, setUser] = useState({})
  const [tasks, setTasks] = useState([])

  const getUser = async () => {
    try {
      const userData = await fetch('http://localhost:3000/user')
      const res = await userData.json()
      setUser(res)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getTasks = async () => {
    try {
      const tasksData = await fetch('http://localhost:3000/tasks')
      const res = await tasksData.json()
      setTasks(res)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleOnSubmit = (entry) => {
    const currentTime = new Date().toLocaleString()

    const newEntry = {
      user: {
        ...user,
      },
      ...entry,
      created_at: currentTime,
      important: false,
      isTimerRunning: false,
      timeLeft: entry.hours * 3600,
      modified_at: currentTime,
    }

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks([...tasks, data])
      })
      .catch((error) => console.log(error))
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedTasks = tasks.filter((entry) => entry.id !== id)
        setTasks(updatedTasks)
      })
      .catch((error) => console.log(error))
  }

  const handleToggleTimer = (id, isTimerRunning) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = {
          ...task,
          isTimerRunning: !isTimerRunning,
          modified_at: new Date().toISOString(),
        }
        if (updatedTask.isTimerRunning) {
          updatedTask.timerInterval = setInterval(() => {
            if (updatedTask.timeLeft <= 0) {
              clearInterval(updatedTask.timerInterval)
              updatedTask.isTimerRunning = false
              fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTask),
              })
                .then((response) => response.json())
                .then(() => {
                  setTasks(updatedTasks)
                })
                .catch((error) => console.log(error))
            } else {
              updatedTask.timeLeft -= 1
              setTasks((prevTasks) => {
                const updatedTasks = prevTasks.map((prevTask) =>
                  prevTask.id === updatedTask.id ? updatedTask : prevTask
                )
                return updatedTasks
              })
            }
          }, 1000)
        } else {
          clearInterval(updatedTask.timerInterval)
          fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
          })
            .then((response) => response.json())
            .then(() => {
              setTasks(updatedTasks)
            })
            .catch((error) => console.log(error))
        }
        return updatedTask
      }
      return task
    })
  }

  useEffect(() => {
    getUser()
    getTasks()
  }, [])

  const sortedTasks = [...tasks].sort((a, b) => b.id - a.id)

  return (
    <div className='mt-12'>
      <div className='container mx-auto w-full'>
        <div className='flex flex-wrap items-stretch'>
          <div className=' flex w-full items-center justify-around rounded-md bg-gray-200 lg:block lg:w-1/5'>
            <div className='p-4 lg:mb-4'>
              <h1 className='text-3xl font-bold text-[#2d2d75]'>TRACKEE</h1>
              <p>Stay on Track, Every Step of the Way!</p>
            </div>
            <Profile user={user} />
          </div>
          <div className='w-full lg:w-4/5'>
            <div className='time-sheet rounded-md bg-white p-4 text-[#242424] lg:ml-4 lg:pl-6 lg:pr-4'>
              <p className='mb-4 mt-2 border-black text-2xl font-bold text-[#1D204B]'>
                Add a New Task:
              </p>
              <TaskForm onSubmit={handleOnSubmit} />
              <p className='mb-4 mt-9 border-black text-2xl font-bold text-[#1D204B]'>
                Entries: {tasks.length}
              </p>
              <div className='max-h-[45vh] overflow-y-scroll'>
                {sortedTasks.length > 0 ? (
                  tasks.map((task, index) => {
                    return (
                      <div key={index}>
                        <TaskCard
                          task={task}
                          onToggleTimer={handleToggleTimer}
                          onDelete={handleDelete}
                        />
                      </div>
                    )
                  })
                ) : (
                  <div className='empty-tasks'>
                    <EmptyTask />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
