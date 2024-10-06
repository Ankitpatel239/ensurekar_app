"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import { StaticImageData } from "next/image";
import dentist_section_img from "../../../images/dentist_section_img.png";
import save_time_money_section from "../../../images/save_time_money_section.png";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import faq_illus from "../../../images/faq_illus.png";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";

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
    startingDescription: string;
    endingDescription: string;
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
  const BreadcrumbData = {
    title: "Digital Signature",
    heading: "Digital Signature Certificate (DSC)",
    subHeading: "Want to buy a DSC quickly and online?",
    description:
      "EnsureKar is the best digital signature provider,and we can provide a DSC and digital signature certificate online registration in just three simple steps!",
    image: "",
    bottomHeading: "Complete Online Process Expert Support Simple and Cost-Effective",
  };

  const RegisterStepsData = {
    title: "Digital Signature",
    heading: "Steps to Register your",
    meta: "Digital Signature Certificate",
    description: "",
    steps: [
      {title: "Create you're account and submit details",description:""},
      {title: "Consult with our experts",description:""},
      {title: "Get Your Certificate",description:""},
    ],
    aboutSteps: [
      {
        title: "Submit Your Details",
        description:
          "Fill in your basic information and business details on our platform to kick-start the registration process.",
      },
      {
        title: "Expert Assistance & Documentation",
        description:
          "Our team will assist you ",
      },
      {
        title: "Get Your Certificate",
        description:
          "Get your Digital Signature in Just a day",
      },
    ],
    footerMessage:"Simple, quick, and hassle-free!"
  };

  const OverviewData = {
    heading: "",
    meta: "",
    introduction: {
      heading: "",
      description: [],
    },
    advantagesInfo: {
      heading: "Advantages",
      meta: "of Digital Signature",
      description: "",
      advantages: [
        {
          imageUrl: "",
          heading: "Enhanced Security",
          details:
            "Digital signatures use encryption to secure documents, ensuring their integrity and verifying the signer's identity.",
        },
        {
          imageUrl: "",
          heading: "Legal Validity",
          details: "Recognized under the Information Technology Act, 2000, digital signatures are legally equivalent to handwritten signatures.",
        },
        {
          imageUrl: "",
          heading: "Time and Cost Efficiency",
          details: "They eliminate the need for physical paperwork, speeding up the signing process and reducing costs associated with printing and mailing.",
        },
        {
          imageUrl: "",
          heading: "Improved Traceability",
          details: "Digital signatures provide an audit trail, making it easy to track document signers and enhance accountability in transactions.",
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
          blueText: "Purpose  ",
          end: "of Digital Signature",
        },
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading:"",
            description: "",
            steps: [
              {
                heading: "Enhanced Security",
                description:"DSC registration ensures heightened security for online transactions by minimizing fraud risks and safeguarding data with an added protection layer.",
              },
              {
                heading: "Identity Verification",
                description:
                  "It allows for verifying the identity of individuals or organizations in a transaction, fostering trust between the involved parties.",
              },
              { heading: "Legally Recognized", description: "A DSC holds the same legal validity as a handwritten signature, ensuring the authenticity of electronic documents and their acceptance as evidence in legal proceedings." },
              { heading: "Time and Cost Efficiency", description: "With DSC registration, documents can be signed electronically, saving time and cutting costs linked to traditional paper-based processes." },
              { heading: "Business Efficiency", description: "DSC registration helps businesses streamline operations, speeding up document signing, reducing paperwork, and enhancing overall productivity." },
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
          start: "Who  ",
          blueText: "Requires",
          end: "a Digital Signature?",
        },
        meta: "of Digital Signature Registration Certificate",
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "In the following situations, acquiring a Class 3 digital signature is mandatory",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "All registered trusts, partnership firms, businesses, and individuals subject to a tax audit under the Income Tax Act must electronically file their income tax returns.",
              },
              {
                heading: "",
                description:
                  "Entities filing documents with MCA21 (Ministry of Corporate Affairs) are required to use digital signatures.",
              },
            ],
          },
          {
            heading: "As per MCA regulations, the following individuals must use digital signatures",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "Directors",
              },
              {
                heading: "",
                description:
                  "Auditors",
              },
              {
                heading: "",
                description:
                  "Company secretaries",
              },
              {
                heading: "",
                description:
                  "Bank officials",
              },
              {
                heading: "",
                description:
                  "Other authorized signatories.",
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
          blueText: "Documents Required ",
          end: "for DSC Registration",
        },
        meta: "of Digital Signature",
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "For Indian Individuals: ",
            description: "",
            steps: [
                {
                    heading: "",
                    description: "PAN card",
                },
                {
                    heading: "",
                    description: "Proof of Identity (e.g., Driver's License)",
                },
                {
                    heading: "",
                    description: "Address Proof: Aadhaar Card, Voter ID, Driver's License, or Registration Document",
                },
                {
                    heading: "",
                    description: "Attestation by an official",
                },
               
            ],
          },
          {
            heading: "For Indian Organizations:",
            description: "",
            steps: [
                {
                    heading: "",
                    description: "Company PAN Card",
                },
                {
                    heading: "",
                    description: "Partnership deed (if applicable)",
                },
                {
                    heading: "",
                    description: "Authorization for the person signing documents",
                },
                {
                    heading: "",
                    description: "Proof of the authorized signatory",
                },
                {
                    heading: "",
                    description: "GST registration",
                },
                {
                    heading: "",
                    description: "Documents may vary based on entity type (e.g., partnership, proprietorship, LLP).",
                },
            ],
          },
          {
            heading: "For Foreign Individuals and Organizations:",
            description: "",
            steps: [
                {
                    heading: "",
                    description: "Attested passport of the applicant",
                },
                {
                    heading: "",
                    description: "If abroad, attested copy of visa",
                },
                {
                    heading: "",
                    description: "If in India, attested residence permit certificate",
                },
                {
                    heading: "",
                    description: "Government-issued address proof with attested copy",
                },
            ],
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
        heading: "Expert Assistance",
        description: "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements.",
        imageUrl: "",
      },
      { heading: "Hassle-Free & Fast Service: ", description: "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process.", imageUrl: "" },
      { heading: "Transparent & Affordable", description: "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free.", imageUrl: "" },
    ],
  };

  const AdvantagesData: AdvantagesData = {
    title: "Benefits",
    heading: "Fastest Digital Signature Certificate (DSC) Registration In India | Same-Day Process",
    description:
      "A DSC or ID is another name for a digital signature certificate. To digitally sign official documents, the authority must have an active digital certificate. \n\n A digital certificate will be issued by a certificate authority. A DSC can be purchased or applied for online from third-party certificate authorities.",
    image: dentist_section_img,
    advantages: [
      {
        title: "Authenticity",
        description:
          "A Digital Signature Certificate (DSC) enhances the credibility of personal information, ensuring greater authenticity.",
        icon: <svg>...</svg>,
      },
      {
        title: "Cost and Time Savings",
        description:
          "Digitally signing and sending PDF files is much faster and more efficient than physically signing, scanning, and distributing documents. A DSC holder does not need to be physically present to authorize transactions or conduct business.",
        icon: <svg>...</svg>,
      },
      {
        title: "Data Integrity",
        description:
          "Once digitally signed, documents cannot be altered, ensuring data security. Government agencies often request DSCs to verify and authenticate business transactions.",
        icon: <svg>...</svg>,
      },
      {
        title: "Enhanced Document Assurance",
        description:
          "Digitally signed documents provide recipients with greater confidence that the signature is genuine.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const AllInOneData = {
    title: "",
    heading: "Digital Signature Certificate",
    image: save_time_money_section,
    description:["The digital signature registration certificate is used to identify and validate the identity of those who hold and use this signature. It can also be used as a secure digital key.","To generate the signatures, public key encryptions are used in digital signatures.","Along with the user's name, the digital signature certificate will include other information such as the pin code email address, the date the certificate was issued, and the name of the certifying authority."],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "DSC Registration FAQs",
    description: "",
    FAQs: [
      {
        question: "How can I obtain a Digital Signature Certificate (DSC) online?",
        answer:"",
      },
      {question: "How does a Digital Signature Certificate (DSC) work for signing documents online?",answer:"NA",},
      {question: "Who is authorized to issue a digital signature certificate online?",answer:"NA",},
      {question: "Can I get a DSC registration for free?",answer:"NA",},
      {question: "What is the cost of obtaining a digital signature certificate online?",answer:"NA",},
      {question: "Is there a limit to how many DSC registrations one can hold?",answer:"NA",},
      {question: "What is the difference between a digital certificate and a digital signature?",answer:"NA",},
      {question: "How long is a Digital Signature Certificate (DSC) valid for online signing?",answer:"NA",},
      {question: "Why is DSC registration necessary?",answer:"NA",},
      {question: "Who issues the Digital Signature Certificate online?",answer:"NA",},
    ],
    imageUrl: faq_illus,
  };

  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer Stories",
    description:
      "Discover the journey behind EnsureKar's success and how we've helped countless businesses thrive. Explore our stories of innovation, growth, and dedication.",
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

  return (
    <div>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </div>
  );
};

export default DigitalSignature;
