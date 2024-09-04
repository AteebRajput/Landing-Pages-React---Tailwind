
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div>
      <div className='flex flex-col items-center mt-6 lg:mt-15'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl tracking-wide text-center'>
                VirtualR build tools 
                <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>
                 { " "}for developers
                </span>

        </h1>
        <p className='mt-10 text-lg max-w-4xl text-neutral-500'>
            Build, deploy, and manage your applications with ease using our suite of tools.
        </p>
        <div className='flex justify-center space-x-6 mt-10'>
            <a className='bg-gradient-to-r from-orange-500 to-orange-900 py-2 px-4 rounded-md' href="">Start for free</a>
            <a className=' py-2 px-4 rounded-md border' href="">Documentation</a>
        </div>
        <div className='flex justify-center mt-10 mx-4'>
            <video src={video1} autoPlay muted loop className='rounded-lg w-1/2 border border-orange-500 shadow-orange-500 mx-4 my-2'>
            
            Your browser doesnot support video tag
            </video>
            <video src={video2} autoPlay muted loop className='rounded-lg w-1/2 border border-orange-500 shadow-orange-500 mx-4 my-2'>
            
            Your browser doesnot support video tag
            </video>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
