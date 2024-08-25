import NavBar from "@/components/NavBar";
import { NavItem } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "폭최몇 - 몬나 상태이상 카운터",
  description: "아 됐고 폭파 몇번 터지냐고",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar activeItem={NavItem.Blast} />
      {children}
    </>
  );
}
