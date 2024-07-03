import { FC } from "react";
import { tabs } from "@/data";

export const TabContent: FC<{ activeTab: number }> = ({ activeTab }) => {
  return tabs.map((tab) => (
    <div key={tab.id} className={`${activeTab === tab.id ? "" : "hidden"}`}>
      {tab.component}
    </div>
  ));
};
