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
  Certificates,
  CertificateCarouselItem,
} from "./styles";

import { i18n } from "../../translate/i18n";

import ChangeLanguageButton from "../../components/ChangeLanguageButton";

import {
  certificates,
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
import Carousel from "react-multi-carousel";

const Curriculum = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const backToPortfolio = () => {
    history.push("/");
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
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
            <Certificates>
              <Title>{i18n.t("curriculum.titles.certificates")}</Title>

              <p>{i18n.t("curriculum.certificates.text")}</p>

              <Carousel
                additionalTransfrom={0}
                arrows={true}
                autoPlay={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                responsive={responsive}
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                showArrow={false}
              >
                {certificates.map((certificate, index) => (
                  <CertificateCarouselItem
                    key={index}
                    style={{ margin: "0 5px", cursor: "pointer" }}
                  >
                    <a href={certificate.link} target="_blank" rel="noreferrer">
                      <img
                        src={certificate.image}
                        alt="Imagem de algum certificado"
                      />
                    </a>
                  </CertificateCarouselItem>
                ))}
              </Carousel>
            </Certificates>
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
