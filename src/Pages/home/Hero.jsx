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
    <div className="bg-colorBG overflow-x-hidden">
  <div className="max-w-screen-2xl container mx-auto py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-col lg:flex-row gap-10 lg:gap-12">
    {/* left side */}
    <div className="w-full lg:w-1/2 space-y-5 sm:space-y-6 lg:space-y-10 text-center lg:text-left">
      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
        Creative Web Design For Businesses
      </h2>
      <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
        Unlock your design skills to create beautiful websites and apps with
        a poweful and easy-to-use tool.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
        <Link
          to="/pricing"
          className="btn w-full sm:w-auto border bg-pri hover:bg-blue-800 transition-all text-white flex items-center justify-center gap-2"
        >
          Get Started <FaLongArrowAltRight />
        </Link>
        <Link
          to="/login"
          className="btn w-full sm:w-auto hover:bg-white border-2 border-blue-600 text-blue-600"
        >
          Contact Us
        </Link>
      </div>
    </div>

    {/* Right side */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
      <div className="relative group w-full max-w-md sm:max-w-lg lg:max-w-full">
        <img
          src={bannerImg}
          alt="banner image"
          className="w-full h-auto object-contain"
        />
        <button
          onClick={openModal}
          className="absolute inset-0 flex items-center justify-center group-hover:opacity-75 transition z-0"
        >
          <FaRegCirclePlay className="text-white text-4xl sm:text-5xl hover:text-red-400" />
        </button>
      </div>
    </div>

    {/* Modal show */}
    {showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
        <div className="bg-white p-3 sm:p-5 shadow-lg max-w-2xl w-full rounded-md relative">
          <button
            onClick={closeModal}
            className="text-2xl rounded-full px-2 hover:bg-gray-900 cursor-pointer bg-black text-white absolute top-2 right-2 sm:top-3 sm:right-3 shadow-md"
          >
            {" "}
            &times;
          </button>
          <iframe
            className="w-full aspect-video mt-8 sm:mt-0"
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
