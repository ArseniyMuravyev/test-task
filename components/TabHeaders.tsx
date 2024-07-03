import { FC } from "react";
import { tabs } from "@/data";

interface TabsProps {
  activeTab: number;
  onTabClick: (id: number) => void;
}

export const TabHeaders: FC<TabsProps> = ({ activeTab, onTabClick }) => {
  return (
    <div className="mt-[52px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-[10px] text-sm font-semibold ${activeTab === tab.id ? "text-white border-b-2 border-[#0047BB]" : "text-[#B0B1B6]"}`}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
