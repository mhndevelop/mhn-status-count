import { Metadata } from "next";

export const metadata: Metadata = {
  title: "폭최몇",
  description: "아 됐고 폭파 몇번 터지냐고",
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
        style={{ backgroundColor: "#222", color: "#fff" }}
      >
        {children}
      </body>
    </html>
  );
}

