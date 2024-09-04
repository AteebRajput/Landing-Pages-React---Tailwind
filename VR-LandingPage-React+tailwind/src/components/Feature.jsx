
import { features } from '../constants'
const Feature = () => {
  return (
    <>
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className='text-center' >
            <span className='bg-neutral-800 text-orange-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase'>
                Feature
            </span>
            <h2 className='text-3xl sm:text-5xl lg:text-7xl mt-20 tracking-wide'> 
                Easily build 
                <span className='bg-gradient-to-r text from-orange-500 to-orange-900 text-transparent bg-clip-text'>
                {" "}your code
                </span>
            </h2>
            <div className='flex flex-wrap mt-10 lg:mt-20'>
                {features.map((item,index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                        <div className='flex'>
                            <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full'>
                                {item.icon}
                            </div>
                            <div>
                                <h5 className='text-left mt-1 mb-4 text-xl'>{item.text}</h5>
                                <p className='text-left text-md p-2 mb-20 text-neutral-500'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Feature
