import { SectionHeader, RangeHeader, ListMenu } from "./styles";

import { i18n } from "../../translate/i18n";

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
