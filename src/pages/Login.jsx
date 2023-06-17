import logo from './../assets/images/logo.png'
import employees from './../assets/images/employees.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Mockup for authentication only
  const handleLogin = (event) => {
    if (username === 'admin' && password === 'password') {
    } else {
      event.preventDefault()
    }
  }
  return (
    <div>
      <div>
        <div className='xs:justify-center xs:flex-col flex h-screen items-center md:flex-row md:justify-evenly lg:flex-row lg:justify-evenly'>
          <div className='xs:gap-0 mt-[20px] flex flex-col items-center justify-center md:gap-16 lg:w-5/12 lg:gap-16'>
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
          <div className='xs:w-[90%] xs:h-[70%] xs:justify-center mt-[20px] flex flex-col items-center gap-14 rounded-2xl bg-white px-[20px] py-[50px] drop-shadow-md md:h-[50%] md:w-5/12 lg:h-[50%] lg:w-4/12'>
            <div className='flex flex-col items-center'>
              <p className='text-center text-3xl font-normal text-[#415381]'>
                Welcome Back!
              </p>
              <p className='text-center text-[16px] font-light text-gray-500'>
                Log In To Continue
              </p>
            </div>
            <div>
              <form className='flex w-full max-w-sm flex-col items-center'>
                <div className='mb-6 md:flex md:items-center'>
                  <div className='md:w-1/3'>
                    <label
                      className='mb-1 block text-left font-normal text-gray-500 md:mb-0 md:text-left'
                      htmlFor='username'
                    >
                      Username
                    </label>
                  </div>
                  <div className='md:w-2/3'>
                    <input
                      className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-[#aac7fd] focus:bg-white focus:outline-none'
                      id='username'
                      type='text'
                      placeholder='Juan123'
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className='md:flex md:items-center'>
                  <div className='md:w-1/3'>
                    <label
                      className='mb-1 block text-left font-normal text-gray-500 md:mb-0 md:text-left'
                      htmlFor='password'
                    >
                      Password
                    </label>
                  </div>
                  <div className='md:w-2/3'>
                    <input
                      className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-[#aac7fd] focus:bg-white focus:outline-none'
                      id='password'
                      type='password'
                      placeholder='*********'
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className='mb-6 mt-2 w-full text-right'>
                  <a
                    className='text-sm text-[#90b5fb]'
                    href='/'
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className='md:flex md:items-center'>
                  {/* <div className="md:w-1/3"></div> */}
                  <div className='md:w-full'>
                    <button
                      className='focus:shadow-outline w-[150px] rounded bg-[#6492fe] px-4 py-2 font-normal text-white shadow hover:bg-[#5170ba] focus:outline-none'
                      type='button'
                    >
                      <Link
                        to='/'
                        onClick={handleLogin}
                      >
                        LOG IN
                      </Link>
                    </button>
                  </div>
                </div>
              </form>
              <hr className='mt-[40px]' />
              <div className='mt-[30px] flex justify-center gap-[5px] text-sm font-light'>
                <p>Don't have an account?</p>
                <Link
                  className='text-[#ee6077]'
                  to='/register'
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
