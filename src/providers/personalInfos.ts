import {
  competencesProps,
  coursesProps,
  infosProps,
  professionalProps,
} from "../types/interfaces";

import { i18n } from "../translate/i18n";

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
    name: "Universidade Positivo",
    course: `${i18n.t("curriculum.courses.positivo")}`,
    date: `${i18n.t("curriculum.courses.dates.positivo")}`,
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
    company: "DB1 Global Software",
    office: `${i18n.t("curriculum.professional.office.db1")}`,
    date: `${i18n.t("curriculum.professional.dates.db1")}`,
    description: `${i18n.t("curriculum.professional.resume.db1")}`,
  },
];
