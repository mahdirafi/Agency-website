import { Link } from "react-router";
import HeadingSection from "../../Components/HeadingSection";
 

const Newslatter = () => {
  return (
    <div className="">
      <div className="section-container">
        <HeadingSection
          heading="Stay Updated with Our Newsletter"
          description="Subscribe to our newsletter
            Be the first to know about new features, templates, and exclusive discounts. We send one carefully written email 
            a month, packed with 
            practical tips to help you grow your business. Your email stays private, and you can unsubscribe at any time."
        />
        {/*  */}
        
             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-3 sm:gap-4 ">
        <Link
          to="/pricing"
          className="btn w-full sm:w-auto border bg-pri hover:bg-blue-800 transition-all text-white flex items-center justify-center gap-2 "
        >
          Subscribe Now  
        </Link>
        <Link
          to="/login"
          className="btn w-full sm:w-auto hover:bg-white border-2 border-blue-600 text-blue-600"
        >
          Learn More
        </Link>
      </div>
         

        
      </div>
    </div>
  );
};

export default Newslatter;
