export interface ActiveNavBarLinkProps {
  name: string
  href: string
}

export interface ChartsGridOptions {
  isVisible: boolean
  title: string
  difference: number
  dateReference: string
}

export interface PageLink {
  href: string
  name: string
}

export interface ChartsControls {
  visibleCharts: VisibleChart[]
}

export interface ChartsGrid {
  initialChartsStructure: VisibleChart[]
}


export interface VisibleChart {
  period: Period
  visible: boolean
  data: []
  balance: number
}

export type Period = "Hoy" | "Esta semana" | "Este mes" | "Este año";

export type ChartsStructure = VisibleChart[]
