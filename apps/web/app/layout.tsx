import "./globals.css";
import type { Metadata } from "next";
import SocketProvider from "./(context)/SocketProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project by Subhash",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SocketProvider>{children}</SocketProvider>
      </body>
    </html>
  );
}
