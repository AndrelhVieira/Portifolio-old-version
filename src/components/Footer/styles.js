import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 50%;
    max-width: 175px;
  }

  & h4 {
    font-size: 0.95rem;
  }
`;
