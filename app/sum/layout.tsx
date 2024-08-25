import NavBar from "@/components/NavBar";
import { NavItem } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "숨최몇 - 몬나 상태이상 카운터",
  description: "잘자라 우리 아가",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar activeItem={NavItem.Sleep} />
      {children}
    </>
  );
}
