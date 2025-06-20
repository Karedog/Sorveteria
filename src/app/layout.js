import "./globals.css";
import Topo from "@/componentes/topo/topo";
import Footer from "@/componentes/footer/footer";


export const metadata = {
  title: "Sorveteria",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Topo/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
