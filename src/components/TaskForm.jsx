import React, { useState } from 'react'

// Static list of projects
const projects = [
  'Project 1',
  'Project 2',
  'Project 3',
  'Project 4',
  'Project 5',
]

// TODO: Add option for important tasks
const TaskForm = ({ onSubmit }) => {
  const [hours, setHours] = useState('')
  const [description, setDescription] = useState('')
  const [project, setProject] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ hours, description, project })
    setHours('')
    setDescription('')
    setProject('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'
    >
      <div className='mb-4'>
        <label
          htmlFor='project'
          className='mb-2 block text-sm font-bold uppercase tracking-wide text-gray-700'
        >
          Project:
          <select
            value={project}
            name='project'
            required
            className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 text-base leading-tight  text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
            onChange={(e) => setProject(e.target.value)}
          >
            <option value=''>Select a project</option>
            {projects.map((projectName) => (
              <option
                key={projectName}
                value={projectName}
              >
                {projectName}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='hours'
          className='mb-2 block text-sm font-bold uppercase tracking-wide text-gray-700'
        >
          Hours:
          <input
            type='number'
            name='hours'
            value={hours}
            placeholder='0'
            min={1}
            required
            className='focus:shadow-outline  w-full appearance-none rounded border bg-gray-200 px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none'
            onChange={(e) => setHours(e.target.value)}
          />
        </label>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='description'
          className='mb-2 block text-sm font-bold uppercase tracking-wide text-gray-700'
        >
          Task Description:
          <input
            type='text'
            value={description}
            required
            className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 text-base leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button
        type='submit'
        className='ml-auto rounded-md bg-[#00A5CF] px-5 py-2 text-xl text-white hover:bg-opacity-60'
      >
        Add Task
      </button>
    </form>
  )
}

export default TaskForm
