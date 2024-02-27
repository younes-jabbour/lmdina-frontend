import Navbar from "../components/navbar";
import "./globals.css";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative h-screen bg-gray-100">
        <Navbar />
        <div className="m-2">{children}</div>
      </body>
    </html>
  );
}
