import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2019 - 2022"}
            title={"ICT Bachelor Degree"}
            subTitle={"University of Science and Technology of Hanoi"}
            text={
              "University of Science and Technology of Hanoi (USTH, also called Vietnam - France University) is a public university, which was established in 2009 under the Intergovernmental Agreement between Vietnam and France with the ambition to become one of the most excellent research-oriented universities at an international standard in Vietnam. USTH is the leading university in Asia following the Bologna process for Diploma, which is widely applied in more than 45 European countries. Accordingly, the training duration for Bachelor, Master, and Doctoral programs is 3, 2, and 3 years respectively."
            }
          />
          <ResumeItem
            text={
              "USTH is the leading university in Asia following the Bologna process for Diploma, which is widely applied in more than 45 European countries. Accordingly, the training duration for Bachelor, Master, and Doctoral programs is 3, 2, and 3 years respectively."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
