import styled from "styled-components";

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
  }

  & .btn svg rect {
    stroke: ${({ isLight }) => (isLight ? "#d4d4d4" : "#3a3335")};
    stroke-width: 4;
    stroke-dasharray: 353, 0;
    stroke-dashoffset: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;
    height: 70px;
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
