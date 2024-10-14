import { ActiveNavBarLinkProps, ChartsGridOptions } from "@/interfaces";

export const dashboardPages:ActiveNavBarLinkProps[] = [
  {
    href: "home",
    name: "Inicio"
  },
  {
    href: "ingresos",
    name: "Ingresos"
  },
  {
    href: "gastos",
    name: "Gastos"
  },
  {
    href: "habitos",
    name: "Hábitos"
  },
]

export const chartsGridOptions:ChartsGridOptions[] = [
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