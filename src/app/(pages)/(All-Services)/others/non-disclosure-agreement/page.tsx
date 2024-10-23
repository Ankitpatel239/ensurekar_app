import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import HelpSection from "@/app/components/Section/help-section";
import React from "react";
import we_help from "../../../../images/we_help.png";
import what_we_do from "../../../../images/what_we_do.png";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import { Calculator } from "lucide-react";
import EnsurekarFeature from "@/app/components/Section/features";
import whyAccoupayCard_1 from "../../../../images/whyAccoupayCard_1.png";
import whyAccoupayCard_2 from "../../../../images/whyAccoupayCard_2.png";
import whyAccoupayCard_3 from "../../../../images/whyAccoupayCard_3.png";
import whyAccoupayCard_4 from "../../../../images/whyAccoupayCard_4.png";
import whyAccoupayCard_5 from "../../../../images/whyAccoupayCard_5.png";
import whyAccoupayCard_6 from "../../../../images/whyAccoupayCard_6.png";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";

const NonDisclosureAgreement = () => {
  const BreadcrumbData = {
    title: "Non-Disclosure Agreement ",
    heading: "Non - Disclosure Agreement Drafting ",
    subHeading:
      "(i)Comprehensive Non-Disclosure Agreement (NDA), (ii)  Legal Guide: Drafting an Indian Non-Disclosure Agreement (NDA)",
    description: "NDA Agreement Overview",
    image: "",
    bottomHeading:
      "A Non-Disclosure Agreement (NDA), sometimes referred to as a confidentiality agreement, is a legal contract designed to safeguard proprietary information. It ensures that sensitive data such as trade secrets, business strategies, or software code remains confidential, preventing its unauthorized sharing with third parties.Consultants and agencies, especially those working with confidential details from various clients in the same industry, commonly sign NDAs to fulfill their legal responsibilities and preserve client trust.",
  };
  const HelpSectionData = {
    heading: "Types of Non-Disclosure Agreement ",
    subHeading: "",
    description: "",
    image: we_help,
    bottomHeading: "",
    bottomDescription: "",
    bottomList: [
      {
        heading: "One-way or Unilateral Agreement",
      },
      {
        heading: "Two-way or Bilateral Agreement",
      },
      {
        heading: "Multilateral Agreement",
      },
    ],
  };
  const RegistrationGuideData = {
    title: "Benefits",
    heading: "Benefits of Non-Disclosure Agreement -",
    description: "",
    image: what_we_do,
    guideList: [
      {
        heading: "Protects Business Secrets",
        description:
          "Safeguards sensitive information like trade secrets from being disclosed.",
      },
      {
        heading: "Enhances Client Relationships",
        description:
          "Builds trust by ensuring client data is kept confidential.",
      },
      {
        heading: "Prevents Unauthorized Disclosure",
        description:
          "Legally restricts the sharing of confidential information with third parties.",
      },
      {
        heading: "Strengthens Legal Protection",
        description:
          "Provides legal recourse in case of a breach of confidentiality.",
      },
    ],
  };
  const ServiceCoveredData = {
    title: "",
    heading: "Key Elements of Non-disclosure Agreement",
    subHeading: "",
    description: "",
    image: "",
    services: [
      {
        title: "The Parties",
        description:
          "Identifies whether the NDA is unilateral, bilateral, or multilateral, and lists the parties involved.",
        icon: <Calculator />,
      },
      {
        title: "Term of the Agreement",
        description:
          "Specifies the start date, duration, and whether confidentiality extends beyond the agreement’s expiration.",
        icon: <Calculator />,
      },
      {
        title: "Confidential Information",
        description: "Defines what information is classified as confidential.",
        icon: <Calculator />,
      },
      {
        title: "Disclosure of Confidentiality",
        description:
          "States the intended use of the confidential information and who can access it.",
        icon: <Calculator />,
      },
      {
        title: "Dispute Resolution",
        description:
          "Outlines how disputes will be resolved, including potential use of arbitration.",
        icon: <Calculator />,
      },
    ],
  };
  const FeatureData = {
    title: "",
    heading: "When Do You Need a NDA Agreement?",
    subHeading: "",
    description:
      "You should use an NDA whenever you share confidential information with anyone who is not an employee or direct representative. Common scenarios include:",
    image: "",
    bottomHeading: "",
    elements: [
      { image: whyAccoupayCard_1, heading: "Hiring a consultant" },
      { image: whyAccoupayCard_2, heading: "Forming a joint venture" },
      {
        image: whyAccoupayCard_3,
        heading: "Negotiating a merger or acquisition",
      },
      {
        image: whyAccoupayCard_4,
        heading: "Sharing trade secrets or intellectual property",
      },
      {
        image: whyAccoupayCard_5,
        heading: "Discussing new product development",
      },
      { image: whyAccoupayCard_6, heading: "Seeking investment funding" },
    ],
  };
  const WhoShouldBuyData = {
    title: "",
    heading: "Requirements for a Non-Disclosure Agreement",
    subHeading: "",
    rolesData: {
      heading: "",
      description: "",
      roles: [
        {
          icon: "",
          title: "Definition of Confidential Information",
          description:
            "The NDA must clearly define what constitutes confidential information, such as trade secrets, business plans, or proprietary data, to ensure both parties understand what is protected.",
        },
        {
          icon: "",
          title: "Identification of the Parties",
          description:
            "The agreement should explicitly identify the parties involved, naming the disclosing party and the recipient, to establish who is bound by the terms of the NDA.",
        },
        {
          icon: "",
          title: "Obligations of the Recipient",
          description:
            "It should outline the recipient's duties, including maintaining confidentiality and restricting the use of the information to specified purposes, thereby ensuring accountability.",
        },
        {
          icon: "",
          title: "Scope of the Agreement",
          description:
            "The NDA must specify the duration and extent of the confidentiality obligations, detailing how long the information must remain confidential and any limitations on its use.",
        },
        {
          icon: "",
          title: "Remedies for Breach",
          description:
            "The agreement should include provisions for remedies in case of a breach, such as financial damages or injunctive relief, to provide recourse for the disclosing party.",
        },
      ],
    },
  };
  const WhyEnsurekar = {
    heading: "Why Choose EnsureKar for Your Non-Disclosure Agreement?",
    description: "",
    elements: [
      {
        heading: "Professional Support",
        description:
          "At EnsureKar, we offer expert guidance throughout the entire NDA process, ensuring that all legal and confidentiality requirements are met.",
        imageUrl: "",
      },
      {
        heading: "Quick and Effortless Service",
        description:
          "We manage everything, from drafting to finalizing the NDA, ensuring a seamless and efficient experience.",
        imageUrl: "",
      },
      {
        heading: "Clear and Cost-Effective Pricing",
        description:
          "Our transparent pricing guarantees no hidden fees, making the process stress-free and affordable.",
        imageUrl: "",
      },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {
        question: "What are the two main types of non-disclosure agreements?",
        answer: "NA",
      },
      {
        question: "Is a non-disclosure agreement legally enforceable?",
        answer: "NA",
      },
      {
        question: "Can you provide an example of a non-disclosure agreement?",
        answer: "NA",
      },
      {
        question:
          "What are the five essential components of a non-disclosure agreement?",
        answer: "NA",
      },
      {
        question: "Who typically uses non-disclosure agreements?",
        answer: "NA",
      },
      {
        question: "How long does a non-disclosure agreement remain valid?",
        answer: "NA",
      },
      {
        question:
          "How does an NDA differ from a Memorandum of Understanding (MoU)?",
        answer: "NA",
      },
      {
        question: "What is another term for a non-disclosure agreement?",
        answer: "NA",
      },
      {
        question:
          "What does 'material' mean in the context of a non-disclosure agreement?",
        answer: "NA",
      },
      {
        question: "What laws govern non-disclosure agreements?",
        answer: "NA",
      },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <HelpSection HelpSectionData={HelpSectionData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <ServiceCovered ServiceCoveredData={ServiceCoveredData} />
      <EnsurekarFeature FeatureData={FeatureData} />
      <WhoShouldBuy WhoShouldBuyData={WhoShouldBuyData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <FAQsServicesSection FAQsData={FAQsData} />
    </>
  );
};

export default NonDisclosureAgreement;
