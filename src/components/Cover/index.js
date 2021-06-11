import { StyledCover } from "./styles";
import ChangeLanguageButton from "../ChangeLanguageButton";

import { Link } from "react-scroll";

import alv from "../../assets/alv-logo.png";

import { i18n } from "../../translate/i18n";

const Cover = () => {
  return (
    <>
      <StyledCover>
        <img src={alv} />
        <h1>André Luiz Vieira</h1>
        <h3>{i18n.t("cover.coverDescription")}</h3>

        <Link
          activeClass="active"
          to="sobre"
          smooth={true}
          duration={500}
          id="arrow"
        >
          <i class="fas fa-angle-double-down"></i>
        </Link>
      </StyledCover>
      <ChangeLanguageButton />
    </>
  );
};

export default Cover;
