import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import WhoConsidered from "@/app/components/Section/Who-Considered";
import React from "react";
import healthcare_section_img from "../../../../images/healthcare_section_img.png";
import BenefitSection from "@/app/components/Section/Benefit-Section";
import DocumentsRequired from "@/app/components/Section/Documents-Required";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import faq_illus from "../../../../images/faq_illus.png";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../../images/testimonial10.png";
import testimonial9 from "../../../../images/testimonial9.png";
import testimonial7 from "../../../../images/testimonial7.png";
import testimonial8 from "../../../../images/testimonial8.png";
import testimonial6 from "../../../../images/testimonial6.png";
import Consequences from "@/app/components/Section/Consequences";
import Deadline from "@/app/components/Section/Deadline";
import FeaturesSection from "@/app/components/Section/Features-Section";

const TDSReturnFilings = () => {
  const BreadcrumbData = {
    title: "TDS Return Filings",
    heading: "TDS Return Filings",
    subHeading: "",
    description:
      "Ensure timely and accurate filing of your TDS/TCS returns with our expert services. Our top accountants and tax experts handle e-filing to help you avoid penalties and ensure compliance.",
    image: "",
  };
  const WhoConsideredData = {
    title: "TDS and TCS Certificates",
    heading: "Importance of TDS and TCS Certificates",
    description:
      "TDS and TCS certificates are essential for both the deductor/collector and taxpayer, playing a key role in ensuring tax compliance and reconciliation.",
    imageurl: healthcare_section_img,
    consideretion: [
      {
        icon: "",
        heading: "Proof of Compliance",
        description:
          "TDS/TCS certificates act as evidence that the deductor/collector has met their responsibility to deduct or collect tax at source, critical for audits and tax assessments.",
      },
      {
        icon: "",
        heading: "Accurate Tax Records: ",
        description:
          "These certificates provide a clear record of the taxes deducted or collected, supporting accurate tax accounting and reconciliation.",
      },
      {
        icon: "",
        heading: "Avoidance of Penalties",
        description:
          "Issuing TDS/TCS certificates on time helps prevent penalties related to non-compliance or late tax payments.",
      },
      {
        icon: "",
        heading: "Facilitates Tax Deposits",
        description:
          "The certificates offer the necessary details for the deductor/collector to deposit the deducted or collected taxes with the government.",
      },
    ],
  };
  const BenefitData = {
    title: "",
    heading: "Benefits of TDS filing",
    subHeading: "",
    benefitsData: {
      heading: "",
      description: "",
      benefits: [
        {
          icon: "",
          title: "Prevents Penalties",
          description:
            "Filing on time helps you steer clear of late fees and interest charges.",
        },
        {
          icon: "",
          title: "Secures Timely Refunds",
          description:
            "Early filing ensures quicker processing of any refund claims.",
        },
        {
          icon: "",
          title: "Encourages Compliance",
          description:
            " Filing promptly shows adherence to tax laws, boosting the taxpayer's credibility.",
        },
        {
          icon: "",
          title: "Lowers Audit Risk",
          description:
            "Submitting taxes on time reduces the chances of facing audits or additional scrutiny.",
        },
        {
          icon: "",
          title: "Old Age Medical Care",
          description:
            "Medical care for retiring employees or those opting for VRS/ERS with an annual payment of ₹120.",
        },
      ],
    },
  };

  const FAQsData = {
    title: "FAQs",
    heading: "What service does ENSUREKAR offer",
    description: "",
    FAQs: [
      { question: "What is TAN?", answer: "NA" },
      { question: "What is TDS return filing?", answer: "NA" },
      {
        question: "What are the penalties for late TCS return filing?",
        answer: "NA",
      },
      {
        question: "What is the due date for filing TCS returns?",
        answer: "NA",
      },
      { question: "What is TCS (Tax Collected at Source)?", answer: "NA" },
      {
        question:
          "Where can I obtain a TCS certificate, and why is it important?",
        answer: "NA",
      },
      { question: "How do I calculate TCS collection?", answer: "NA" },
      { question: "What is the concept of TDS?", answer: "NA" },
      {
        question: "What happens if TDS is not deducted on time?",
        answer: "NA",
      },
      { question: "How long does it take to get a TDS refund?", answer: "NA" },
    ],
    imageUrl: faq_illus,
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for TDS/TCS Registration ",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description:
          "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements.",
        imageUrl: "",
      },
      {
        heading: "Hassle-Free & Fast Service",
        description:
          "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process.",
        imageUrl: "",
      },
      {
        heading: "Transparent & Affordable",
        description:
          "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free.",
        imageUrl: "",
      },
    ],
  };
  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer Stories",
    description:
      "Startups thrive with Ensurekar. Their flexible payroll solutions have been instrumental in our journey, providing the support.",
    testimonials: [
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },

      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
    ],
  };
  const ConsequencesData = {
    title: "Consequences",
    heading: "Consequences of Missing Payment Deadlines",
    description: "",
    onlineProcesses: [
      {
        icon: "",
        heading: "Penalty for Late payment",
        description: "A penalty of 1% is levied on outstanding TDS/TCS amount for every delay",
      },
      {
        icon: "",
        heading: "Interest charges",
        description: "Interest is charged on the outstanding TDS/TCS amount at 12% per annum from the due date of payment until the date of actual payment.",
      },
      {
        icon: "",
        heading: "Prosecution",
        description: "In severe cases of non-compliance, legal action may be initiated against the deductor or collector of TDS/TCS. This could involve prosecution under the Income Tax Act, leading to fines or imprisonment.",
      },
    ],
  };
  const DeadlineData = {
    title: "Deadline",
    heading: "TDS and TCS Payment Deadlines",
    subHeading: "The deadlines for payment of TDS/TCS are as follows:",
    DeadlinesData: {
      heading: "",
      description: "",
      benefits: [
        {
       
          title: "Quarterly payments",
          description:
            "The deadline for TDS/TCS for each quarter is the 30 of the coming month  ",
        },
        {
          title: "Annual payments",
          description:
            "The deadline for TDS/TCS for the financial year is the 31 of May of the next year",
        },
     
      ],
    },
    bottomText:"Unable to pay TDS/TCS on the deadline results in a penalty of 2% of the outstanding amount every month.",
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <WhoConsidered WhoConsideredData={WhoConsideredData} />
      <BenefitSection BenefitData={BenefitData} />
     <Deadline DeadlineData={DeadlineData} />
      
      <Consequences ConsequencesData={ConsequencesData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </>
  );
};

export default TDSReturnFilings;
