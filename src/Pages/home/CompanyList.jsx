import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa";

const logos = [
  { icon: FaApple, name: "Apple" },
  { icon: FaGoogle, name: "Google" },
  { icon: FaAmazon, name: "Amazon" },
  { icon: FaMicrosoft, name: "Microsoft" },
  { icon: FaFacebook, name: "Facebook" },
];

const CompanyList = () => {
  return (
    <section className="bg-colorBG overflow-x-hidden">
      <div className="max-w-screen-2xl container mx-auto py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            You are in good company
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Bibendum amet at molestie mattis.
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
            eleifend ultricies purus iaculis.
          </p>
        </div>
        {/* one  */}
         <div className="relative mt-10 sm:mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
  <div className="flex w-max animate-scroll2">
    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
      <div
        key={index}
        aria-hidden={index >= logos.length}
        className="group flex items-center gap-3 mr-4 sm:mr-6 px-5 sm:px-7 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl text-gray-400 shadow-sm hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all duration-300"
      >
        <logo.icon className="text-2xl sm:text-3xl" title={logo.name} />
        <span className="text-base sm:text-lg font-semibold">
          {logo.name}
        </span>
      </div>
    ))}
  </div>
</div>

        {/* logo marquee */}
        <div className="relative mt-10 sm:mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                aria-hidden={index >= logos.length}
                className="group flex items-center gap-3 mr-4 sm:mr-6 px-5 sm:px-7 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl text-gray-400 shadow-sm hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <logo.icon className="text-2xl sm:text-3xl" title={logo.name} />
                <span className="text-base sm:text-lg font-semibold">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* logo marquee2 */}
       <div className="relative mt-10 sm:mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
  <div className="flex w-max animate-scroll2">
    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
      <div
        key={index}
        aria-hidden={index >= logos.length}
        className="group flex items-center gap-3 mr-4 sm:mr-6 px-5 sm:px-7 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl text-gray-400 shadow-sm hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all duration-300"
      >
        <logo.icon className="text-2xl sm:text-3xl" title={logo.name} />
        <span className="text-base sm:text-lg font-semibold">
          {logo.name}
        </span>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default CompanyList;