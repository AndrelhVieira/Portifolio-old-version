import {
  competencesProps,
  coursesProps,
  infosProps,
  professionalProps,
} from "../types/interfaces";

import { i18n } from "../translate/i18n";

import alura from "../assets/alura.png";
import basci2 from "../assets/basic-2.png";
import igniteReactNative from "../assets/ignite-react-native.png";
import intermediate1 from "../assets/intermediate-1.png";
import intermediate2 from "../assets/intermediate-2.png";
import kenzieFullStack from "../assets/kenzie-fullstack.png";
import kenzieFront from "../assets/kenzieFrontEnd.png";
import upperIntermediate1 from "../assets/upper-intermediate-1.png";
import upperIntermediate2 from "../assets/upper-intermediate-2.png";

const getAge = (): number => {
  const currentDate = new Date().getTime();
  const birthDate = new Date("09/18/2002").getTime();
  const difference = currentDate - birthDate;

  const allDaysWithoutLeapYear = difference / (1000 * 3600 * 24);
  const ageWithoutLeapYear = Math.floor(allDaysWithoutLeapYear / 365);

  const allDaysWithLeapYear =
    allDaysWithoutLeapYear - Math.ceil(ageWithoutLeapYear / 4);

  return Math.floor(allDaysWithLeapYear / 365);
};

export const infos: infosProps[] = [
  {
    info: `${getAge()} - ${i18n.t("curriculum.nacionality")}`,
  },
  {
    info: "andreluizhillerv@gmail.com",
    link: "mailto:andreluizhillerv@gmail.com",
  },
  {
    info: "Curitiba - Paraná",
  },
  {
    info: "(41) 98889-3441",
  },
];

export const competences: competencesProps[] = [
  { name: "HTML5, CSS3, JavaScript" },
  { name: "ReactJS, React Native, TypeScript" },
  { name: "Python, Flask, Django, PHP" },
  { name: "PostgreSQL, Oracle, MySQL" },
  { name: `${i18n.t("curriculum.competences.rest")}` },
  { name: "GIT, GitHub" },
  { name: "Scrum, Kanban" },
  { name: `${i18n.t("curriculum.competences.englishLevel")}` },
];

export const courses: coursesProps[] = [
  {
    name: "Kenzie Academy Brasil",
    course: `${i18n.t("curriculum.courses.kenzie")}`,
    date: `${i18n.t("curriculum.courses.dates.kenzie")}`,
  },
  {
    name: "PUC PR EAD",
    course: `${i18n.t("curriculum.courses.puc")}`,
    date: `${i18n.t("curriculum.courses.dates.puc")}`,
  },
  {
    name: "Rocketseat",
    course: `${i18n.t("curriculum.courses.rocketseat")}`,
    date: `${i18n.t("curriculum.courses.dates.rocketseat")}`,
  },
];

export const professional: professionalProps[] = [
  {
    company: "Kenzie Academy Brasil",
    office: `${i18n.t("curriculum.professional.office.kenzie")}`,
    date: `${i18n.t("curriculum.professional.dates.kenzie")}`,
    description: `${i18n.t("curriculum.professional.resume.kenzie")}`,
  },
  {
    company: "Mannesoft",
    office: `${i18n.t("curriculum.professional.office.mannesoft")}`,
    date: `${i18n.t("curriculum.professional.dates.mannesoft")}`,
    description: `${i18n.t("curriculum.professional.resume.mannesoft")}`,
  },
  {
    company: "DB1 Group - DB1 Global Software",
    office: `${i18n.t("curriculum.professional.office.db1")}`,
    date: `${i18n.t("curriculum.professional.dates.db1")}`,
    description: `${i18n.t("curriculum.professional.resume.db1")}`,
  },
];

export const certificates = [
  {
    image: igniteReactNative,
    link: "https://drive.google.com/file/d/1-oEDuWC_ZSmw5MaDCHvWH0Vu3AkfH3r8/view?usp=share_link",
  },
  {
    image: kenzieFullStack,
    link: "https://drive.google.com/file/d/11dl8FmaqYvla0ntInZL5ZkvQUj1tjCML/view?usp=share_link",
  },
  {
    image: kenzieFront,
    link: "https://drive.google.com/file/d/1SqArFYHbiORqaNOAYE9guy9q5pB4HsOk/view?usp=share_link",
  },
  {
    image: upperIntermediate2,
    link: "https://drive.google.com/file/d/1wiUSAso_Lbsf12jaDA1tLQXJs6VEUFby/view?usp=share_link",
  },
  {
    image: upperIntermediate1,
    link: "https://drive.google.com/file/d/1w9bnfZ_v0xBAcH2hbP5Y6zMqpCjlbJx-/view?usp=share_link",
  },
  {
    image: intermediate2,
    link: "https://drive.google.com/file/d/11hjqOhVqoVuGn1v7VnwslHv3E-anAJOT/view?usp=share_link",
  },
  {
    image: intermediate1,
    link: "https://drive.google.com/file/d/1d2vMgVTH4Qo-1QWc1R5cm6H6qM-Tqx78/view?usp=share_link",
  },
  {
    image: basci2,
    link: "https://drive.google.com/file/d/1S6vIeqETze9d5NJGpnxDb0HGBQqK8g3I/view?usp=share_link",
  },
  {
    image: alura,
    link: "https://drive.google.com/file/d/14EV-oJckXWNBo-hVztZkVqdiXH29lWSY/view?usp=share_link",
  },
];
