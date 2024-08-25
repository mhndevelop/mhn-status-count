import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GlobalStyles } from "@/components/GlobalStyles";

export const metadata: Metadata = {
  title: "몬나 상태이상 카운터",
  description: "아 됐고 상태이상 몇번 터지냐고",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        suppressHydrationWarning={true}
        style={{ backgroundColor: "#222", color: "#fff", paddingTop: "24px" }}
      >
        <GlobalStyles />
        {children}
      </body>
      <Analytics />
    </html>
  );
}

