import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const TaskCard = ({ task }) => {
  const cardClass = task.important ? 'bg-[#FE5F7E]' : 'bg-[#56C2E6]'
  return (
    <div className='mb-3 w-full shadow-md'>
      <div className={` rounded-lg ${cardClass}  pl-3 `}>
        <div className='flex min-h-[80px] rounded-lg bg-[#2d3a5c] p-6 text-white'>
          <div className='w-3/4'>
            <div>
              <p>{task.project}</p>
              <p className='my-2 text-2xl'>{`${task.hours} HRS`}</p>
              <p className='text-sm text-[#9f9d9d]'>{task.description}</p>
              <i>{`By: ${task.user.firstName} ${task.user.lastName}`}</i>
            </div>
          </div>
          <div className='w-1/4'>
            <div className='h-full p-4'>
              {task.paused ? (
                <FaPlayCircle
                  size={50}
                  className='my-auto ml-auto h-full cursor-pointer hover:opacity-50'
                />
              ) : (
                <FaPauseCircle
                  size={50}
                  className='my-auto ml-auto h-full cursor-pointer hover:opacity-50'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
