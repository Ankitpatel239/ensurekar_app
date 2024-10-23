"use client";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CopyrightEducation from "@/app/components/Section/Copyright-Education";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import {
  Calculator,
  ChartLineUp,
  ChatCircle,
  FileText,
  Money,
  NotePencil,
} from "phosphor-react";
import never_worry_img from "../../../../images/never_worry_img.png";
import faq_illus from "../../../../images/faq_illus.png";
import we_help from "../../../../images/we_help.png";
import React from "react";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import HelpSection from "@/app/components/Section/help-section";
import DocumentsRequired from "@/app/components/Section/Documents-Required";
import WhatWeCharge from "@/app/components/Section/Service/What-We-Charge";
import account_section_img from "../../../../images/account_section_img.png";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
const CopyrightRegistration = () => {
  const BreadcrumbData = {
    title: "Copyright Registration",
    heading: "Copyright Registration",
    subHeading: "",
    description:
      "Secure your © symbol with our guaranteed 5-7 day filing process (T&C apply).",
    image: "",
    bottomHeading:
      "Enjoy a transparent experience with regular follow-ups and updates. Copyright filing starts at ₹2999*/-.",
  };
  const ServiceCoveredData = {
    title: "Types",
    heading: "Types of creative work ",
    subHeading: "",
    description: "",
    image: "",
    services: [
      {
        title: "Motion Picture",
        description:
          "Documentaries, videos, TV shows, animations, feature films, and audiovisual works.",
        icon: <Calculator weight="fill" />,
      },
      {
        title: "Software /Website /Apps",
        description: "Websites, mobile apps, computer programs, and databases.",
        icon: <FileText weight="fill" />,
      },
      {
        title: "Visual & Performing Arts",
        description:
          "2D or 3D artworks, paintings, photographs, drama, screenplays, choreography, scripts, and pantomimes.",
        icon: <Money weight="fill" />,
      },
      {
        title: "Sound Recordings",
        description:
          "Music, soundtracks, and sound recordings with accompanying text.",
        icon: <ChartLineUp weight="fill" />,
      },
      {
        title: "Literary Work",
        description:
          "Books, fiction, non-fiction catalogs, ad copy, directories, and poetry",
        icon: <ChartLineUp weight="fill" />,
      },
    ],
  };
  const CopyrightEducationData = {
    title: "Copyright?",
    heading: "What is Copyright?",
    description:
      "Copyright is a form of intellectual property that protects original works of authorship. It grants creators exclusive rights.",
    features: [
      {
        title: "Exclusive Rights",
        description:
          "It protects original works by granting creators control over reproduction, distribution, and adaptation.",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title: "Growth Potential",
        description:
          " Copyright is automatically applied once the work is fixed in a tangible form (written, recorded, etc.).",
        icon: <ChartLineUp weight="fill" />,
      },
      {
        title: "Optional Registration ",
        description:
          "Registration isn’t mandatory but offers legal advantages, such as the ability to sue for infringement.",
        icon: <NotePencil weight="fill" />,
      },
    ],
    image: never_worry_img,
  };
  const RegisterStepsData = {
    title: "Simple Steps",
    heading: "Hows it gonna ",
    meta: "work",
    description: "",
    steps: [
      {
        title: "Application Drafted within 48 Hours",
        description:
          "Your application is expertly drafted and reviewed by our professionals.",
      },
      {
        title: "5-7 Day Filing Process",
        description:
          "We file your copyright application, allowing you to start using the © symbol.",
      },
      {
        title: "Approval Period: 0-9 Months",
        description: "Receive your copyright certificate upon approval.",
      },
    ],
    aboutSteps: [
      {
        title: "Application Drafted within 48 Hours",
        description:
          "Your application is expertly drafted and reviewed by our professionals.",
      },
      {
        title: "5-7 Day Filing Process",
        description:
          "We file your copyright application, allowing you to start using the © symbol.",
      },
      {
        title: "Approval Period: 0-9 Months",
        description: "Receive your copyright certificate upon approval.",
      },
    ],
  };
  const HelpSectionData = {
    heading: "Eligibility for Copyright Registration in India",
    subHeading: "",
    description:
      "To qualify for copyright registration, a work must meet the following conditions:",
    image: we_help,
    bottomHeading: "",
    bottomDescription: "",
    bottomList: [
      {
        heading: "Originality:",
        description:
          "The work should be the author's own creative effort and not a replica of another’s work",
      },
      {
        heading: "Tangible Form:",
        description:
          " The work must be captured in a physical form, such as written, recorded, or stored digitally.",
      },
      {
        heading: "Eligible Categories",
        description:
          "The work must belong to one of the copyright-protected categories in India, including:Literary works (books, articles, poems, plays),Dramatic works (screenplays, choreography),Musical works (songs, compositions),Artistic works (paintings, sculptures, photographs),Cinematographic films,Sound recordings,Software",
      },
    ],
  };
  const DocumentsRequiredData = {
    title: "Documents Required ",
    heading: "Documents Required for Copyright Registration in India",
    description: "",
    documentsRequired: [
      {
        icon: "",
        text: "1. Artistic Works - (i) Application Form: Completed and signed, (ii) NOC from Artist: Needed if the work is commissioned, (iii) Authorship Declaration: Statement declaring the author of the artistic work.",
      },
      {
        icon: "",
        text: "2. Cinematograph Films - (i) Application Form: Filled and signed., (ii) NOC from Scriptwriter & Music Composer: Required if they differ from the filmmaker., (iii) Film Details: Synopsis, dialogue, and music information.",
      },
      {
        icon: "",
        text: "3. Music - (i) Application Form: Completed and signed., (ii) Sheet Music or Notation: Musical composition or notation., (iii) NOC from Lyricist & Composer: If the applicant isn’t the original lyricist or composer",
      },
      {
        icon: "",
        text: "4. Literary/Dramatic Works - (i) Application Form: Signed and filled, (ii) Manuscript or Copy: A copy of the literary or dramatic work., (iii) NOC from Publisher: If the work is published.",
      },
      {
        icon: "",
        text: "5. Sound Recordings - (i) Application Form: Duly signed and filled., (ii) Copy of Sound Recording: Submission of the recording., (iii) NOC from Producer: If applicable.",
      },
    ],
  };

  const RightsOfCopyrightOwnersData = {
    title: "Rights of Copyright Owners",
    heading: "Rights of Copyright Owners",
    description:
      "Copyright owners are granted exclusive control over their creative works, including the rights to:",
    charges: [
      "1. Reproduce the Work – Make copies in various formats, including physical, digital, or audio-visual.",
      "2. Distribute the Work – Sell, lease, rent, or lend copies of the work to the public.",
      "3. Create Derivative Works – Adapt or modify the original work to create something new, like a translation or adaptation.",
      "4. Public Performance – Perform the work in public, whether at a concert, play, or film screening.",
      "5. Public Display – Showcase the work in public venues, such as galleries, museums, or websites.",
      "6. Public Communication – Broadcast or transmit the work via mediums like radio, television, or the Internet.",
    ],
    imageUrl: account_section_img,
  };

const FAQsData = {
    title: "FAQs",
    heading: "What services does Ensurekar offer?",
    description: "",
    imageUrl: faq_illus,
    FAQs: [
        { question: "What does 'copyright-free' mean?", answer: "NA" },
        { question: "Does the copyright symbol indicate protection?", answer: "NA" },
        { question: "How can you verify if something is copyrighted?", answer: "NA" },
        { question: "What defines the nature of copyright?", answer: "NA" },
        { question: "What does Section 63 of the Copyright Act cover?", answer: "NA" },
    ],
};
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceCovered ServiceCoveredData={ServiceCoveredData} />
      <CopyrightEducation CopyrightEducationData={CopyrightEducationData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <HelpSection HelpSectionData={HelpSectionData} />
      <DocumentsRequired DocumentsRequiredData={DocumentsRequiredData} />
      <WhatWeCharge WhatWeChargeData={RightsOfCopyrightOwnersData} />
      <FAQsServicesSection FAQsData={FAQsData} />

    </>
  );
};

export default CopyrightRegistration;
