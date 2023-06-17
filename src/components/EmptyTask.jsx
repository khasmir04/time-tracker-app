import { FaTasks } from 'react-icons/fa'

const EmptyTask = () => {
  return (
    <div className='flex min-h-[200px] items-center justify-center gap-4 rounded-md bg-gray-200 text-3xl text-gray-400'>
      <div>
        <FaTasks />
      </div>
      <div>No Tasks available</div>
    </div>
  )
}

export default EmptyTask
