import { Button } from "./styles";

const ButtonStyled = ({ isLight, children }) => {
  return (
    <Button isLight={isLight}>
      <a
        href="https://drive.google.com/file/d/1UXju6kkkF2V6gmUiAHQml3JwZDI50jhU/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button class="btn">
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
      </a>
    </Button>
  );
};

export default ButtonStyled;
