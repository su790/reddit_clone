import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import NextProgress from "next-progress";
import { api } from "../utils/api";

import "../styles/globals.css";
import { root } from "../styles/customFonts";
import { useThemeStore } from "../stores/useThemeStore";
import { useEffect } from "react";
import Navbar from "../components/common/navbar/Navbar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const currentTheme = useThemeStore((state) => state.currentTheme);
  useEffect(() => {
    window.document.documentElement.className = "";
    window.document.documentElement.classList.add(currentTheme);
  }, [currentTheme]);

  return (
    <SessionProvider session={session}>
      {
        <style jsx global>
          {root}
        </style>
      }
      <NextProgress options={{ showSpinner: false, color: "#ff4500" }} />
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <Navbar />
      }
      <div className="px-2 sm:px-4 md:px-12 lg:px-16 xl:px-24">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
