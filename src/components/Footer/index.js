import { Container } from "./styles";
import GoToTop from "../GoToTop";

import alv from "../../assets/alv-logo.png";

const Footer = () => {
  return (
    <>
      <GoToTop />
      <Container>
        <img src={alv} />
        <h4>&copy; Todos os direitos reservados</h4>
      </Container>
    </>
  );
};

export default Footer;
