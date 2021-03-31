import styled from "styled-components";

export const RangeHeader = styled.div`
  display: none;
  position: absolute;
  width: 90%;
  margin: auto;

  @media screen and (min-width: 525px) {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translate(-50%);

    & img {
      display: inline;
      position: relative;
      top: 0;
    }

    & ul {
      display: flex;
      list-style: none;
      padding: 0;
      justify-content: center;
      align-items: center;
    }

    & a {
      text-decoration: none;
      color: #d4d4d4;
      margin: 0 5px;
      border-bottom: 5px solid transparent;
      transition: 0.5s;

      &:hover {
        border-bottom: 5px solid #d4d4d4;
      }

      @media screen and (min-width: 575px) {
        margin: 0 10px;
      }
    }
  }
`;
