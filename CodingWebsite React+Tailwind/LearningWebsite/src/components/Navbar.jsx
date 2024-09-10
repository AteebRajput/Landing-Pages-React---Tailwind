import { GrLanguage } from "react-icons/gr";
import { HiXMark } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className='sticky top-0 py-3 w-full z-50 backdrop-blur-lg border-b border-sky-800/80 bg-gradient-to-r bg-white '>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-between text-center'>
            <div className='flex text-center flex-shrink-0'>
              <h1 className='text-4xl font-bold text-white tracking-tight'>
                <span className='bg-gradient-to-r from-blue-400 to-blue-900 text-transparent bg-clip-text'>
                  Easy Learning
                </span>
              </h1>
            </div>
            <div>
              <ul className='hidden lg:flex items-center ml-12 mt-2 space-x-12'>
                {navItems.map((item, index) => (
                  <li key={index} className='text-black text-xl font-semibold hover:text-sky-800 transition duration-200 ease-in-out hover:underline'>
                    <a href={item.path}>{item.link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden text-xl space-x-8  items-center font-semibold lg:flex">
              <a href="/" className=" lg:flex items-center  hover:text-blue-600 bg-clip-text ">
                <GrLanguage /> <span className="ml-2">Language</span>
              </a>
              <button className="bg-gradient-to-r from-blue-400 to-blue-700 py-2 px-3 rounded-lg transition-all duration-300 hover:text-white hover:bg-indigo-600">Sign up</button>
            </div>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="flex pt-1 text-5xl items-center justify-center border-gray-800">
                {menuOpen ? (
                  <HiXMark size={35} />
                ) : (
                  <AiOutlineMenu size={35} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed w-full z-10 bg-gradient-to-r from-sky-300 to-sky-600 bg-opacity-90 flex flex-col items-center justify-center transition-transform transform ${menuOpen ? 'block  ' : 'hidden'} lg:hidden `}>
        <ul className="space-y-4 pb-5">
          {navItems.map((item, index) => (
            <li key={index} className='text-black text-xl font-semibold hover:text-sky-800 transition duration-200 ease-in-out list-none'>
              <a href={item.path}>{item.link}</a>
            </li>
          ))}
        </ul>
        <div className="w-full text-xl space-x-8 flex items-center justify-center pb-4 font-semibold ">
              <a href="/" className=" flex items-center border py-2 px-4  rounded-lg hover:text-secondary bg-clip-text">
                <GrLanguage /> <span className="ml-2">Language</span>
              </a>
              <button className="bg-gradient-to-r from-blue-400 to-blue-800 bg-opacity-90 py-2 px-3 rounded-lg transition-all duration-300 hover:text-white hover:bg-indigo-600">Sign up</button>
            </div>
      </div>
    </>
  );
};

export default Navbar;
