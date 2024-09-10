import certificateImg from "../assets/certificate.svg";
import education from "../assets/educator.svg";

const About = () => {
  return (
    <>
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-28">
        {/* First Card */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="md:w-1/2">
            <img src={certificateImg} alt="" width={400} height={20} />
          </div>
          <div className="md:w-4/5">
            <h2 className="md:text-5xl leading-normal text-3xl mb-6 tracking-wide font-bold">
              We have been improving our product{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-900 text-transparent bg-clip-text leading-normal">
                for many years
              </span>
            </h2>
            <p className="text-lg mb-4 text-neutral-500 leading-[1.8]">
              Our continuous effort in refining our platform has allowed us to
              deliver the best user experience possible. We listen to feedback
              and constantly innovate to meet the needs of our users, ensuring
              that we stay ahead in providing quality service and features.
            </p>
            <button className="py-3 px-6 mt-4 font-semibold text-white text-2xl rounded-lg bg-gradient-to-r  from-blue-400 to-blue-800 hover:from-sky-700 hover:text-white">
              Get Started
            </button>
          </div>
        </div>

        {/* Second Card with New Content */}
        <div className="flex flex-col md:flex-row-reverse justify-between w-full items-center mt-28 gap-9">
          <div className="md:w-1/2">
            <img src={education} alt="" width={950} height={20} />
          </div>
          <div className="md:w-4/5">
            <h2 className="md:text-5xl leading-normal text-3xl mb-6 tracking-wide font-bold">
              Join us and enhance your skills{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-900 text-transparent bg-clip-text leading-normal">
                with the best resources
              </span>
            </h2>
            <p className="text-lg mb-4 text-neutral-500 leading-[1.8]">
              Whether you're just starting out or looking to advance your career, we provide the tools and guidance to help you succeed. Get access to top-notch courses and expert advice, all at your fingertips.
            </p>
            <button className="py-3 px-6 mt-4 font-semibold text-white text-2xl rounded-lg bg-gradient-to-r from-blue-400 to-blue-800 hover:from-sky-700 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
