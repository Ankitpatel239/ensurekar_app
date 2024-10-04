"use client";

import Image from "next/image";
import logo1 from "../../images/logo1.png";

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

const ServiceOverview = ({ OverviewData }: { OverviewData: OverviewData }) => {
  if (!OverviewData) return <div>loading...</div>;
  const { heading, meta, questionAnswer, advantagesInfo, eligibilityCriteria } =
    OverviewData;

  return (
    <div className="container stp-30 sbp-10">
      <div className="flex flex-col items-center">
        <h3 className="heading-3">
          {heading}
          <span className="text-blue-600"> - {meta}</span>
        </h3>

        <div className="border  my-8 p-4 shadow-inner shadow-cyan">
          <h4 className="heading-4 my-5 text-center">
            <span className="text-blue-600">{'"'}</span>{" "}
            {questionAnswer.question}{" "}
            <span className="text-blue-600 text-semibold">{'"'}</span>
          </h4>
          {questionAnswer.answers.map((answer, index) => (
            <p key={index} className="text-bodyText mb-2">
              {answer}
            </p>
          ))}
        </div>

        <div className="my-5 text-center">
          <h3 className="heading-3 my-4">
            <span className="text-blue-600">{advantagesInfo.heading} </span>{" "}
            {advantagesInfo.meta}
          </h3>
          {advantagesInfo.description && (
            <p className="p-5">{advantagesInfo.description}</p>
          )}

          <div className="flex flex-wrap items-start flex-start justify-around">
            {advantagesInfo.advantages.map((advantage) => (
              <div
                key={advantage.heading}
                className="flex flex-col justify-between items-center gap- bg-slate-100 rounded p-3 m-3 flex-grow w-[400px] max-w-[400px]  min-h-[280px]"
              >
                <div className="border w-[70px] h-[70px]">
                  <Image src={advantage.imageUrl} alt="img" />
                </div>
                <h5 className="text-center heading-5">{advantage.heading}</h5>
                <p className="text-center px-5 mb-5">{advantage.details}</p>
              </div>
            ))}
          </div>
          <div className="flex my-5 flex-col  items-center justify-center align-center text-start">
            {eligibilityCriteria.map((criteria) => (
              <>
                {criteria.documentsRequiredData && (
                  <div
                    className={`flex ${
                      criteria.imageData.imageDirection === "right"
                        ? "flex-row-reverse"
                        : "flex-row"
                    } items-center my-6`}
                  >
                    {/* Image */}
                    <div className="w-1/3">
                      {criteria.imageData && (
                        <Image
                          src={criteria.imageData.imageUrl || logo1}
                          alt="Related"
                          className="w-full h-auto"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="w-2/3 ml-5">
                    <h3 className="heading-3">
                        <span className="text-blue-600">{criteria.heading}</span> {criteria.meta}
                      </h3>
                      <p className="p-3">{criteria.subHeading}</p>
                      <h3 className="text-xl font-semibold mt-4">
                        {criteria.subHeading}
                      </h3>
                      <ul className="text-start disc-none">
                        {criteria.documentsRequiredData.map((data) => (
                          <li key={data.heading}>
                            <h4 className="text-2xl font-bold my-6">
                              {data.heading}
                            </h4>
                            <ul className="text-start list-disc pl-10">
                              {data.documents.map((document, index) => (
                                <li key={index}>
                                  {document.heading && (
                                    <h5 className="font-bold inline">
                                      {document.heading}:{" "}
                                    </h5>
                                  )}
                                  <p className="inline">{document.details}</p>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {criteria.basicTypes && (
                  <div
                  className={`flex ${
                    criteria.imageData.imageDirection === "right"
                      ? "flex-row-reverse"
                      : "flex-row"
                  } items-center my-6`}
                  >
                    {/* Image */}
                    <div className="w-1/3">
                      {criteria.imageData && (
                        <Image
                          src={criteria.imageData.imageUrl  ||logo1}
                          alt="Related"
                          className="w-full h-auto"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="w-2/3 ml-14">
                    <h3 className="heading-3">
                        <span className="text-blue-600">{criteria.heading}</span> {criteria.meta}
                      </h3>
                      <p className="p-3">{criteria.subHeading}</p>
                      <h3 className="text-xl font-semibold mt-4">
                        {criteria.subHeading}
                      </h3>
                      <ul className="text-start list-disc">
                        {criteria.basicTypes.map((basicType) => (
                          <li key={basicType.heading}>
                            <h4 className="heading-4 mt-4">{basicType.heading}</h4>
                            <p>{basicType.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {criteria.ImportanceData && (
                  <div
                  className={`flex ${
                    criteria.imageData.imageDirection === "right"
                      ? "flex-row-reverse"
                      : "flex-row"
                  } items-center my-6 justify-around w-full`}
                  >
                    {/* Image */}
                    <div className="w-1/3">
                      {criteria.imageData && (
                        <Image
                          src={criteria.imageData.imageUrl || logo1}
                          alt="Related"
                          className="w-full h-auto"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="w-2/3 ml-5">
                    <h3 className="heading-3">
                        <span className="text-blue-600">{criteria.heading}</span> {criteria.meta}
                      </h3>
                      <p className="p-3">{criteria.subHeading}</p>
                      <h3 className="text-xl font-semibold mt-4">
                        {criteria.subHeading}
                      </h3>
                      <ul className="text-start list-disc ml-5">
                        {criteria.ImportanceData.map((importance) => (
                          <li key={importance.heading}>
                            <h4 className="heading-4">{importance.heading}</h4>
                            <p>{importance.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
{
  /*
      <div className="my-8 flex flex-wrap  items-center gap-3 md:flex-nowrap">
              <div className="md:w-1/2 xl:w-1/2">
                <h3 className="heading-3">
                  <span className="text-blue-600">Eligibility Criteria </span>
                  for Private Limited Company Online Registration{" "}
                </h3>
                <p className="p-3">
                  As per MCA guidelines, a private limited company must be
                  registered with at least two directors and shareholders. While
                  stockholders may be either natural people or corporate
                  entities, directors must be people. Additionally, a registered
                  office address in India is mandatory. The following criterias
                  must be met while filing for private limited company
                  registration:
                </p>
                <ul className="text-start list-disc">
                  <li>
                    The applicant's minimum age should be eighteen years old
                  </li>
                  <li>The applicant must be a citizen or resident of India</li>
                  <li>There should be between 200 and 300 members</li>
                  <li>Minimum number of Directors or shareholders must be 2</li>
                </ul>
              </div>
              <div className="md:w-1/3 xl:w-1/4 p-5 flex items-center justify-center align-center mx-auto">
                <Image
                  src={logo1}
                  alt="image"
                  className="w-48 h-48 md:w-64 md:h-64 xl:w-80 xl:h-80 "
                />
              </div>
            </div>
            <div className="my-8 flex flex-wrap  items-center gap-3 md:flex-nowrap">
              <div className="md:w-1/3 xl:w-1/4 p-5 flex items-center justify-center align-center mx-auto">
                <Image
                  src={logo1}
                  alt="image"
                  className="w-48 h-48 md:w-64 md:h-64 xl:w-80 xl:h-80"
                />
              </div>
              <div className="md:w-1/2 xl:w-1/2">
                <h3 className="heading-3">
                  <span className="text-blue-600">Checklist </span> for Private
                  Limited Company Registration
                </h3>
                <p className="p-3">
                  As per the MCA, a checklist has to be met for registering your
                  company. Here is a clear outline of a checklist for private
                  limited company registration to follow
                </p>
                <ul className="text-start list-disc">
                  <li>At least 2 Directors</li>
                  <li>Directors and shareholders can be the same person</li>
                  <li>All the Directors should have DIN and DSC</li>
                  <li>Have the minimum Authorised share capital</li>
                  <li>Have the minimum Paid up share capital</li>
                  <li>Draft and MoA and AoA</li>
                  <li>Need details of the company working address</li>
                  <li>NOC and Rental Agreement from the landlord</li>
                </ul>
              </div>
            </div>
            <div className="my-8 flex flex-wrap  items-center gap-3 md:flex-nowrap">
              <div className="md:w-1/2 xl:w-1/2">
                <h3 className="heading-3">
                  {" "}
                  PVT Ltd Company Registration
                  <span className="text-blue-600"> Documents Required</span>
                </h3>
                <p className="p-3">
                  The following necessary documents are crucial for Private
                  Limited Company registration in India:
                </p>
                <ul className="text-start list-disc">
                  <li> Photographs of directors in passport size</li>
                  <li>Residential address proof for directors</li>
                  <li>Photo identification proof for directors</li>
                  <li>Sample signatures</li>
                  <li>
                    {" "}
                    A self-declaration confirming directorship in other
                    companies
                  </li>
                  <li>Lease/Rent agreement for the registered office</li>
                  <li> Letter of no objection from the property owner </li>
                  <li> Aadhaar card </li>
                  <li>PAN card</li>
                  <li>Director Identification Number (DIN) </li>
                  <li>Digital Signature Certificate (DSC)</li>
                  <li>Memorandum of Association (MOA)</li>
                  <li>Articles of Association (AoA)</li>
                </ul>
              </div>
              <div className="md:w-1/3 xl:w-1/4 p-5 flex items-center justify-center align-center mx-auto">
                <Image
                  src={logo1}
                  alt="image"
                  className="w-48 h-48 md:w-64 md:h-64 xl:w-80 xl:h-80 "
                />
              </div>
            </div>
             */
}
