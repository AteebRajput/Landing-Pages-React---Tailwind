
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";
const Pricing = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl sm:text-5xl lg:text-7xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r text-xl mb-2 ml-2 text-orange-500 to-orange-800 text-transparent bg-clip-text">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-xl text-neutral-500 tracking-tight">
                  /Month
                </span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 border border-neutral-600 rounded-lg mt-12
                 hover:bg-gradient-to-r from-orange-500 to-orange-800 transition duration-500"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
