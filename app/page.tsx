import { Header } from "@/components/Header";
import { EmployeeInfo } from "@/components/EmployeeInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full xl:px-[213px]">
      <Header />
      <EmployeeInfo />
    </main>
  );
}
