import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  background-color: #d4d4d4;
  color: #3a3335;

  & h1 {
    border-bottom: 5px solid #3a3335;
    text-align: center;
    font-size: 2rem;
    margin: auto;
    padding-bottom: 5px;
    max-width: 250px;
  }

  & h3 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 300;
    max-width: 500px;
    margin: 10px auto;
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;

  & a {
    color: #3a3335;
    font-size: 3rem;

    @media screen and (min-width: 525px) {
      font-size: 4rem;
    }

    &:hover {
      transition-duration: 0.25s;
    }
  }
`;

export const CurriculumDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

export const Button = styled.div`
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
