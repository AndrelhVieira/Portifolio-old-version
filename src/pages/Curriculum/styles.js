import styled from "styled-components";
import { Project } from "../../components/Portfolio/styles";

export const Container = styled.section`
  text-align: center;
`;

export const Header = styled.section`
  padding: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 275px;
`;

export const Name = styled.h1`
  font-size: 24px;
  margin-top: 25px;
  margin-bottom: 5px;

  @media screen and (min-width: 525px) {
    font-size: 32px;
  }
`;

export const Profession = styled.p`
  text-transform: uppercase;
  padding-bottom: 8px;
  border-bottom: 3px solid #d4d4d4;

  @media screen and (min-width: 525px) {
    font-size: 20px;
  }
`;

export const PersonalInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 525px) {
    flex-direction: row;
  }
`;

export const Info = styled.p`
  margin: 10px 15px;

  & a {
    color: #d4d4d4;
    text-decoration: none;
  }
`;

export const Title = styled.h2`
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 525px) {
    font-size: 24px;
  }
`;

export const PersonalResume = styled.section`
  padding: 0 25px 25px;
  margin: 0 auto;

  @media screen and (min-width: 525px) {
    max-width: 895px;
  }
`;

export const PersonalText = styled.p`
  text-align: justify;
`;

export const MainCompetences = styled.section`
  padding: 0 25px 25px;
  margin: 0 auto;

  @media screen and (min-width: 525px) {
    max-width: 750px;
  }

  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: inherit;
    margin: 10px auto;
    max-width: 300px;
  }

  & li {
    text-align: left;

    margin: 5px 0;
  }
`;

export const Courses = styled.section`
  padding: 0 25px 25px;
`;

export const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 895px;
  margin: auto;

  @media screen and (min-width: 525px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  & div {
    margin-bottom: 30px;
    border-bottom: 1px solid #d4d4d4;
    max-width: 375px;

    @media screen and (min-width: 525px) {
      margin: auto 15px 30px;
      padding: 15px;
      width: 375px;
      max-width: none;
    }
  }
`;

export const CourseName = styled.h3`
  font-size: 20px;
  margin: 10px 5px;
  text-transform: uppercase;
`;

export const Course = styled.p`
  font-weight: 400;
`;

export const CourseDate = styled.p`
  font-weight: 100;
  font-style: italic;
  font-size: 14px;
  opacity: 0.7;
`;

export const Professional = styled.section`
  padding: 0 25px 25px;
`;

export const ProfessionalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 895px;
  margin: auto;

  @media screen and (min-width: 525px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  & div {
    margin-bottom: 30px;
    border-bottom: 1px solid #d4d4d4;
    max-width: 375px;

    @media screen and (min-width: 525px) {
      margin: auto 15px 30px;
      padding: 15px;
      width: 375px;
      max-width: none;
    }
  }
`;

export const ProfessionalCompany = styled.h3`
  font-size: 20px;
  margin: 10px 5px;
  text-transform: uppercase;
`;

export const ProfessionalOffice = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

export const ProfessionalDate = styled.p`
  font-weight: 100;
  font-style: italic;
  font-size: 14px;
  opacity: 0.7;
`;

export const ProfessionalDescription = styled.p`
  text-align: justify;
`;

export const Certificates = styled.section`
  padding: 0 25px 25px;

  p {
    margin-bottom: 25px;
  }
`;

export const CertificateCarouselItem = styled(Project)`
  a {
    margin: 0;
  }
`;

export const Contact = styled.section`
  padding: 0 25px;
`;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;

  & a {
    color: #d4d4d4;
    font-size: 3rem;

    @media screen and (min-width: 525px) {
      font-size: 4rem;
    }

    &:hover {
      transition-duration: 0.25s;
    }
  }
`;

export const Button = styled.div`
  margin-top: 25px;

  & :link {
    text-decoration: none;
  }

  & .btn {
    border: none;
    outline: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 277px;
    height: 75px;
    font-size: 1.25em;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: ${({ isLight }) => (isLight ? "#d4d4d4" : "#3a3335")};
    margin: 15px auto 0;
    padding: 15px 0 15px;
  }

  & .btn svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 277px;
    height: 80px;
  }

  & .btn svg rect {
    stroke: ${({ isLight }) => (isLight ? "#d4d4d4" : "#3a3335")};
    stroke-width: 4;
    stroke-dasharray: 353, 0;
    stroke-dashoffset: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;
    height: 70px;

    @media screen and (max-width: 320px) {
      width: none;
    }
  }

  & .btn:hover svg rect {
    stroke-width: 4;
    stroke-dasharray: 217, 543;
    stroke-dashoffset: 437;
  }

  & .imageLanguage {
    height: 100%;
    margin-right: 10px;
  }
`;

export const Footer = styled.section`
  padding: 75px 0 25px;
`;

export const FooterImage = styled.img`
  width: 50%;
  max-width: 150px;
`;
