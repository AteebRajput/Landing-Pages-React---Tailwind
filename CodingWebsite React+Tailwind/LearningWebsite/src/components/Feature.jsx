import SourceCodeImg from "../assets/source_code.svg";
import learning from "../assets/learning.svg";
import onlineLearning from "../assets/online_learning.svg";

const Feature = () => {
  return (
    <>
      <div className="my-24 md:px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="lg:w-1/4 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-3">Why we are better than others</h3>
            <p className="text-lg text-neutral-500">
              We go beyond the ordinary by providing an exceptional learning experience. Here's why we're ahead of the competition:
            </p>
          </div>
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-[25px] h-[350px] shadow-lg p-8 flex items-center justify-center cursor-pointer hover:shadow-2xl hover:translate-y-2 transition-transform">
              <div className="text-center">
                <img src={SourceCodeImg} alt="Source Code Image" width={250} height={150} />
                <h5 className="text-3xl font-semibold mt-5">Source Code</h5>
              </div>
            </div>

            {/* Card 2 (Middle Card) */}
            <div className="bg-gray-50 rounded-[25px] h-[350px] shadow-lg p-8 flex items-center justify-center cursor-pointer hover:shadow-2xl hover:translate-y-2 transition-transform mt-10">
              <div className="text-center">
                <img src={learning} alt="Learning Image" width={250} height={150} />
                <h5 className="text-3xl font-semibold mt-5">Learning</h5>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-[25px] h-[350px] shadow-lg p-8 flex items-center justify-center cursor-pointer hover:shadow-2xl hover:translate-y-2 transition-transform">
              <div className="text-center">
                <img src={onlineLearning} alt="Online Learning Image" width={250} height={150} />
                <h5 className="text-3xl font-semibold mt-5">Online Learning</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
