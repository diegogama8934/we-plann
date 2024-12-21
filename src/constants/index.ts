import { ActiveNavBarLinkProps, ChartsGridOptions, ChartsStructure, PageLink } from "@/interfaces";

export const dashboardPages: ActiveNavBarLinkProps[] = [
  {
    href: "home",
    name: "Inicio"
  },
  {
    href: "earnings",
    name: "Ingresos"
  },
  {
    href: "bills",
    name: "Gastos"
  },
  {
    href: "habits",
    name: "Hábitos"
  },
];

export const chartsGridOptions: ChartsGridOptions[] = [
  {
    isVisible: true,
    title: "Hoy",
    dateReference: "",
    difference: 73
  },
  {
    isVisible: true,
    title: "Esta semana",
    dateReference: "",
    difference: -319
  },
  {
    isVisible: true,
    title: "Este mes",
    dateReference: "",
    difference: 1201
  },
  {
    isVisible: true,
    title: "Este año",
    dateReference: "",
    difference: 3513
  }
];

export const landingPages: PageLink[] = [
  {
    href: "about",
    name: "Acerca de"
  },
  {
    href: "login",
    name: "Iniciar sesión"
  },
  {
    href: "signup",
    name: "Crea tu cuenta"
  },
];

export const fakeChartsData: ChartsStructure = [
  {
    period: "Hoy",
    data: [],
    visible: true,
    balance: 70
  },
  {
    period: "Esta semana",
    data: [],
    visible: true,
    balance: -380
  },
  {
    period: "Este mes",
    data: [],
    visible: true,
    balance: 948
  },
  {
    period: "Este año",
    data: [],
    visible: true,
    balance: 3000
  }
];