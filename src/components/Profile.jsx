import { FaUserCircle } from 'react-icons/fa'

const Profile = ({ user }) => {
  const { firstName, lastName, position, image } = user
  return (
    <div className='user-profile flex p-4 text-[#fff]'>
      <div className='flex flex-1 flex-wrap items-center gap-4 rounded-xl bg-[#5846E9] p-5 shadow-lg lg:flex-col lg:items-start  lg:pb-14'>
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
            <p className='text-left text-3xl'>{firstName || 'First name'}</p>
            <p className='text-3xl'>{lastName || 'Last name'}</p>
          </div>
          <p className='text-xl text-[#d2d1d1]'>{position || 'Position'}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
