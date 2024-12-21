import { Button } from "@/ui";
import { AiOutlineEye, AiOutlineCalendar, AiOutlineBarChart } from "react-icons/ai";

type Period = "daily" | "weekly" | "monthly" | "yearly";

interface VisibleChart {
  period: Period
  visible: boolean
  data: []
}

interface Props {
  visibleCharts: VisibleChart[]
}

export function ChartsControls({ visibleCharts }: Props) {

  console.log(visibleCharts);

  return (
    <div className="flex gap-8">
      <div className="flex items-center gap-4">
        <span>Ver como: </span>
        <Button className="w-fit" variant="secondary" endIcon={<AiOutlineEye size={24} />}>Mosaicos</Button>
      </div>
      <div className="flex items-center gap-4">
        <span>Métricas: </span>
        <Button className="w-fit" variant="secondary" endIcon={<AiOutlineBarChart size={24} />}>Selecciona las métricas</Button>
      </div>
      <div className="flex items-center gap-4">
        <span>Temporalidad: </span>
        <Button className="w-fit" variant="secondary" endIcon={<AiOutlineCalendar size={24} />}>Selecciona la temporalidad</Button>
      </div>
    </div>
  );
}