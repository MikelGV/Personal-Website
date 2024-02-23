//import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mikel Galdos",
  description: "Mikel Galdos Portfolio",
};

export default function RootLayout({ children }) {
  return (
   <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>  
  );
}
