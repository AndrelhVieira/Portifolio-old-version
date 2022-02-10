import { Container, IconsDiv, CurriculumDiv, Button } from "./styles";
import ContactForm from "../ContactForm";

import { contact } from "../../providers/contact";

import { i18n } from "../../translate/i18n";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();

  const goToCurriculum = () => {
    history.push("/curriculum");
  };

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
          <Button>
            <button class="btn" onClick={goToCurriculum}>
              <svg>
                <rect
                  x="5"
                  y="5"
                  rx="20"
                  fill="none"
                  stroke="url(#grad1)"
                  width="266"
                  height="50"
                ></rect>
              </svg>
              <span>{i18n.t("contact.cvBtn")}</span>
            </button>
          </Button>
        </CurriculumDiv>
      </Container>
    </>
  );
};

export default Contact;
