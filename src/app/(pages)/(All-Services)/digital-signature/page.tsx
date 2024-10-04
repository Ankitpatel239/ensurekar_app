"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CompaniesAct from "@/app/components/Section/Companies-Act";
import Image, { StaticImageData } from "next/image";
import dentist_section_img from "../../../images/dentist_section_img.png";
import save_time_money_section from "../../../images/save_time_money_section.png";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import faq_illus from '../../../images/faq_illus.png';
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";

interface OverviewData {
  heading: string;
  meta: string;
  introduction: {
    heading: string;
    description: string[];
  };
  advantagesInfo: {
    heading: string;
    meta: string;
    description: string;
    advantages: {
      imageUrl: string;
      heading: string;
      details: string;
    }[];
  };
  eligibilityCriteria: {
    imageData: {
      imageUrl: StaticImageData;
      imageDirection: string;
    };
    heading: {
      start: string;
      blueText: string;
      end: string;
    };
    meta: string;
    subHeading: string;
    startingDescription:string;
    endingDescription:string;
    requiredSteps?: {
      heading: string;
      description: string;
  
      steps: { heading: string; description: string }[];
      
    }[];
  }[];
}

interface WhyEnsurekar {
  heading: string;
  description: string;
  elements: { heading: string; description: string; imageUrl: string }[];
}

import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";

interface AdvantagesData {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  advantages: { title: string; description: string; icon: React.ReactNode }[];
}

