import { BiBriefcase } from "react-icons/bi";
import { FaLaptopCode, FaRegIdCard } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { Link } from "react-router";

const tools = [
  {
    icon: FaLaptopCode,
    title: "Modern Development",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    icon: FaRegIdCard,
    title: "Brand Identity",
    description:
      "Id eros pellentesque facilisi id mollis faucibus commodo enim.",
  },
  {
    icon: GrLineChart,
    title: "Growth & Analytics",
    description: "Nunc, pellentesque velit malesuada non massa arcu.",
  },
  {
    icon: BiBriefcase,
    title: "Business Solutions",
    description:
      "Imperdiet purus pellentesque sit mi nibh sit integer faucibus.",
  },
];

const ToolsSection = () => {
  return (
    <section className="bg-gray-50 overflow-x-hidden">
      <div className="max-w-screen-2xl container mx-auto py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            The tools you need
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            All-in-One Solution for Your Projects
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base lg:text-lg">
            Everything you need to plan, build and grow, in one place.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10 sm:mt-14 lg:mt-16">
          {tools.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center gap-5 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* icon badge */}
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300">
                <Icon className="text-3xl sm:text-4xl" />
              </div>

              {/* text */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            to="#"
            className="inline-block w-full sm:w-auto px-8 py-3 rounded-lg bg-pri text-white font-medium shadow-md hover:shadow-lg hover:bg-blue-800 transition-all duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
