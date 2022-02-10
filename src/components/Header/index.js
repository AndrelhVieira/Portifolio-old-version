import { RangeHeader } from "./styles";

import { i18n } from "../../translate/i18n";

import { Link } from "react-scroll";

const Header = () => {
  const menu = [
    { item: i18n.t("header.menuItems.about"), link: "sobre" },
    { item: i18n.t("header.menuItems.technologies"), link: "tech" },
    { item: i18n.t("header.menuItems.portfolio"), link: "folio" },
    { item: i18n.t("header.menuItems.contact"), link: "contact" },
  ];

  return (
    <>
      <RangeHeader>
        <ul>
          {menu.map((item, index) => (
            <Link
              activeClass="active"
              to={`${item.link}`}
              key={index}
              smooth={true}
              duration={500}
            >
              <li>{item.item}</li>
            </Link>
          ))}
          <a href="https://andreluizv.dev.br/curriculum">
            <li>{i18n.t("header.menuItems.cv")}</li>
          </a>
        </ul>
      </RangeHeader>
    </>
  );
};

export default Header;
