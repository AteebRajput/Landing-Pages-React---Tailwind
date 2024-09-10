import homeImg from '../assets/learning.svg';

const NewsLetter = () => {
  return (
    <>
      <div className="w-full md:px-12 p-4 max-w-screen-2xl mx-auto mt-10">
        <div className="bg-gradient-to-r from-sky-300 to-sky-800 rounded-xl rounded-br-[80px] md:py-9 px-9 p-4 sm:rounded-br-[180px]">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-10 items-center">
            <div className="md:w-3/5">
              <h2 className="md:text-7xl text-5xl font-bold text-white mb-6 leading-tight">
                Unlock a World of Learning Opportunities
              </h2>
              <p className="text-[#EBEBEB] text-2xl mb-3">
                Join our learning community and stay up-to-date with the latest courses, educational resources, and special offers designed to help you reach your full potential. Expand your knowledge with expert-led insights and more.
              </p>
              <div className="flex space-x-6">
                <button className="py-2 px-4 mt-4 font-semibold text-white text-2xl rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 hover:from-sky-800 hover:text-white">
                  Start Learning
                </button>
                
              </div>
            </div>
            <div>
              <img className="h-[300px]" src={homeImg} alt="Educational resources" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
