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
  }
`;
