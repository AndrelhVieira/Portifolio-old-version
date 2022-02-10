import { useEffect, useState } from "react";

import {
  Container,
  Header,
  Image,
  Name,
  Profession,
  PersonalInfos,
  Info,
  Title,
  PersonalResume,
  PersonalText,
  MainCompetences,
  Courses,
  CourseContent,
  CourseName,
  Course,
  CourseDate,
  Professional,
  ProfessionalContent,
  ProfessionalCompany,
  ProfessionalOffice,
  ProfessionalDate,
  ProfessionalDescription,
  Button,
  Footer,
  FooterImage,
  IconsDiv,
  Contact,
} from "./styles";

import { i18n } from "../../translate/i18n";

import ChangeLanguageButton from "../../components/ChangeLanguageButton";

import {
  competences,
  courses,
  infos,
  professional,
} from "../../providers/personalInfos";

import profile from "../../assets/perfil.png";

import footerImg from "../../assets/alv-logo.png";

import { contact } from "../../providers/contact";

import { useHistory } from "react-router-dom";

import HashLoader from "react-spinners/HashLoader";
import { motion } from "framer-motion";
import { Loader } from "../Homepage/styles";
import Logo from "../../assets/alv-logo.png";

const Curriculum = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const backToPortfolio = () => {
    history.push("/");
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loader>
          <img src={Logo} alt="Logo ALV" />
          <HashLoader
            speedMultiplier={3}
            loading={loading}
            size={60}
            color="#d4d4d4"
          />
        </Loader>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Container>
            <ChangeLanguageButton />
            <Header>
              <Image src={profile} />
              <Name>André Luiz Hiller Vieira</Name>
              <Profession>{i18n.t("cover.coverDescription")}</Profession>
              <PersonalInfos>
                {infos.map((item, key) =>
                  !item.link ? (
                    <Info key={key}>{item.info}</Info>
                  ) : (
                    <Info key={key}>
                      <a href={item.link}>{item.info}</a>
                    </Info>
                  )
                )}
              </PersonalInfos>
            </Header>
            <PersonalResume>
              <Title>{i18n.t("curriculum.titles.resume")}</Title>
              <PersonalText>{i18n.t("curriculum.textResume")}</PersonalText>
            </PersonalResume>
            <MainCompetences>
              <Title>{i18n.t("curriculum.titles.mainCompetences")}</Title>
              <ul>
                {competences.map((item, key) => (
                  <li key={key}>{item.name}</li>
                ))}
              </ul>
            </MainCompetences>
            <Courses>
              <Title>{i18n.t("curriculum.titles.courses")}</Title>
              <CourseContent>
                {courses.map((item, key) => (
                  <div key={key}>
                    <CourseName>{item.name}</CourseName>
                    <Course>{item.course}</Course>
                    <CourseDate>{item.date}</CourseDate>
                  </div>
                ))}
              </CourseContent>
            </Courses>
            <Professional>
              <Title>{i18n.t("curriculum.titles.professional")}</Title>
              <ProfessionalContent>
                {professional.map((item, key) => (
                  <div key={key}>
                    <ProfessionalCompany>{item.company}</ProfessionalCompany>
                    <ProfessionalOffice>{item.office}</ProfessionalOffice>
                    <ProfessionalDate>{item.date}</ProfessionalDate>
                    <ProfessionalDescription>
                      {item.description}
                    </ProfessionalDescription>
                  </div>
                ))}
              </ProfessionalContent>
            </Professional>
            <Contact>
              <Title>{i18n.t("curriculum.titles.contact")}</Title>
              <p>{i18n.t("curriculum.contact")}</p>
              <IconsDiv>
                {contact.map((icon, index) => (
                  <div>
                    <a
                      href={icon.link}
                      key={index}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {icon.icon}
                    </a>
                  </div>
                ))}
              </IconsDiv>
              <Button isLight>
                <button class="btn" onClick={backToPortfolio}>
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
                  <span>{i18n.t("curriculum.portfolio")}</span>
                </button>
              </Button>
            </Contact>
            <Footer>
              <FooterImage src={footerImg} />
            </Footer>
          </Container>
        </motion.div>
      )}
    </>
  );
};

export default Curriculum;
