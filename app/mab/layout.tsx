import NavBar from "@/components/NavBar";
import { NavItem } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "맙최몇 - 몬나 상태이상 카운터",
  description: "마비에 걸려 움직일 수 없다!",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar activeItem={NavItem.Paralysis} />
      {children}
    </>
  );
}
