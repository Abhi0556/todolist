import { Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-poppins",
  weight: ["400","700"],
});

export const metadata = {
  title: "To-do List",
  description: "App to make you realize your important Work",
  icons:{
    icon:["/favicon.ico?v=4"],
    apple:["/favicon.ico?v=4"],
    shortcut:["/favicon.ico?v=4"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
