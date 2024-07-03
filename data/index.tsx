import { InputData, Tab, TeamData } from "@/types";
import { MainInformation } from "@/components/MainInformation";
import { VacationInformation } from "@/components/VacationInformation";

export const tabs: Tab[] = [
  { id: 1, label: "Основная информация", component: <MainInformation /> },
  { id: 2, label: "Отпуск", component: <VacationInformation /> },
];

export const inputData: InputData[] = [
  {
    input: "firstName",
    label: "Имя",
    placeholder: "Юрий",
    width: "half",
  },
  {
    input: "lastName",
    label: "Фамилия",
    placeholder: "Герыш",
    width: "half",
  },
  {
    input: "middleName",
    label: "Отчество",
    placeholder: "Андреевич",
    width: "full",
  },
  {
    input: "dateOfBirth",
    label: "Дата рождения",
    placeholder: "06.01.2014",
    width: "half",
  },
  {
    input: "dateOfEmployment",
    label: "Дата трудоустройства",
    placeholder: "15.05.2020",
    width: "half",
  },
  {
    input: "country",
    label: "Страна",
    placeholder: "Россия",
    width: "half",
  },
  {
    input: "city",
    label: "Город",
    placeholder: "Красноярск",
    width: "half",
  },
  {
    input: "position",
    label: "Должноcть",
    placeholder: "UI/UX designer",
    width: "half",
  },
  {
    input: "email",
    label: "Почта",
    placeholder: "test@gmail.com",
    width: "half",
    type: "email",
  },
];

export const teamData: TeamData[] = [
  {
    id: 1,
    image: "/images/team-member-avatar-2.png",
    position: "Junior UI/UX designer",
    name: "John Smith",
  },
  {
    id: 2,
    image: "/images/team-member-avatar-7.png",
    position: "Middle Product Design TeamLead",
    name: "Sarah Brown",
  },
  {
    id: 3,
    image: "/images/team-member-avatar-3.png",
    position: "Middle Android Developer",
    name: "David Taylor",
  },
  {
    id: 4,
    image: "/images/team-member-avatar-1.png",
    name: "David Taylor",
    position: "Middle Head of Service",
  },
  {
    id: 5,
    image: "/images/team-member-avatar-4.png",
    name: "James Miller",
    position: "CEO",
  },
  {
    id: 6,
    image: "/images/team-member-avatar-5.png",
    name: "Henry Jones",
    position: "Middle QA",
  },
  {
    id: 7,
    image: "/images/team-member-avatar-6.png",
    name: "Charles Williams",
    position: "Junior Employee Support Manager",
  },
];
