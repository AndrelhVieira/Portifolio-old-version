import { Container, Project } from "./styles";
import { DotButton } from "../Technologies/styles";
import Title from "../Title";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { projects, games } from "../../providers/projects";

import { i18n } from "../../translate/i18n";

const Portfolio = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomDot = ({ onClick, active, index, carouselState }) => {
    const { currentSlide } = carouselState;
    return (
      <li>
        <DotButton
          style={{
            background: active ? "#d4d4d4" : "initial",
          }}
          onClick={() => onClick()}
        />
      </li>
    );
  };

  return (
    <>
      <span id="folio" />
      <Container>
        <Title>{i18n.t("portfolio.title")}</Title>
        <p>{i18n.t("portfolio.text")}</p>

        <h2>{i18n.t("portfolio.subtitleProjects")}</h2>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
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
          showDots
          customDot={<CustomDot />}
          showArrow={false}
        >
          {projects.map((project, index) => (
            <Project key={index}>
              <h3>{project.name}</h3>
              <a href={project.github} target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href={project.link} target="_blank">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <img src={project.image} />
            </Project>
          ))}
        </Carousel>

        <h2>{i18n.t("portfolio.subtitleGames")}</h2>
        <Carousel
          additionalTransfrom={0}
          autoPlay
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
          arrows={false}
          showDots
          customDot={<CustomDot />}
        >
          {games.map((game, index) => (
            <Project key={index}>
              <h3>{game.name}</h3>
              <a href={game.github} target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href={game.link} target="_blank">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <img src={game.image} />
            </Project>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Portfolio;