const DigitalSignature = () => {
  const handleBuy = () => {
    console.log("clicked digital sign");
  };
  const Component = (
    <div className="col-span-12 md:col-span-6 mt-5 md:mt-10 flex justify-center items-center">
      <div className="">
        <div className="grid grid-cols-1 gap-6  p-5 ">
          <div className="col-span-2">
            <button
              className="py-2.5 min-w-[250px] bg-yellow-400 border rounded  block text-center   hover:border-mainTextColor font-bold duration-500 w-full text-slate-800"
              onClick={handleBuy}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  const BreadcrumbData = {
    title: "Digital Signature",
    heading: "Digital Signature Certificate",
    subHeading: "EnsureKar is the best digital signature provider",
    description:
      "and we can provide a DSC and digital signature certificate online registration in just three simple steps!",
    image: "",
    component: Component,
  };

  const RegisterStepsData = {
    title: "Digital Signature",
    heading: "Steps to Register your",
    meta: "Digital Signature Certificate",
    description: "",
    steps: [
      {
        title: "Reach out to our expert",
        description:
          "When you first contact our experts, we'll collect essential details from you. This includes your name, gender, address, nationality, country, email, mobile number, and the specific purpose you need a Digital Signature Certificate (DSC) for (e.g., personal use, foreign trade, e-tenders, tax filing, company registration, GST filing, or other). We'll also assist you in selecting the right type of DSC and guide you through the application process",
      },
      {
        title: "Complete Online documentation",
        description:
          "To process your application, we'll need to gather and verify several documents, including your PAN card, proof of address, and passport. These documents will need to be properly attested",
      },
      {
        title: "Digital Signature Registration",
        description:
          "We'll verify your identity with a video call and SMS. After that, we'll send your digital signature on a USB token",
      },
    ],
  };

  const OverviewData: OverviewData = {
    heading: "Digital Signature",
    meta: "Overview",
    introduction: {
      heading: "What Is a Digital Signature Certificate Online?",
      description: [
        "A DSC or ID is another name for a digital signature certificate. To digitally sign official documents, the authority must have an active digital certificate.",
        "A digital certificate will be issued by a certificate authority. A DSC can be purchased or applied for online from third-party certificate authorities.",
        "Furthermore, many organizations, governments, and businesses can issue their own certifications.",
        "A digital certificate is required in order to use a digital signature.",
        "Digital certificates enable the use of digital signatures.",
        "The digital signature registration certificate is used to identify and validate the identity of those who hold and use this signature. It can also be used as a secure digital key.",
        "To generate the signatures, public key encryptions are used in digital signatures.",
        "Along with the user's name, the digital signature certificate will include other information such as the pin code email address, the date the certificate was issued, and the name of the certifying authority.",
      ],
    },
    advantagesInfo: {
      heading: "Advantages",
      meta: "of Digital Signature",
      description: "",
      advantages: [
        {
          imageUrl: "",
          heading: "Security",
          details:
            "Security capabilities are embedded in digital signatures to ensure a legal document isn't altered and signatures are legitimate.",
        },
        {
          imageUrl: "",
          heading: "Timestamping",
          details: "",
        },
        {
          imageUrl: "",
          heading: "Globally accepted and legally compliant",
          details: "",
        },
        {
          imageUrl: "",
          heading: "Time savings",
          details: "",
        },
        {
          imageUrl: "",
          heading: "Cost Savings",
          details: "",
        },
        {
          imageUrl: "",
          heading: "Positive environmental effects",
          details: "",
        },
        {
          imageUrl: "",
          heading: "Traceability",
          details: "",
        },
      ],
    },
    eligibilityCriteria: [
      {
        imageData: {
          imageUrl: dentist_section_img,
          imageDirection: "right",
        },
        heading: {
          start: "",
          blueText: "Documents",
          end: "for Online Digital Signature Certificate (DSC)",
        },
        meta: "for Online Digital Signature Certificate (DSC)",
       
      
        subHeading: "Documents Required for DSC Class 3 Registration",
        startingDescription:"",
    endingDescription:"",
        requiredSteps: [
          {
            heading:
              "Indians who wish to apply for a digital signature online must provide the following information:",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "PAN Card Identity Proof, similar to a driver's license.",
              },
              {
                heading: "Address confirmation",
                description:
                  "Aadhaar card, voter identification card, driver's license, or registration document.",
              },
              { heading: "", description: "An official attestation." },
            ],
            
          },
          {
            heading:
              "Indian organizations that want to apply for an online DSC must do the following:",
            description: "",
            steps: [
              {
                heading: "",
                description: "PAN within the organization",
              },
              {
                heading: "",
                description:
                  "The partnership agreement, if applicable Concerned persons authorized to sign documents, Proof of an authorized signatory GST registration",
              },
              {
                heading: "",
                description:
                  "The papers for Indian firms differ depending on the type of entity—partnership, sole proprietorship, LLP, and so on.",
              },
            ],
           
          },
        ],
      },
      {
        imageData: {
          imageUrl: dentist_section_img,
          imageDirection: "left",
        },
        heading: {
          start: "",
          blueText: "Types",
          end: "of Digital Signature Registration Certificate",
        },
        meta: "of Digital Signature Registration Certificate",
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "Sign DSC",
                description:
                  "Only signing documents are permitted with sign DSC. The most common application is for websites such as tax returns, MCA, and others to sign PDF files. When you sign using DSC, the data and the signer's integrity are both guaranteed. It serves as evidence of intact and unaltered data.",
              },
              {
                heading: "Encrypt DSC",
                description:
                  "This type of dsc registration is widely used to protect a document. It is used to encrypt a document and is used in tender portals to help businesses that focus on uploading their papers. \n The certificate might potentially be used to deliver encrypted, sensitive information. Legal documents, e-commerce documents, and distributing documents containing highly confidential information are appropriate uses for encrypting DSC. The encrypt certificate is a standalone certificate.",
              },
              {
                heading: "Encrypt and Sign",
                description:
                  "Both signing and encrypting may be done using the Sign & Encrypt DSC. It is apt for users who wish to uphold the privacy of shared information and authenticate the same. It is used for submitting applications and forms to the government.",
              },
            ],
          },
        ],
      },
      {
        imageData: {
          imageUrl: dentist_section_img,
          imageDirection: "right",
        },
        heading: {
          start: "",
          blueText: "Benefits",
          end: "of Digital Signature",
        },
        meta: "of Digital Signature",
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "Safety Priority",
            description: "",
            steps: [],
          },
          {
            heading: "Legal Standing",
            description: "",
            steps: [],
          },
          {
            heading: "Time-saving Tool",
            description: "",
            steps: [],
          },
          {
            heading: "Streamlined Processes",
            description: "",
            steps: [],
          },
          {
            heading: "Business Efficiency",
            description: "",
            steps: [],
          },
          {
            heading: "Cost-effectiveness",
            description: "",
            steps: [],
          },
        ],
      },
    ],
  };

  const WhyEnsurekar: WhyEnsurekar = {
    heading: "Why Choose Ensurekar for Digital signature?",
    description: "",
    elements: [
      {
        heading: "Easy simple,  and quick procedure",
        description: "",
        imageUrl: "",
      },
      { heading: "100% data privacy", description: "", imageUrl: "" },
      { heading: "24*7 Professional Support", description: "", imageUrl: "" },
    ],
  };

  const AdvantagesData: AdvantagesData = {
    title: "Digital Signature Certificate",
    heading: "Advantages of Digital Signature Certificate",
    description:
      "Ensurekar is dedicated to supporting the financial health of your dental practice. From payroll solutions for dental professionals to compliance management,",
    image: dentist_section_img,
    advantages: [
      {
        title: "Authenticity",
        description:
          "When conducting online business, authentication is useful for verifying the accuracy of an individual's personal information, and DSC provides greater authenticity.",
        icon: <svg>...</svg>,
      },
      {
        title: "Cost and time savings",
        description:
          "You can digitally sign PDF files and send them much faster than you can physically sign paper copies of documents and scan them to send via email. It is not necessary for a digital signature certificate online holder to be physically present to conduct or authorize business.",
        icon: <svg>...</svg>,
      },
      {
        title: "Document authenticity is improved",
        description:
          "In most cases, a digitally signed document provides the recipient with greater assurance that the signer is genuine.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const AllInOneData = {
    title: "",
    heading: "Digital Signature Certificate",
    image: save_time_money_section,
    description:
      "  Hire effortlessly with automation-assisted job listings, applicant tracking, and popular job board integrations. Then, give your new hires a delightfully smooth and paperless onboarding. Ensurekar will send forms, training modules,",
  };
  const FAQsData ={
    title:"FAQs",
    heading:"What Ensurekar offer you?",
    description:"",
    FAQs :[
      {
        question: "What services does Ensurekar offer?",
        answer: "Ensurekar offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
      },
      {
        question: "How does the accounting process work?",
        answer: "Ensurekar’s accounting process starts with gathering financial data, processing it for accuracy, and generating detailed reports for decision-making."
      }
      // Add more FAQ items similarly
    ],
    imageUrl: faq_illus
  }
  return (
    <div>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      {/* <CompaniesAct /> */}
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData}  />
     
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSection />
    </div>
  );
};

export default DigitalSignature;
