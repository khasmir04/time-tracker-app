import { FaClock, FaPauseCircle, FaPlayCircle, FaTrash } from 'react-icons/fa'
import { VscTarget } from 'react-icons/vsc'
import formatTime, { formatISOtoDate } from '../utils/time'

const TaskCard = ({ task, onToggleTimer, onDelete }) => {
  const cardClass = task.important ? 'bg-[#FE5F7E]' : 'bg-[#56C2E6]'

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(task.modified_at))

  return (
    <div className='mb-3 w-full shadow-md'>
      <div className={` rounded-lg ${cardClass}  pl-3 `}>
        <div className='flex min-h-[80px] rounded-lg bg-[#2d3a5c] p-6 text-white'>
          <div className='w-3/4'>
            <div>
              <p className='text-2xl'>{task.project}</p>
              <p className='text-xl text-[#9f9d9d]'>{task.description}</p>
              <p className='mb-4 italic'>{`By: ${task.user?.firstName} ${task.user?.lastName}`}</p>
              <p className='my-2 text-2xl'>
                <span className='flex items-center gap-2 text-base'>
                  <VscTarget size={23} /> Target:{' '}
                </span>
                <span className='ml-6'>{`${task.hours} HRS`}</span>
              </p>
              <p className='my-2 text-2xl'>
                <span className='flex items-center gap-2 text-base'>
                  <FaClock size={20} />
                  Remaining:{' '}
                </span>
                <span className='ml-6'>{formatTime(task.timeLeft)}</span>
              </p>
              <p className='mt-4 text-gray-400'>
                Last modified: {formattedTime}
              </p>
            </div>
          </div>
          <div className='w-1/4'>
            <div className='flex h-full p-4'>
              {!task.isTimerRunning && (
                <FaTrash
                  size={50}
                  className='my-auto ml-auto cursor-pointer hover:opacity-50'
                  onClick={() => onDelete(task.id, task.isTimerRunning)}
                />
              )}
              {task.isTimerRunning ? (
                <FaPauseCircle
                  size={50}
                  className='my-auto ml-auto cursor-pointer hover:opacity-50'
                  onClick={() => onToggleTimer(task.id, task.isTimerRunning)}
                />
              ) : (
                <FaPlayCircle
                  size={50}
                  className='my-auto ml-auto cursor-pointer hover:opacity-50'
                  onClick={() => onToggleTimer(task.id, task.isTimerRunning)}
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
