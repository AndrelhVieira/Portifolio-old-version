import { SectionHeader, RangeHeader, ListMenu } from "./styles";

const Header = () => {
  const menu = [
    { item: "Sobre", link: "sobre" },
    { item: "Tecnologias", link: "tech" },
    { item: "Portifólio", link: "folio" },
    { item: "Contato", link: "contact" },
  ];

  return (
    <>
      <RangeHeader>
        <ul>
          {menu.map((item, index) => (
            <a href={`#${item.link}`} key={index}>
              <li>{item.item}</li>
            </a>
          ))}
        </ul>
      </RangeHeader>
    </>
  );
};

export default Header;
