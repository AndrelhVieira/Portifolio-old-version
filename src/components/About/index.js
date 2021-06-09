import { Container, TextAboutMe } from "./styles";
import Title from "../Title";

import perfil from "../../assets/perfil.png";

import { i18n } from "../../translate/i18n";

const About = () => {
  return (
    <>
      <Container>
        <span id="sobre"></span>
        <Title>{i18n.t("about.title")}</Title>
        <div>
          <TextAboutMe>{i18n.t("about.text")}</TextAboutMe>
          <img src={perfil} />
        </div>
      </Container>
    </>
  );
};

export default About;
