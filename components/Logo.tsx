import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo: FC = () => {
  return (
    <Link href="/">
      <Image src="/images/logo.svg" alt="logo" width={180} height={40} />
    </Link>
  );
};
