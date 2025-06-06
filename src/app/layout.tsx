import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import ThemeRegistry from "./ThmeRegistry";
import "./globals.css";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BLANCA CITY - Đô thị "Biểu tượng mới" của Sun Group tại TP Vũng Tàu',
  description: 'Đô thị "Biểu tượng mới" của Sun Group tại TP Vũng Tàu',
};
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // tương ứng với các trọng số (wght) bạn cần
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        style={{
          fontFamily: "Manrope",
        }}
        className={manrope.className}
      >
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
