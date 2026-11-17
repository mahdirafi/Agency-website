import { useState } from "react";
import HeadingSection from "../../Components/HeadingSection";
import { IoCheckmarkSharp } from "react-icons/io5";

const pricingPlans = [
  {
    name: "Freelancer",
    monthlyPrice: 25,
    yearlyPrice: 250, // 25 * 12
    saves: "$25 USD per month, paid annually",
    features: [
      "1 Project",
      "Basic Support",
      "Access to all templates",
      "5GB Storage",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 65,
    yearlyPrice: 650, // 65 * 12
    saves: "$55 USD per month, paid annually",
    features: [
      "5 Projects",
      "Priority Support",
      "Access to all templates",
      "25GB Storage",
      "Advanced Analytics",
    ],
  },
  {
    name: "Agency",
    monthlyPrice: 95,
    yearlyPrice: 950, // 95 * 12
    saves: "$95 USD per month, paid annually",
    features: [
      "Unlimited Projects",
      "24/7 Support",
      "Access to all templates",
      "Unlimited Storage",
      "Custom Branding",
      "Team Collaboration",
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-colorBg">
      <div className="section-container">
        <HeadingSection
          heading="Choose Your Plan"
          subheading="Pricing"
          description="Our pricing Table are flexible and designed to fit your needs.Choose a plan that best for you."
        />

        {/* Toggle label section */}
        <div className="mb-12 flex justify-center sm:mb-16">
          <label className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#D0E2FF] bg-white px-4 py-2 shadow-sm">
            <span className="min-w-[110px] text-sm font-medium text-blue-800 sm:min-w-[130px] sm:text-base text-md font-semibold">
              {isYearly ? "Yearly Pricing" : "Monthly pricing"}
            </span>
            {/* toggle button */}
            <div className="relative">
              <input
                type="checkbox"
                name=""
                className="peer sr-only"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <div className="h-7 w-12 rounded-full bg-gray-300 transition-colors duration-300 peer-checked:bg-[#0F62FE] peer-focus-visible:ring-2 peer-focus-visible:ring-[#0F62FE] peer-focus-visible:ring-offset-2"></div>
              <div
                className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
                  isYearly ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>

        {/* pricing table */}
        <div className="mx-auto grid max-w-md grid-cols-1 items-stretch gap-8 md:max-w-4xl md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 lg:gap-0">
          {pricingPlans.map((plan, index) => {
            const isPopular = index === 1;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 ${
                  isPopular
                    ? "z-10 shadow-2xl shadow-[#001D6C]/20 md:col-span-2 md:mx-auto md:w-full md:max-w-md lg:col-span-1 lg:-mx-4 lg:-my-6 lg:max-w-none"
                    : "shadow-xl shadow-gray-300/60 hover:-translate-y-1"
                }`}
              >
                {/* curved header with price */}
                <div
                  className={`rounded-b-[50%/35%] px-6 pb-14 pt-10 text-center sm:px-8 ${
                    isPopular
                      ? "bg-gradient-to-b from-[#002D9C] to-[#0F62FE] text-white lg:pb-16 lg:pt-14"
                      : "bg-gray-100 text-[#0F62FE]"
                  }`}
                >
                  <h2 className="text-sm font-bold uppercase tracking-widest sm:text-base">
                    {plan.name}
                  </h2>

                  <div className="mt-6 flex items-start justify-center gap-1">
                    <span className="mt-1 text-2xl font-bold sm:text-3xl">
                      $
                    </span>
                    <span className="text-5xl font-extrabold leading-none tracking-tight sm:text-6xl">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                  </div>

                  <p
                    className={`mt-2 text-sm ${
                      isPopular ? "text-[#D0E2FF]" : "text-[#0F62FE]"
                    }`}
                  >
                    per {isYearly ? "year" : "month"}
                  </p>

                  <p
                    className={`mt-2 min-h-[20px] text-xs ${
                      isPopular ? "text-[#A6C8FF]" : "text-gray-500"
                    }`}
                  >
                    {isYearly ? plan.saves : ""}
                  </p>
                </div>

                {/* pricing features */}
                <div className="flex-1 px-6 pb-8 pt-8 sm:px-8">
                  <ul className="space-y-3 text-center">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-center gap-2 text-sm text-indigo-950/80 sm:text-base"
                      >
                        <IoCheckmarkSharp className="shrink-0 text-[#0F62FE]" />
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* pricing button */}
                <div className={`px-6 sm:px-8 ${isPopular ? "pb-10" : "pb-8"}`}>
                  <button
                    className={`mx-auto block cursor-pointer rounded-full px-8 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F62FE] focus-visible:ring-offset-2 sm:text-sm ${
                      isPopular
                        ? "bg-[#0F62FE] text-white shadow-lg hover:bg-[#0043CE]"
                        : "border border-[#0F62FE] text-[#0F62FE] hover:bg-[#0F62FE] hover:text-white"
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </div>

                {/* bottom bar (side cards only) */}
                {!isPopular && <div className="h-2 bg-[#0F62FE]"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;