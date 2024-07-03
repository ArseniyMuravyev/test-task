import { FC } from "react";
import { Menu } from "./Menu";
import { Profile } from "./Profile";
import { Logo } from "./Logo";

export const Header: FC = () => {
  return (
    <header className="w-full flex justify-between items-center py-6 px-4 md:px-0">
      <Logo />
      <div className="flex items-center gap-[8px]">
        <Profile />
        <Menu />
      </div>
    </header>
  );
};
