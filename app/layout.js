import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Saregama Family Restaurant & Bar | Mumbai–Nashik Highway",
  description:
    "Premium family restaurant & bar near Ghoti, Nashik. Best stop on Mumbai–Nashik highway.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}