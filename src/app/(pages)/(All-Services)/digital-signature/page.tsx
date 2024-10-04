"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CompaniesAct from "@/app/components/Section/Companies-Act";
import Image from "next/image";
import dentist_section_img from "../../../images/dentist_section_img.png";
import save_time_money_section from "../../../images/save_time_money_section.png";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import FAQsSection from "@/app/components/other-page-sections/FAQs-Section";
import { Headphones, Question } from "phosphor-react";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";

interface OverviewData {
  heading: string;
  meta: string;
  questionAnswer: {
    question: string;
    answers: string[];
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
      imageUrl: string;
      imageDirection: string;
    };
    heading: string;
    meta: string;
    subHeading: string;
    documentsRequiredData?: {
      heading: string;
      documents: {
        heading: string;
        details: string;
      }[];
    }[];
    basicTypes?: {
      heading: string;
      description: string;
    }[];
    ImportanceData?: {
      heading: string;
      description: string;
    }[];
  }[];
}

interface WhyEnsurekar {
  heading: string;
  description: string;
  elements: { heading: string; description: string; imageUrl: string }[];
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
    heading: "Digital Signature",
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
    questionAnswer: {
      question: "What Is a Digital Signature Certificate Online?",
      answers: [
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
          imageUrl: "",
          imageDirection: "right",
        },
        heading: "Documents",
        meta: "for Online Digital Signature Certificate (DSC)",
        subHeading: "Documents Required for DSC Class 3 Registration",
        documentsRequiredData: [
          {
            heading:
              "Indians who wish to apply for a digital signature online must provide the following information:",
            documents: [
              {
                heading: "",
                details:
                  "PAN Card Identity Proof, similar to a driver's license.",
              },
              {
                heading: "Address confirmation",
                details:
                  "Aadhaar card, voter identification card, driver's license, or registration document.",
              },
              { heading: "", details: "An official attestation." },
            ],
          },

          {
            heading:
              "Indian organizations that want to apply for an online DSC must do the following:",
            documents: [
              {
                heading: "",
                details: "PAN within the organization",
              },
              {
                heading: "",
                details:
                  "The partnership agreement, if applicable Concerned persons authorized to sign documents, Proof of an authorized signatory GST registration",
              },
              {
                heading: "",
                details:
                  "The papers for Indian firms differ depending on the type of entity—partnership, sole proprietorship, LLP, and so on.",
              },
            ],
          },
        ],
      },
      {
        imageData: {
          imageUrl: "",
          imageDirection: "left",
        },
        heading: "Basic Types",
        meta: "of Digital Signature Registration Certificate",
        subHeading: "",
        basicTypes: [
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
      {
        imageData: {
          imageUrl: "",
          imageDirection: "right",
        },
        heading: "Importance",
        meta: "of Digital Signature",
        ImportanceData: [
          {
            heading: "Safety Priority",
            description: "",
          },
          {
            heading: "Legal Standing",
            description: "",
          },
          {
            heading: "Time-saving Tool",
            description: "",
          },
          {
            heading: "Streamlined Processes",
            description: "",
          },
          {
            heading: "Business Efficiency",
            description: "",
          },
          {
            heading: "Cost-effectiveness",
            description: "",
          },
        ],
        subHeading: "",
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

  return (
    <div>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 xxl:col-span-5 flex justify-start items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">
              Digital Signature Certificate
            </p>
            <h2 className="display-4 pt-4 pb-6">
              Tailored Solutions for Digital Signature Certificate
            </h2>
            <p className="text-bodyText pb-6 lg:pb-10">
              Ensurekar is dedicated to supporting the financial health of your
              dental practice. From payroll solutions for dental professionals
              to compliance management,
            </p>
            <div className="flex justify-center items-center w-full overflow-hidden">
              <Image
                src={dentist_section_img}
                alt="image"
                className="hover:scale-110 duration-500 w-full h-full"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center pb-6 xl:pb-12">
            <div className="flex justify-start items-start gap-4">
              <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]">
                <i className="ph-fill ph-tooth"></i>
              </div>
              <div className="">
                <h4 className="heading-4">Authenticity</h4>
                <p className="text-bodyText pt-3">
                  When conducting online business, authentication is useful for
                  verifying the accuracy of an individual's personal
                  information, and DSC provides greater authenticity.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]">
                <i className="ph-fill ph-users-three"></i>
              </div>
              <div className="">
                <h4 className="heading-4">Cost and time savings</h4>
                <p className="text-bodyText pt-3">
                  You can digitally sign PDF files and send them much faster
                  than you can physically sign paper copies of documents and
                  scan them to send via email. It is not necessary for a digital
                  signature certificate online holder to be physically present
                  to conduct or authorize business.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]">
                <i className="ph-fill ph-user"></i>
              </div>
              <div className="">
                <h4 className="heading-4">
                  Document authenticity is improved{" "}
                </h4>
                <p className="text-bodyText pt-3">
                  In most cases, a digitally signed document provides the
                  recipient with greater assurance that the signer is genuine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stp-30 sbp-30 bg-softBg1 overflow-hidden">
        <div className="xxl:ml-[calc((100%-1296px)/2)] max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32">
          <div className="col-span-12 lg:col-span-6 flex justify-start items-start self-stretch order-2">
            <Image
              src={save_time_money_section}
              alt="image"
              className="w-full h-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">
              All in one
            </p>

            <h2 className="display-4 pt-4 pb-6"> Digital Signature </h2>

            <p className="text-bodyText">
              Hire effortlessly with automation-assisted job listings, applicant
              tracking, and popular job board integrations. Then, give your new
              hires a delightfully smooth and paperless onboarding. Ensurekar
              will send forms, training modules,
            </p>
          </div>
        </div>
      </section>
      <ServiceOverview OverviewData={OverviewData} />
      {/* <CompaniesAct /> */}
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsSection />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSection />
    </div>
  );
};

export default DigitalSignature;
