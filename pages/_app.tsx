import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Inter_Tight } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const display = Inter_Tight({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${display.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
