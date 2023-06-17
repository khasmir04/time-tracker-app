import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl text-red-600'>Oops! This page does not exist</h1>
      <p className='text-2xl'>
        Click this{' '}
        <Link
          to='/'
          className='text-blue-600 underline'
        >
          link
        </Link>{' '}
        to go to Homepage
      </p>
    </div>
  )
}

export default NotFound
