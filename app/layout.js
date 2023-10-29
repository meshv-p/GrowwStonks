import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GrowwStonks",
  description:
    "GrowwStonks is a community of investors who share their trades and ideas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
