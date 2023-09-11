import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-100">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
