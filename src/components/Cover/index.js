import { StyledCover } from "./styles";

import alv from "../../assets/alv-logo.png";

const Cover = () => {
  return (
    <>
      <StyledCover>
        <img src={alv} />
        <h1>André Luiz Vieira</h1>
        <h3>Desenvolvedor Júnior</h3>

        <a href="#sobre" id="arrow">
          <i class="fas fa-angle-double-down"></i>
        </a>
      </StyledCover>
    </>
  );
};

export default Cover;
