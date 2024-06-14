import './ui/global.css'
import { montserrat } from './ui/fonts';
import Header from './ui/Header';
import Footer from './ui/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
