import { create } from "zustand";
import { persist } from "zustand/middleware";
interface ThemeState {
  currentTheme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      currentTheme: "light",
      setTheme(theme) {
        set(() => ({ currentTheme: theme }));
      },
    }),
    {
      name: "theme",
    }
  )
);
