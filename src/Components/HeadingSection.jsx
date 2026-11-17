
 const HeadingSection = ({subheading,heading,description}) => {
    return (
        <div className="text-center mb-12">
           <p className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            {subheading}
           </p>
           <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3 md:w-3/5 mx-auto">{heading}</h2>
           {
            description && <p className="text-gray-600 mt-4">{description}</p>
           }
            
        </div>
    );
};

export default HeadingSection;