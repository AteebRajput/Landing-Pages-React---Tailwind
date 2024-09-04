
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const WorkflowSection = () => {
  return (
    <>
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-7xl text-center mt-6 tracking-wide'>
            Accelarate your {" "}
            <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>
                working flow.
            </span>
        </h2>
        <div className=' flex flex-wrap justify-center'>
            <div className=' flex w-full p-2 lg:w-1/2'>
                <img src={codeImg} alt="Error in loading image" />
            </div>
            <div className=' w-full pt-12 lg:w-1/2'>
                {
                    checklistItems.map((item, index) => (
                        <div key={index} className='flex  mb-12'>
                            <div className='text-blue-300 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center text-center rounded-full'>
                                <CheckCircle2 />
                            </div>
                            <div>
                            <h5 className='text-xl mt-1 mb-2'>
                                {item.title}
                            </h5>
                            <p className='text-md text-neutral-500 '>
                                {item.description}
                            </p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default WorkflowSection
