import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;

    @media screen and (min-width: 525px) {
      flex-direction: row;
    }
  }

  & img {
    width: 100%;
    max-width: 250px;

    @media screen and (min-width: 525px) {
      width: 50%;
    }
  }
`;

export const TextAboutMe = styled.p`
  text-align: justify;
  max-width: 400px;
  margin: 0 auto 15px;

  @media screen and (min-width: 525px) {
    margin: 0 15px 0 0;
  }
`;
