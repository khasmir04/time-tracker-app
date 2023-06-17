import { FaUserCircle } from 'react-icons/fa'
import capitalize from '../utils/text'
import { Link } from 'react-router-dom'

const Profile = ({ user }) => {
  const { firstName, lastName, position, image } = user
  return (
    <div className='user-profile flex p-4 text-[#fff]'>
      <div className='flex flex-1 flex-wrap items-center gap-4 rounded-xl bg-[#5846E9] p-5 shadow-lg lg:flex-col lg:items-start  lg:pb-6'>
        <div>
          {image ? (
            <img
              src={image}
              className='logo react w-[60px] rounded-full py-3'
              alt='React logo'
            />
          ) : (
            <FaUserCircle size={60} />
          )}
        </div>
        <div>
          <div className='flex flex-wrap gap-2 lg:block'>
            <p className='text-left text-3xl'>
              {firstName ? capitalize(firstName) : 'First name'}
            </p>
            <p className='text-3xl'>
              {lastName ? capitalize(lastName) : 'Last name'}
            </p>
          </div>
          <p className='text-xl text-[#d2d1d1]'>
            {position ? capitalize(position) : 'Position'}
          </p>
          <div className='flex justify-end'>
            <Link
              className='decoration-none mt-12 rounded-lg border-2 px-4 py-2 hover:no-underline hover:opacity-70'
              to='/login'
            >
              Log out
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
