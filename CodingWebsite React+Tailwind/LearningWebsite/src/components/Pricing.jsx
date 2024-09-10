import { useState } from "react";

const Pricing = () => {
  const [yearlyPackage, setYearlyPackage] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description: "Perfect for individuals who are just starting their journey and want access to basic tools and resources.",
      features: [
        { feature: "Basic Support", available: true },
        { feature: "Access to All Resources", available: false },
        { feature: "Community Access", available: true },
        { feature: "Limited Analytics", available: false },
        { feature: "Email Support", available: true },
        { feature: "1 Project", available: true }
      ]
    },
    {
      name: "Pro",
      monthlyPrice: 49,
      yearlyPrice: 499,
      description: "Ideal for professionals looking for advanced features and resources to enhance their skills.",
      features: [
        { feature: "Priority Support", available: true },
        { feature: "Access to All Resources", available: true },
        { feature: "Community Access", available: true },
        { feature: "Advanced Analytics", available: true },
        { feature: "Chat Support", available: true },
        { feature: "5 Projects", available: true }
      ]
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      yearlyPrice: 999,
      description: "Tailored for large teams and businesses that need full access to all features and priority support.",
      features: [
        { feature: "24/7 Support", available: true },
        { feature: "Access to All Resources", available: true },
        { feature: "Community Access", available: true },
        { feature: "Full Analytics Suite", available: true },
        { feature: "Dedicated Account Manager", available: true },
        { feature: "Unlimited Projects", available: true }
      ]
    }
  ];

  return (
    <>
      <div className="md:px-14 p-4 max-w-s mx-auto mt-10 py-10">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-sky-400 to-blue-800 bg-clip-text text-transparent md:text-7xl text-5xl font-bold mb-2 ">Here are all our plans</h1>
          <p className="md:w-1/3 mx-auto mt-5 text-lg text-neutral-500 px-4">
            Whether you're just getting started or you're looking for a complete business solution, we have the right plan for you. Choose the package that best fits your needs.
          </p>
        </div>

        {/* Toggle switch */}
        <div className="mt-16 flex justify-center">
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <span className="font-semibold text-2xl mr-6">Monthly</span>
            <div className="relative">
              <input
                type="checkbox"
                id="toggle"
                className="hidden"
                checked={yearlyPackage}
                onChange={() => setYearlyPackage(!yearlyPackage)}
              />
              <div className="w-14 h-6 bg-gray-300 rounded-full shadow-inner"></div>
              <div
                className={`absolute top-0 w-6 h-6 bg-black rounded-full shadow-md transition-transform duration-300 ease-in-out ${
                  yearlyPackage ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span className="ml-6 font-semibold text-2xl">Yearly</span>
          </label>
        </div>

        {/* Packages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border py-10 md:px-6 px-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-3xl text-center font-bold tracking-wide text-blue-900">{pkg.name}</h3>
              <p className="text-lg text-center my-4 text-neutral-500 font-semibold">{pkg.description}</p>
              <p className="mt-5 text-center text-4xl font-bold text-blue-500">
                {yearlyPackage ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}{" "}
                <span className="text-base text-neutral-600 font-medium">
                  {yearlyPackage ? "/year" : "/month"}
                </span>
              </p>
              <ul className="mt-4 space-y-2 px-2">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-12 text-xl">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        feature.available ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                    <span className="text-lg text-neutral-700">{feature.feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center mt-8">
              <button className='py-2 px-4 font-semibold text-white text-2xl rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 hover:from-sky-800 hover:text-white '>Get Started</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
