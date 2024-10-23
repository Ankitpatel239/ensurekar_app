import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import HelpSection from "@/app/components/Section/help-section";
import we_help from "../../../../images/we_help.png"
import what_we_do from "../../../../images/what_we_do.png"
import React from "react";
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
const ShareholderAgreement = () => {
  const BreadcrumbData = {
    title: "Shareholder's Agreement",
    heading: "Shareholder's Agreement",
    subHeading: "Shareholder Agreement with Expert Advice.",
    description:
      "What is a Shareholder's Agreement Overview- ",
    image: "",
    bottomHeading:
      " A shareholder's agreement (or stockholders' agreement) is a legally binding contract that defines the rights, obligations, and responsibilities of a company's shareholders. It serves as a governance framework, complementing corporate laws and bylaws by addressing key issues related to ownership and management.",
  };
const HelpSectionData = {
    heading: "Purposes of a Shareholder's Agreement.",
    subHeading: "",
    description: "",
    image: we_help,
    bottomHeading: "",
    bottomDescription: "",
    bottomList: [
        {
            heading: "Protecting Shareholders' Interests",
        },
        {
            heading: "Defining Operational Guidelines",
        },
        {
            heading: "Aligning Shareholder Expectations",
        },
        {
            heading: "Providing Exit Strategies",
        },
        {
            heading: "Mitigating Legal Disputes",
        },
    ],
};
const RegistrationGuideData = {
    title: "Registration Guide",
    heading: "Benefits of a Shareholder's Agreement",
    description: "",
    image: what_we_do,
    guideList: [
      {
        heading: "Clarity and Certainty",
        description: "Establishes clear rules for shareholders, reducing misunderstandings and disputes.",
      },
      {
        heading: "Protection of Minority Shareholders",
        description: "Safeguards the rights and interests of minority shareholders in company decisions.",
      },
      {
        heading: "Dispute Resolution",
        description: "Provides mechanisms to resolve conflicts efficiently, avoiding litigation.",
      },
      {
        heading: "Confidentiality",
        description: "Ensures protection of sensitive company information and intellectual property.",
      },
    ],
};
const ServiceCoveredData = {
    title: "",
    heading: "Key Elements of Shareholder's Agreement",
    subHeading: "",
    description:
        "A shareholder's agreement outlines the rights, responsibilities, and obligations of shareholders, ensuring smooth governance and protecting interests.",
    image: "",
    services: [
        {
            title: "Ownership and Share Transfer",
            description: "Defines ownership percentages and sets restrictions on transferring shares, including drag-along and tag-along rights.",
            icon: <Calculator />,
        },
        {
            title: "Management and Decision-Making",
            description: "Outlines the board's structure, voting power, and procedures for major company decisions.",
            icon: <Calculator />,
        },
        {
            title: "Dispute Resolution",
            description: "Establishes mechanisms like mediation or arbitration for resolving shareholder conflicts.",
            icon: <Calculator />,
        },
        {
            title: "Confidentiality and Non-Compete Clauses",
            description: "Protects sensitive information and restricts shareholders from competing with the company.",
            icon: <Calculator />,
        },
        {
            title: "Minority Shareholder Protection",
            description: "Ensures minority shareholders have a voice and safeguards their interests in company decisions.",
            icon: <Calculator />,
        },
    ],
};
const FeatureData = {
    title: "",
    heading: "Who Needs a Shareholders' Agreement?",
    subHeading:"",
    description: "A shareholders' agreement is crucial for closely held companies, family businesses, and startups to prevent conflicts and protect interests, especially when multiple investors or intellectual property is involved.",
    image: "",
    bottomHeading: "",
    elements: [
      { image: whyAccoupayCard_1, heading: "Closely Held Companies" },
      { image: whyAccoupayCard_2, heading: "Family Businesses" },
      { image: whyAccoupayCard_3, heading: "Companies with Multiple Investors or Venture Capital Funding" },
      { image: whyAccoupayCard_4, heading: "Companies with Intellectual Property or Sensitive Information" },
      { image: whyAccoupayCard_5, heading: "Startups or Early-Stage Companies" },
    ],
  };
const WhoShouldBuyData = {
    title: "",
    heading: "Procedure for Drafting a Shareholders Agreement",
    subHeading:"",

    rolesData: {
        heading: "",
        description: "",
        roles: [
            {
                icon: "",
                title: "Identify Key Issues",
                description: "Discuss and determine the specific matters that the agreement must address.",
            },
            {
                icon: "",
                title: "Seek Legal Advice",
                description: "Consult with a qualified corporate lawyer to ensure the agreement's legality and suitability for your company.",
            },
            {
                icon: "",
                title: "Negotiate Terms",
                description: "Review and negotiate the terms of the agreement among all shareholders until a consensus is reached.",
            },
            {
                icon: "",
                title: "Finalize the Agreement",
                description: "Prepare the final document in writing once all parties are in agreement.",
            },
            {
                icon: "",
                title: "Sign the Agreement",
                description: "Ensure that all shareholders sign the finalized agreement to make it official.",
            },
        ],
    },
};
const WhyEnsurekar = {
    heading: "Why Choose Ensurekar for Shareholder's Agreement?",
    description: "",
    elements: [
        {
            heading: "Expert Support",
            description: "At EnsureKar, we provide professional guidance throughout the entire shareholders' agreement process, ensuring all legal requirements and stakeholder interests are effectively addressed.",
            imageUrl: "",
        },
        {
            heading: "Swift and Smooth Service",
            description: "We handle everything from drafting to finalizing the agreement, ensuring a seamless and efficient experience for all parties involved.",
            imageUrl: "",
        },
        {
            heading: "Transparent and Affordable Pricing",
            description: "Our clear pricing model guarantees no hidden fees, making the process stress-free and budget-friendly.",
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
        question: "What are the drawbacks of a shareholders' agreement?",
        answer: "NA",
      },
      {
        question: "Is a shareholder allowed to sell their shares to anyone?",
        answer: "NA",
      },
      {
        question: "Is it possible to amend a shareholders' agreement?",
        answer: "NA",
      },
      {
        question: "Can a shareholders' agreement be terminated?",
        answer: "NA",
      },
      {
        question: "Is a shareholders' agreement required?",
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

export default ShareholderAgreement;
