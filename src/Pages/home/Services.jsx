import { FcServices, FcSettings, FcTimeline, FcTodoList } from "react-icons/fc";
import HeadingSection from "../../Components/HeadingSection";
import { Link } from "react-router";

const services = [
  {
    icon: FcServices,
    title: "Web Development",
    description:
      "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris.",
  },
  {
    icon: FcTodoList,
    title: "Project Planning",
    description:
      "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris.",
  },
  {
    icon: FcTimeline,
    title: "Fast Delivery",
    description:
      "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris.",
  },
  {
    icon: FcSettings,
    title: "Maintenance & Support",
    description:
      "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 overflow-x-hidden">
      <div className="max-w-screen-2xl container mx-auto py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <HeadingSection
          subheading="Services"
          heading="I build fast, modern and scalable web apps for startups. Websites That Grow Your Business"
          description="From idea to launch, I design and develop responsive, high-performance websites and web apps that help your business stand out and grow online."
        />

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12 sm:mt-16 lg:mt-20">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-6 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* soft glow in the corner */}
              <span className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-blue-100/60 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* top row: icon + number */}
              <div className="relative flex items-start justify-between">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm group-hover:scale-105 group-hover:border-blue-200 transition-all duration-300">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <span className="text-4xl sm:text-5xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors duration-300 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* text */}
              <div className="relative space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>

              {/* bottom accent line */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* button */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            to="#"
            className="inline-block w-full sm:w-auto px-8 py-3 rounded-lg bg-pri text-white font-medium shadow-md hover:bg-blue-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Primary Action
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;