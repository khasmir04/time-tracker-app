import Profile from '../components/Profile'

const tasks = []

const user = {
  id: 'user1',
  firstName: 'trafalgar',
  lastName: 'law',
  position: 'middle software engineer',
}

const Home = () => {
  return (
    <div className='mt-12'>
      <div className='container mx-auto w-full bg-white'>
        <div className='flex flex-wrap items-stretch'>
          <div className=' flex w-full items-center justify-around rounded-lg bg-[#dedede] lg:block lg:w-1/5'>
            <div className='p-4 lg:mb-4'>
              <h1 className='text-3xl font-bold text-[#2d2d75]'>TRACKEE</h1>
              <p>Stay on Track, Every Step of the Way!</p>
            </div>
            <Profile user={user} />
          </div>
          <div className='w-full lg:w-4/5'>
            <div className='time-sheet px-4 text-[#242424] lg:pl-6 lg:pr-4'>
              <p className='py-3 text-2xl'>Time sheet</p>
              <div className='max-h-[60vh] overflow-y-scroll'>
                {tasks.length > 0 ? (
                  tasks.map((task, index) => {
                    return (
                      <div key={index}>
                        <>Tasks goes here</>
                      </div>
                    )
                  })
                ) : (
                  <div className='empty-tasks min-h-[300px]'>
                    There are no available tasks
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
