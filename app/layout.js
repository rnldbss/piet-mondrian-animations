import "./globals.css";
import { Montserrat } from "next/font/google";
import { Navbar } from "./components/nav";
import { Social } from "./components/social";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="h-[100svh] w-screen relative bg-slate-50 overflow-x-hidden">
          <div
            className="p-3 sm:p-5 md:p-8 lg:p-10 absolute top-0 left-0 w-screen 
          h-screen"
          >
            <div className=" border-2 relative h-full w-full border-slate-400 overflow-hidden bg-slate-100">
              <div className="absolute top-3 left-3 text-2xl text-slate-600">
                <Link href="/"> brand</Link>
              </div>
              <Navbar />
              {children}
              <Social />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
