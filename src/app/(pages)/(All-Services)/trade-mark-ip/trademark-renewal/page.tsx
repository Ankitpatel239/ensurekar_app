"use client";

import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ExpertiseFlow from "@/app/components/Section/Expertise-Flow";
import taxation_services_img from "../../../../images/taxation_services_img.png";
import React from "react";
import { CoinsIcon } from "lucide-react";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import { Money, ChartLineUp, FileText, Calculator } from "phosphor-react";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import HelpSection from "@/app/components/Section/help-section";
import we_help from "../../../../images/we_help.png";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
const TrademarkRenewal = () => {
  const BreadcrumbData = {
    title: "Trademark Renewal",
    heading: "Trademark Renewal Online Services",
    subHeading: "",
    description:
      "Safeguard your brand's identity with our easy online trademark renewal service. Our experts manage the entire process efficiently, from paperwork to filing, ensuring a smooth and quick experience.",
    image: "",
    bottomHeading: "",
  };
  const ExpertiseFlowData = {
    title: "Trademark Renewal",
    heading: "Trademark Renewal",
    description:
      "Trademark renewal ensures ongoing brand protection, with a restoration option available if missed before expiration",
    image: taxation_services_img,
    flowData: [
      {
        icon: <CoinsIcon size={24} />,
        title: "Validity Period",
        description:
          "Trademark registrations are valid for 10 years and can be renewed indefinitely. To avoid expiration, renewal should begin six months before the end date.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Renewal Reminders",
        description:
          "Even if you miss the renewal deadline, a reminder will be sent to your registered address to ensure you don't overlook the process.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Risk of Trademark Withdrawal",
        description:
          "If a renewal is not filed, the registrar may announce their intention to withdraw the trademark by publishing a notice in the Trade Marks Journal, usually within a year after expiration.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Restoration Option",
        description:
          "You can still renew a trademark within 6-12 months after it expires by paying a restoration fee, ensuring your trademark remains protected.",
      },
    ],
  };
  const ServiceCoveredData = {
    title: "",
    heading: "Advantages of Trademark Renewal",
    subHeading: "",
    description:
      "Registering your trademark offers legal protection against infringement and boosts your brand's value, opening doors for licensing opportunities and a unique market identity.",
    image: "",
    services: [
      {
        title: "Legal Protection",
        description:
          "A registered trademark allows you to defend your rights in court if someone infringes on your brand. In industries prone to trademark violations, registration is essential.",
        icon: <Calculator />,
      },
      {
        title: "Business Opportunity",
        description:
          "A successful trademark can become a valuable asset, like brands such as Tide or Nike. It can generate significant royalties through licensing or even be sold to interested buyers.",
        icon: <Calculator />,
      },
      {
        title: "Distinct Identity",
        description:
          "Registering your trademark ensures your brand stands out, preventing others from using similar names or slogans, and establishing a unique identity for your products or services.",
        icon: <Calculator />,
      },
    ],
  };
  const RegisterStepsData = {
    title: "Simple Steps",
    heading: "Steps to Renew a ",
    meta: "Trademark in India",
    description: "",
    steps: [
      { title: "Conduct a Trademark Search", description: "" },
      { title: "Submit Renewal Application", description: "" },
      { title: "Review and Publication", description: "" },
    ],
    aboutSteps: [
      {
        title: "Conduct a Trademark Search",
        description:
          "Before renewing, check for any similar or identical trademarks using the Indian Trademark Office's website.",
      },
      {
        title: "Submit Renewal Application",
        description:
          "File your renewal application online or at the Trademark Office, either six months before or six months after the trademark's expiration, along with the required fee.",
      },
      {
        title: "Review and Publication",
        description:
          "After submission, the Trademark Office will review your application. If approved, it will be published in the Trademark Journal, allowing a four-month opposition period before issuing a renewal certificate if no objections arise.",
      },
    ],
  };
  const HelpSectionData = {
    heading:
      "Documents Required for Trademark Registration Renewal Online India",
    subHeading: "",
    description: "",
    image: we_help,
    bottomHeading: "Bringing a Trademark Back",
    bottomDescription: "",
    bottomList: [
      {
        heading: "",
        description: "A duplicate of the registration document.",
      },
      {
        heading: "",
        description:
          "Copy of TM-A form (form used for the original form for registering the trademark).",
      },
      {
        heading: "",
        description: "Proof of the applicant's identity and address.",
      },
      {
        heading: "",
        description:
          "The applicant may be given power of attorney if they are an authorised representative or agency.",
      },
      {
        heading: "",
        description: "Bringing a Trademark Back",
      },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {
        question: "How does the trademark restoration process work?",
        answer: "NA",
      },
      {
        question: "What is the fee for trademark renewal in India?",
        answer: "NA",
      },
      {
        question:
          "Can I file my trademark renewal application online after the expiration date?",
        answer: "NA",
      },
      {
        question: "When should I apply for trademark renewal in India?",
        answer: "NA",
      },
      {
        question:
          "Is the trademark renewal process the same as the trademark restoration process?",
        answer: "NA",
      },
      {
        question:
          "After how many years can trademark registration in India be renewed?",
        answer: "NA",
      },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ExpertiseFlow ExpertiseFlowData={ExpertiseFlowData} />
      <ServiceCovered ServiceCoveredData={ServiceCoveredData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <HelpSection HelpSectionData={HelpSectionData} />
      <FAQsServicesSection FAQsData={FAQsData} />
    </>
  );
};

export default TrademarkRenewal;
