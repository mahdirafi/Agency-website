 
import Blogs from "./blogs/Blogs";
import CompanyList from "./home/CompanyList";
import FAQs from "./home/FAQs";
import Hero from "./home/Hero";
import Pricing from "./home/Pricing";
import Services from "./home/Services";
import TeamSection from "./home/TeamSection";
import Testimonial from "./home/Testimonial";
import ToolsSection from "./home/ToolsSection";


const Home = () => {
    return (
        <>
        <Hero/>
        <ToolsSection/>
        <CompanyList/>
        <Services/>
        <Testimonial/>
        <Blogs/>
        <TeamSection/>
        <Pricing/>
        <FAQs/>
        </>
    );
};

export default Home;