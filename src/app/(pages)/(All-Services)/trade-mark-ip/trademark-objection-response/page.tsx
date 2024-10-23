import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import HelpSection from "@/app/components/Section/help-section";
import React from "react";
import we_help from "../../../../images/we_help.png";
import what_we_do from "../../../../images/what_we_do.png";
import whyAccoupayCard_1 from "../../../../images/whyAccoupayCard_1.png"
import whyAccoupayCard_2 from "../../../../images/whyAccoupayCard_2.png"
import whyAccoupayCard_3 from "../../../../images/whyAccoupayCard_3.png"
import whyAccoupayCard_4 from "../../../../images/whyAccoupayCard_4.png"
import whyAccoupayCard_5 from "../../../../images/whyAccoupayCard_5.png"

import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import EnsurekarFeature from "@/app/components/Section/features";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
const TrademarkObjectionResponse = () => {
  const BreadcrumbData = {
    title: "Trade mark objection",
    heading: "Trade mark objection",
    subHeading:
      "Get guaranteed document drafting by experienced IP lawyers in less than 24 hours (T&C apply).",
    description:
      "Drafted documents are uploaded within 2 working days, or you'll receive a full refund.",
    image: "",
    bottomHeading: "",
  };
  const HelpSectionData = {
    heading: "What is Trade Mark Objection",
    subHeading: "",
    description:
      "A trademark objection in India occurs when the Trademark Registry identifies issues with a trademark application, delaying its registration. Applicants must respond within a specified timeframe to address these concerns.       ",
    image: we_help,
    bottomHeading: "",
    bottomDescription: "",
    bottomList: [
      {
        heading: "Definition of Trademark Objection",
        description: "",
      },
      {
        heading: "Common Grounds for Objection",
        description: "",
      },
      {
        heading: "Examination Report",
        description: "",
      },
      {
        heading: "Applicant's Response Time",
        description: "",
      },
      {
        heading: "Outcome of Response",
        description: "",
      },
    ],
  };
  const RegistrationGuideData = {
    title: "Registration Guide",
    heading: "Documents Required For Trademark Objection",
    description: "",
    image: what_we_do,
    guideList: [
      {
        heading: "Report on authorised document",
        description: "",
      },
      {
        heading: "Trademark examination report",
        description: "",
      },
      {
        heading: "Identification documentation",
        description: "",
      },
      {
        heading: "Process for address verification in trademark opposition",
        description: "",
      },
    ],
  };
  const RegisterStepsData = {
    title: " Trademark Search",
    heading: "Steps to Register your",
    meta: "Trademark Search",
    description: "",
    steps: [
      {
        title: "Track Application Progress",
        description:"",
      },
      {
        title: "Respond to Trademark Objections",
        description:
          "",
      },
      {
        title: "Attend the Hearing",
        description:"",
      },
    ],
    aboutSteps: [
        {
            title: "Track Application Progress",
            description:"Monitor the status of your trademark application and investigate any complaints that may arise.",
          },
          {
            title: "Respond to Trademark Objections",
            description:
              "Prepare and file a reply to any objections, ensuring to review and double-check your response before submission.",
          },
          {
            title: "Attend the Hearing",
            description:
              "If required, attend the hearing for your trademark application. If your response is favorable, your trademark will be published in the Trademark Journal.",
          },
    ],
    footerMessage: "Simple, quick, and hassle-free!",
  };

  const FeatureData = {
    title: "",
    heading: "Eligibility Criteria for Trademark Objection",
    subHeading:
      "Achieve operational excellence with our expert guidance in legal, financial, and tax matters. Build the ideal workplace while ensuring compliance and efficiency.",
    description: "",
    image: "",
    bottomHeading: "",
    elements: [
      { image: whyAccoupayCard_1, heading: "Similarity: The trademark must be similar or identical to an existing trademark within the same class of goods or services." },
      {
        image: whyAccoupayCard_2,
        heading: "Confusion: The trademark's use could lead to consumer confusion or mistaken identity with an existing mark.",
      },
      { image: whyAccoupayCard_3, heading: "Descriptiveness: The trademark describes the goods or services offered, making it ineligible for trademark protection." },
      { image: whyAccoupayCard_4, heading: "Offensiveness: The trademark is considered offensive or derogatory towards a specific community or group." },
      { image: whyAccoupayCard_5, heading: "Deceptiveness: The trademark is misleading, creating a false impression regarding the quality, origin, or source of the goods or services." },
    ],
  };
  const WhyEnsurekar = {
    heading: "Why Choose EnsureKar for Trademark Objection?",
    description: "",
    elements: [
      {
        heading: "Expert Guidance",
        description:
          "EnsureKar provides professional assistance throughout the trademark objection process, helping you navigate legal complexities and ensuring a strong defense.",
        imageUrl: "",
      },
      {
        heading: "Quick and Hassle-Free",
        description:
          "We manage everything from drafting responses to handling hearings, ensuring a smooth and efficient resolution to your trademark objection.",
        imageUrl: "",
      },
      {
        heading: "Transparent and Affordable",
        description:
          "We offer clear, upfront pricing with no hidden costs, making the objection process cost-effective and stress-free.",
        imageUrl: "",
      },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <HelpSection HelpSectionData={HelpSectionData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <EnsurekarFeature FeatureData={FeatureData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />

    </>
  );
};

export default TrademarkObjectionResponse;
