import { Theme, ThemeId } from "@/types/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useTheme } from "react-daisyui";
import { useLocalStorage } from "react-use";

const THEME_STORAGE_KEY = "basejump-theme";

export const themes: {
  [key in ThemeId]: Theme;
} = {
  dark: {
    name: "Dark",
    id: "dark",
    Icon: MoonIcon,
  },
  light: {
    name: "Light",
    id: "light",
    Icon: SunIcon,
  },
  luxury: {
    name: "Luxury",
    id: "luxury",
    Icon: SunIcon,
  },
  "eggshell-delights": {
    name: "Eggshell Delights",
    id: "eggshell-delights",
    Icon: SunIcon,
  },
  "midnight-envy": {
    name: "Midnight Envy",
    id: "midnight-envy",
    Icon: MoonIcon,
  },
};
const defaultThemeId: ThemeId = "light";

export default function useThemeStorage() {
  const [value, setValue, remove] = useLocalStorage(
    THEME_STORAGE_KEY,
    defaultThemeId
  );
  const { theme: themeId, setTheme: setThemeId } = useTheme(defaultThemeId);

  useEffect(() => {
    setThemeId(value);
  }, [value, setThemeId]);

  function setInternalTheme(themeId: ThemeId) {
    setValue(themeId);
  }

  return {
    theme: (themes[themeId] as Theme) || themes["light"],
    availableThemes: Object.values(themes),
    setTheme: setInternalTheme,
    clearTheme: remove,
  };
}
