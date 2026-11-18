import { Link } from "react-router";
import { FaLongArrowAltLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        {/* 404 number */}
        <h1 className="bg-gradient-to-b from-[#0F62FE] to-[#A6C8FF] bg-clip-text text-8xl font-extrabold leading-none tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        {/* message */}
        <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Page not found
        </h2>
        <p className="mt-3 text-sm text-gray-600 sm:text-base">
          Sorry, the page you are looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            to="/"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0F62FE] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0043CE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F62FE] focus-visible:ring-offset-2 sm:w-auto sm:text-base"
          >
            <FaLongArrowAltLeft />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="w-full rounded-full border-2 border-[#0F62FE] px-6 py-2.5 text-center text-sm font-semibold text-[#0F62FE] transition-all duration-300 hover:bg-[#0F62FE] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F62FE] focus-visible:ring-offset-2 sm:w-auto sm:text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;