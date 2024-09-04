
import { Menu, X } from 'lucide-react'
import { navItems } from '../constants'
import logo from '../assets/logo.png'
import { useState } from 'react'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () =>{
    setIsOpen(!isOpen)
  }
  return (
    
      <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className="container px-4 mx-auto relative text-sm">
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <img className='w-10 h-10 mr-2'  src={logo} alt="logo" />
            <span className='text-xl tracking-tight'>VirtualR</span>
          </div>
          <ul className='hidden lg:flex items-center ml-12 space-x-12'>
            {
              navItems.map((item, index) =>(
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))
            }
          </ul>
          <div className='hidden lg:flex justify-center items-center space-x-12'>
            <a className='py-2 px-3 border rounded-md ' href="#">
              sing In
            </a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to bg-orange-900 py-2 px-3 rounded-md'>
              Creatr Account
               </a>

          </div>
          <div className='lg:hidden md:flex flex-col items-center'>
              <button onClick={toggleIsOpen} > 
              {isOpen ? <X />: <Menu />}
              </button>
          </div>

        </div>
        {isOpen && (
          <div className='fixed right-0 z-20 flex justify-center flex-col items-center p-12 w-full bg-neutral-900 lg:hidden'>
            <ul>
              
                {
                  navItems.map((item, index) =>(
                    <li key={index} className='p-4'>
                      <a href={item.href}>{item.label}</a>

                    </li>
                  ))
                }
              
            </ul>
            <div className='flex items-center space-x-6'>
              <a className='py-2 px-3 border rounded-md ' href="#">Sign In</a>
              <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to bg-orange-900'>Create Account </a>

            </div>
          </div>
        )}
      </div>

      </nav>
    
  )
}

export default Navbar
