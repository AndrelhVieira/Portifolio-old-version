import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  text-align: center;

  & h2 {
    margin: 15px 0 10px;
  }
`;

export const Project = styled.div`
  text-align: center;
  background-color: #d4d4d4;
  color: #3a3335;
  border-radius: 20px;
  margin: 0 5px 25px;
  padding: 5px;
  max-width: 525px;
  cursor: grab;

  @media screen and (min-width: 525px) {
    margin: 0 auto 25px;
  }

  & h3 {
    margin: 10px;
  }

  & img {
    width: 100%;
    border-radius: 20px;
  }

  & a {
    text-decoration: none;
    color: #3a3335;
    font-size: 2.5rem;
    margin: 0 10px;
  }
`;
