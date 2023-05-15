import { Theme } from "@/types/theme";
import { useEffect } from "react";
import { useTheme } from "react-daisyui";
import { useLocalStorage } from "react-use";

const THEME_STORAGE_KEY = "basejump-theme";

const themes: Theme[] = ["dark", "light", "luxury"];
const defaultTheme: Theme = "luxury";

export default function useThemeStorage() {
  const [value, setValue, remove] = useLocalStorage(
    THEME_STORAGE_KEY,
    defaultTheme
  );
  const { theme, setTheme } = useTheme(value);

  useEffect(() => {
    setTheme(value);
  }, [value, setTheme]);

  function setInternalTheme(theme: Theme) {
    setValue(theme);
  }

  return {
    theme,
    availableThemes: themes,
    setTheme: setInternalTheme,
    clearTheme: remove,
  };
}
