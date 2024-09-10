import homeImg from '../assets/home-img.svg'

const Home = () => {
  return (
    <>
    <div className="w-full md:px-12 p-4 max-w-screen-2xl mx-auto mt-10">
        <div className='bg-gradient-to-r from-sky-300 to-sky-800 rounded-xl rounded-br-[80px] md:py-9 px-9 p-4 sm:rounded-br-[180px]'>
            <div className='flex flex-col-reverse md:flex-row justify-between gap-10 items-center' >
                <div className="md:w-3/5 ">
                    <h2 className='md: text-7xl font-bold text-white mb-6 leading-tight'>Develop your skills without deligence</h2>
                    <p className='text-[#EBEBEB] text-2xl mb-3'>
                    Learn from industry experts and earn globally recognized certifications. Take the first step to boost your career with the right skillset.
                    </p>
                    <div className='flex space-x-6'>
                        <button className='py-2 px-4 font-semibold text-white text-2xl rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 hover:from-sky-800 hover:text-white '>Get Started</button>
                        <button className='py-2 px-4 font-semibold text-white text-2xl rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 hover:from-sky-800 hover:text-white'>Discount</button>
                        
                    </div>
                </div>
                <div>
                        <img className='h-[350px]' src={homeImg} alt="The Educational image" />
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
