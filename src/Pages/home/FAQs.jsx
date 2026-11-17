import { useState } from "react";
import HeadingSection from "../../Components/HeadingSection";
const faqs = [
    {
        id: 1,
        question: "Who should use the app?",
        answer: "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools."
    },
    {
        id: 2,
        question: "What is included with my subscription?",
        answer: "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan."
    },
    {
        id: 3,
        question: "How do I get paid?",
        answer: "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard."
    },
    {
        id: 4,
        question: "Is my personal information safe?",
        answer: "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times."
    },
    {
        id: 5,
        question: "How can we get in touch?",
        answer: "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have."
    }
]; 

const FAQs = () => {
    const [expendedFAQ , setExpendedFAQ] = useState(null);

    const toggleFAQ = (id)=>{
        if(expendedFAQ === id){
            setExpendedFAQ(null)
        }else{
            setExpendedFAQ(id)
        }
    }
  return (
    <div className="bg-colorBG">
      <div className="section-container">
        <HeadingSection 
        subheading="FAQ" 
        heading="Frequently Asked Questions" />

        {/* questions */}
        <div className="w-full max-w-4xl mx-auto">
            {
                faqs.map((faq)=>(
                <div key={faq.id} className="border border-gray-300 mb-4 ">
                    <div className="p-4 cursor-pointer flex justify-between items-center bg-gray-50 hover:bg-gray-200 transition duration-200" onClick={()=> toggleFAQ(faq.id)}>
                        <h3 className="text-lg font-bold text-gray-700">
                            {faq.question}
                        </h3>

                        <span className={`transform transition duration-200 text-lg font-bold ${expendedFAQ === faq.id ? "rotate-180": ""}`}>{expendedFAQ === faq.id ? "-" : "+"}</span>
                    </div>

                    {/* answer */}
                    {
                        expendedFAQ === faq.id  &&  (<div className="bg-white px-4 pb-4">
                            <p className="text-gray-600 py-1">{faq.answer}</p>
                        </div>)
                    }

                </div>
                ))
            }

        </div>

      </div>
    </div>
  );
};

export default FAQs;
