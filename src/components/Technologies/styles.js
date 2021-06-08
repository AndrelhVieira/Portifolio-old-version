import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  text-align: center;
`;

export const ContainerCarousel = styled.div`
  max-width: 625px;
  margin: auto;
`;

export const TechnoCard = styled.div`
  text-align: center;
  margin: 25px;
  cursor: grab;

  & i {
    font-size: 5rem;
  }

  & p {
    font-size: 1.25rem;
  }

  &:hover {
    color: ${(props) => props.hoverColor};
    transition-duration: 0.25s;
  }
`;

export const DotButton = styled.button`
  border: 1px solid #d4d4d4;
  background-color: red;
  height: 7px;
  margin: 3px;
  outline: none;
`;
