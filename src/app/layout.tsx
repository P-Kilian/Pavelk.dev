import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "./Theme/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pavel Kilian",
  description: "A front-end developer from Bruxelles, Belgium.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="max-w-[800px] mx-auto px-5">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
