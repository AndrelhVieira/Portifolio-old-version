import styled from "styled-components";

import background from "../../assets/background-notebook.png";

export const StyledCover = styled.section`
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 150px;
    position: relative;
    top: -50px;
  }

  & h1 {
    margin: 5px;
    font-size: 1.75rem;
    font-weight: 300;

    @media screen and (min-width: 525px) {
      font-size: 2.5rem;
    }
  }

  & h3 {
    margin: 5px;
    font-size: 1.25rem;
    font-weight: 300;

    @media screen and (min-width: 525px) {
      font-size: 1.5rem;
    }
  }

  & a i {
    font-size: 3rem;
    position: absolute;
    bottom: 50px;
    text-decoration: none;
    color: #d4d4d4;
  }
`;
