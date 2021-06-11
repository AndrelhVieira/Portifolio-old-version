import styled from "styled-components";

export const Button = styled.div`
  & .btn {
    border: none;
    outline: none;
    position: relative;
    display: inline-block;
    width: 277px;
    height: 50px;
    font-size: 1em;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 17px;
    color: ${({ isLight }) => (isLight ? "#d4d4d4" : "#3a3335")};
    margin: 0 auto 25px;
  }

  & .btn svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 277px;
    height: 70px;
  }

  & .btn svg rect {
    stroke: ${({ isLight }) => (isLight ? "#d4d4d4" : "#3a3335")};
    stroke-width: 4;
    stroke-dasharray: 353, 0;
    stroke-dashoffset: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;
  }

  & .btn:hover svg rect {
    stroke-width: 4;
    stroke-dasharray: 204, 543;
    stroke-dashoffset: 437;
  }
`;
