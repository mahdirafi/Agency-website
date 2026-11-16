import { BiBriefcase } from "react-icons/bi";
import { FaLaptopCode, FaRegIdCard } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { Link } from "react-router";

const ToolsSection = () => {
  return (
    <div className="max-h-screen-2xl container mx-auto py-20 px-5 ">
      <div className="text-center my-10">
        <h1 className="font-bold text-2xl text-gray-800 mb-4">
          The tools you need
        </h1>
        <p className="lg:text-5xl text-3xl md:text-4xl font-bold">
          All-in-One Solution for Your Projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <div className="text-center p-4 shadow-lg rounded  border border-gray-200 space-y-3 hover:-translate-y-2 transition-all duration-300 ">
          <FaLaptopCode className="text-9xl text-gray-300 mx-auto" />
          <p className="text-gray-700 ">
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </p>
        </div>
        <div className="text-center p-4 shadow-lg rounded  border border-gray-200 space-y-3 hover:-translate-y-2 transition-all duration-300 ">
          <FaRegIdCard  className="text-9xl text-gray-300 mx-auto" />
          <p className="text-gray-700 ">
            Id eros pellentesque facilisi id mollis faucibus commodo enim.
          </p>
        </div>
        <div className="text-center p-4 shadow-lg rounded  border border-gray-200 space-y-3 hover:-translate-y-2 transition-all duration-300 ">
          <GrLineChart className="text-9xl text-gray-300 mx-auto" />
          <p className="text-gray-700 ">
            Nunc, pellentesque velit malesuada non massa arcu.{" "}
          </p>
        </div>
        <div className="text-center p-4 shadow-lg rounded  border border-gray-200 space-y-3 hover:-translate-y-2 transition-all duration-300 ">
          <BiBriefcase className="text-9xl text-gray-300 mx-auto" />
          <p className="text-gray-700 ">
            Imperdiet purus pellentesque sit mi nibh sit integer faucibus.{" "}
          </p>
        </div>
      </div>
      <div className="mt-18 text-center">
        <Link to="#" className=" px-4 py-3 shadow-md rounded cursor-pointer border bg-pri text-white">
            Explore More
          </Link>
      </div>
    </div>
  );
};

export default ToolsSection;
