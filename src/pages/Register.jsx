import logo from './../assets/images/logo.png'
import employees from './../assets/images/employees.png'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div>
        <div className='xs:justify-center xs:flex-col flex h-screen items-center md:flex-row md:justify-evenly lg:flex-row lg:justify-evenly'>
          <div className='xs:gap-0 mt-[20px] hidden flex-col items-center justify-center md:gap-16 lg:flex lg:w-5/12 lg:gap-16'>
            <div className='w-[150px]'>
              <img
                src={logo}
                alt='Logo'
              />
            </div>
            <div>
              <img
                className='xs:hidden h-[300px] w-[400px] md:block'
                src={employees}
                alt='Employees holding clock'
              />
            </div>
          </div>
          <div className='xs:w-[90%] xs:h-[70%] xs:justify-center mx-12 mt-[20px]  flex flex-1 flex-col items-center gap-14 rounded-2xl bg-white px-[30px] py-[50px] drop-shadow-md md:h-[60%] md:w-5/12 md:flex-none lg:mx-0 lg:h-[60%] lg:w-5/12'>
            <div className='flex flex-col items-center'>
              <p className='text-center text-3xl font-normal text-[#415381]'>
                Create New Account
              </p>
              <div className='mt-1 flex justify-center gap-[5px] text-sm font-light'>
                <p>Already have an account?</p>
                <Link
                  className='text-[#ee6077]'
                  to='/login'
                >
                  Log In
                </Link>
              </div>
            </div>
            <div>
              <form className='w-full max-w-lg'>
                <div className='-mx-3 mb-6 flex flex-wrap'>
                  <div className='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
                    <label
                      className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                      htmlFor='first-name'
                    >
                      First Name <span className='text-red-600'>*</span>
                    </label>
                    <input
                      className='mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-[#aac7fd] focus:bg-white focus:outline-none'
                      id='first-name'
                      type='text'
                      placeholder='Juan'
                      required
                    />
                  </div>
                  <div className='w-full px-3 md:w-1/2'>
                    <label
                      className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                      htmlFor='last-name'
                    >
                      Last Name <span className='text-red-600'>*</span>
                    </label>
                    <input
                      className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-[#aac7fd] focus:bg-white focus:outline-none'
                      id='last-name'
                      type='text'
                      placeholder='Dela Cruz'
                      required
                    />
                  </div>
                </div>
                <div className='-mx-3 mb-6 flex flex-wrap'>
                  <div className='w-full px-3'>
                    <label
                      className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                      htmlFor='position'
                    >
                      Position <span className='text-red-600'>*</span>
                    </label>
                    <input
                      className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-[#aac7fd] focus:bg-white focus:outline-none'
                      id='position'
                      type='text'
                      placeholder='Juan123'
                      required
                    />
                  </div>
                </div>
                <div className='-mx-3 mb-6 flex flex-wrap'>
                  <div className='w-full px-3'>
                    <label
                      className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                      htmlFor='username'
                    >
                      Username <span className='text-red-600'>*</span>
                    </label>
                    <input
                      className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-[#aac7fd] focus:bg-white focus:outline-none'
                      id='username'
                      type='text'
                      placeholder='Juan123'
                      required
                    />
                  </div>
                </div>
                <div className='-mx-3 mb-6 flex flex-wrap'>
                  <div className='w-full px-3'>
                    <label
                      className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                      htmlFor='password'
                    >
                      Password <span className='text-red-600'>*</span>
                    </label>
                    <input
                      className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-[#aac7fd] focus:bg-white focus:outline-none'
                      id='password'
                      type='password'
                      placeholder='******************'
                      required
                    />
                    <p className='text-xs italic text-gray-600'>
                      Make it as long and as crazy as you'd like
                    </p>
                  </div>
                </div>
                <div className='text-center md:flex md:items-center'>
                  <div className='md:w-full'>
                    <button
                      className='focus:shadow-outline h-[50px] w-[200px] rounded bg-[#6492fe] px-4 py-2 font-normal text-white shadow hover:bg-[#5170ba] focus:outline-none'
                      type='button'
                    >
                      <Link to='/login'> REGISTER</Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
