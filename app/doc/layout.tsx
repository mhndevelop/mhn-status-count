import NavBar from "@/components/NavBar";
import { NavItem } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "독최몇 - 몬나 상태이상 카운터",
  description: "심각한 상태이상 중독입니다",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar activeItem={NavItem.Poison} />
      {children}
    </>
  );
}
