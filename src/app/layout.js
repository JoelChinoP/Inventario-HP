import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "../components/Header"
import Footer from "../components/Footer"

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`} >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
