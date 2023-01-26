import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../styles/globals.css";
import { root } from "../styles/customFonts";
import { useThemeStore } from "../stores/useThemeStore";
import { useEffect } from "react";

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
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
