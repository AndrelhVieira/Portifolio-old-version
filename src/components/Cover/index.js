import { StyledCover } from "./styles";

import alv from "../../assets/alv-logo.png";

import { i18n } from "../../translate/i18n";

const Cover = () => {
  return (
    <>
      <StyledCover>
        <img src={alv} />
        <h1>André Luiz Vieira</h1>
        <h3>{i18n.t("cover.coverDescription")}</h3>

        <a href="#sobre" id="arrow">
          <i class="fas fa-angle-double-down"></i>
        </a>
      </StyledCover>
    </>
  );
};

export default Cover;
