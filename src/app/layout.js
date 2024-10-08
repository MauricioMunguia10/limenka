import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Limenka 360",
    template:"%s | Limenka"
  },
  description: "Incrementa tus ventas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
        <div className="container">
          {children}
        </div>
          <Footer />
      </body>
    </html>
  );
}
