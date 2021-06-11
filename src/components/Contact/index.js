import { Container, IconsDiv, CurriculumDiv } from "./styles";
import ButtonStyled from "../ButtonStyled";
import ContactForm from "../ContactForm";

import { contact } from "../../providers/contact";

import { i18n } from "../../translate/i18n";

const Contact = () => {
  return (
    <>
      <span id="contact" />
      <Container>
        <h1>{i18n.t("contact.title")}</h1>
        <h3>{i18n.t("contact.text")}</h3>
        <ContactForm />
        <IconsDiv>
          {contact.map((icon, index) => (
            <div>
              <a href={icon.link} key={index} target="_blank" rel="noreferrer">
                {icon.icon}
              </a>
            </div>
          ))}
        </IconsDiv>
        <h1>Curriculum</h1>
        <CurriculumDiv>
          <h3>{i18n.t("contact.cvText")}</h3>
          <ButtonStyled isLight={false}>{i18n.t("contact.cvBtn")}</ButtonStyled>
        </CurriculumDiv>
      </Container>
    </>
  );
};

export default Contact;
