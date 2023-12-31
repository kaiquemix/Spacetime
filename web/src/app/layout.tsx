import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree, Bai_Jamjuree } from "next/font/google";
import { ReactNode } from "react";

const roboto = Roboto({ subsets: ["latin"], variable: '--font-roboto' });
const baiJamjuree = Bai_Jamjuree({subsets: ["latin"], weight:'700', variable: '--font-bai-jamjuree'});

export const metadata: Metadata = {
  title: "NLW SpaceTime",
  description: "Capsula do Tempo construida com NEXT JS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  );
}
