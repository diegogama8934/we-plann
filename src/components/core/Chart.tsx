import { AiOutlineMore } from "react-icons/ai";
import { Button } from "@/ui";
import { AreaChart } from "../tremorChart/Chart";
import type { Period } from "@/interfaces";

const chartdata = [
  {
    date: "Jan 23",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 23",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 23",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 23",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 23",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 23",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 23",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 23",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 23",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 23",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 23",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 23",
    SolarPanels: 3239,
    Inverters: 3736,
  },
]

interface Props {
  balance: number
  period: Period
}

export function Chart({ balance, period }: Props) {


  return (
    <div className="flex flex-col gap-4 p-8 border border-zinc-200 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="font-bold">{period}</h2>
          <span className={`${balance >= 0 ? "text-green-700" : "text-red-700"} font-bold`}>
            {balance >= 0 ? `+ $${balance}` : `- $${balance + (-2 * balance)}`}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-zinc-400">Campo extra</span>
          <Button variant="tertiary" isIconOnly><AiOutlineMore size={24} /></Button>
        </div>
      </div>
      <div className="h-80 rounded-lg relative">
        <AreaChart
          categories={["SolarPanels", "Inverters"]}
          index={"date"}
          colors={["blue", "cyan"]}
          className="h-full"
          data={chartdata}
        />
      </div>
    </div>
  );
}