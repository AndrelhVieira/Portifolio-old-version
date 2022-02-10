import { RangeHeader, ItemCV } from "./styles";

import { i18n } from "../../translate/i18n";

import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const menu = [
    { item: i18n.t("header.menuItems.about"), link: "sobre" },
    { item: i18n.t("header.menuItems.technologies"), link: "tech" },
    { item: i18n.t("header.menuItems.portfolio"), link: "folio" },
    { item: i18n.t("header.menuItems.contact"), link: "contact" },
  ];

  const goToCurriculum = () => {
    history.push("/curriculum");
  };

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
          <ItemCV onClick={goToCurriculum}>
            {i18n.t("header.menuItems.cv")}
          </ItemCV>
        </ul>
      </RangeHeader>
    </>
  );
};

export default Header;
