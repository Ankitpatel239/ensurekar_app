import React,{lazy} from "react";


const HeroSection = lazy(()=>import("./components/Section/Hero-Section"))
const CompanySlider = lazy(()=>import("./components/Section/Company-Slider"))
const SolutionsSection = lazy(()=>import("./components/Section/Solutions-Section"))
const FeaturesSection = lazy(()=>import("./components/Section/Features-Section"))
const CounterSection = lazy(()=>import("./components/Section/Counter-Section"))
const StepGuideSection = lazy(()=>import("./components/Section/Step-Guide-Section"))
const WhyEnsurekarSection = lazy(()=>import("./components/Section/Why-Ensurekar-Section"))
const IntegrationsSection = lazy(()=>import("./components/Section/Integrations-Section"))
const ExperienceAccupaySection = lazy(()=>import("./components/Section/Experience-Accupay-Section"))
const TestimonialSection = lazy(()=>import("./components/Section/Testimonial-Section"))
const PricingSection = lazy(()=>import("./components/Section/Pricing-Section"))
const BlogSection = lazy(()=>import("./components/Section/Blog-Section"))
const GotQuestionsSection = lazy(()=>import("./components/Section/Got-Questions-Section"))


export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySlider />
      <SolutionsSection />
      <FeaturesSection />
      <CounterSection />
      <StepGuideSection />
      <WhyEnsurekarSection />
      <IntegrationsSection />
      <ExperienceAccupaySection />
      <TestimonialSection />
      <PricingSection />
      <BlogSection />
      <GotQuestionsSection />
    
      
    </>
  );
}
