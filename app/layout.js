import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import AIAssistantWidget from "./components/ai-assistant-widget";
import CursorSpotlight from "./components/helper/cursor-spotlight";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vanshika Chanana | Full-Stack & AI Systems Developer",
  description:
    "Portfolio of Vanshika Chanana. Software developer specializing in Next.js, React.js, Redux Toolkit, Node.js, Express.js, and Multi-Agent AI systems.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-mode="dark" data-theme="purple">
      <body className={`${inter.className} selection:bg-violet-500 selection:text-white relative`}>
        <CursorSpotlight />
        <ToastContainer theme="dark" />
        <main className="min-h-screen relative mx-auto px-4 sm:px-8 lg:max-w-[72rem] xl:max-w-[80rem] 2xl:max-w-[94rem]">
          <Navbar />
          {children}
          <AIAssistantWidget />
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
