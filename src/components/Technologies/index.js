import { Container, TechnoCard, DotButton, ContainerCarousel } from "./styles";
import Title from "../Title";

import tecno from "../../providers/technologies";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Technologies = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 625 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 625, min: 464 },
      items: 2,
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
          style={{ background: active ? "#d4d4d4" : "initial" }}
          onClick={() => onClick()}
        />
      </li>
    );
  };

  return (
    <>
      <span id="tech" />
      <Container>
        <Title>Tecnologias</Title>
        <p>
          Estas são algumas das tecnologias e ferrametas com as quais trabalho.
        </p>
        <ContainerCarousel>
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
            {tecno.map((tecno, index) => (
              <TechnoCard key={index} hoverColor={tecno.hoverColor}>
                {tecno.icon}
                <p>{tecno.name}</p>
              </TechnoCard>
            ))}
          </Carousel>
        </ContainerCarousel>
      </Container>
    </>
  );
};

export default Technologies;
