import { Button } from "./styles";

import englishImg from "../../assets/english.svg";
import portugueseImg from "../../assets/portuguese.svg";

const I18N_STORAGE_KEY = "i18nextLng";

const ButtonChangeLanguage = ({ isLight, change_language, children }) => {
  const language = localStorage.getItem(I18N_STORAGE_KEY);
  return (
    <Button isLight={isLight}>
      <button class="btn" onClick={change_language}>
        <img
          src={language === "en" ? portugueseImg : englishImg}
          class="imageLanguage"
          alt="Imagem de bandeira do Brasil ou dos Estados Unidos"
        />
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
        <span>{children}</span>
      </button>
    </Button>
  );
};

export default ButtonChangeLanguage;
