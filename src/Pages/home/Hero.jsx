import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router";
import bannerImg from "../../assets/banner.png";
import { useState } from "react";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="bg-colorBG">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5 flex items-center justify-between flex-col lg:flex-row">
        {/* left side */}
        <div className="space-y-12 lg:w-1/2 lg:text-left">
          <h2 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold text-gray-800 ">
            Creative Web Design For Businesses
          </h2>
          <p className="text-gray-500">
            Unlock your design skills to create beautiful websites and apps with
            a poweful and easy-to-use tool.
          </p>
          <div className="navbar-end space-x-4 flex flex-col md:flex-row lg:justify-start gap-3 justify-start">
            <Link
              to="/pricing"
              className="btn   border bg-pri hover:bg-blue-800 transition-all text-white flex"
            >
              Get Started <FaLongArrowAltRight />
            </Link>
            <Link
              to="/login"
              className="btn hover:bg-white border-2 border-blue-600 text-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* Right side */}
        <div className="lg:w-1/2 mt-20 lg:mt-0 flex justify-end relative">
          <div className="relative group">
            <img src={bannerImg} alt="banner image" />
            <button
              onClick={openModal}
              className="absolute inset-0 flex items-center justify-center group-hover:opacity-75 transition z-0"
            >
              <FaRegCirclePlay className="text-white text-5xl hover:text-red-400" />
            </button>
          </div>
        </div>
        {/* Modal show */}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className="bg-white p-5 shadow-lg max-w-2xl w-full rounded-md relative">
              <button
                onClick={closeModal}
                className="text-2xl rounded-full px-2 hover:bg-gray-900 cursor-pointer bg-black text-white absolute top-3 right-3 shadow-md"
              >
                {" "}
                &times;
              </button>
              <iframe
                className="w-full aspect-video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gFicda3xgKc?si=de2dVmOdROxyTqE6"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
