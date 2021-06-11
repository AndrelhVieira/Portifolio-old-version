import { Container } from "./styles";
import GoToTop from "../GoToTop";

import alv from "../../assets/alv-logo.png";

import { i18n } from "../../translate/i18n";

const Footer = () => {
  return (
    <>
      <GoToTop />
      <Container>
        <img src={alv} alt="Logo ALV" />
        <h4>&copy; {i18n.t("footer.reserved")}</h4>
      </Container>
    </>
  );
};

export default Footer;
