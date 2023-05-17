import useThemeStorage from "@/utils/use-theme-storage";
import { SunIcon } from "@heroicons/react/outline";
import { Button, Dropdown } from "react-daisyui";

const ThemeSelector = () => {
  const { theme, availableThemes, setTheme } = useThemeStorage();

  return (
    <Dropdown vertical="top" horizontal="left">
      <Button color="ghost" shape="square">
        {!theme ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <theme.Icon className="h-5 w-5" />
        )}
      </Button>
      <Dropdown.Menu className="w-60">
        {Object.values(availableThemes).map((themeOption) => (
          <Button
            key={`theme-${themeOption.id}`}
            color="ghost"
            onClick={() => setTheme(themeOption.id)}
            className="justify-between"
          >
            <div className="flex items-center">
              <themeOption.Icon className="h-5 w-5 mr-2" />
              {themeOption.name}
            </div>
            {theme.id === themeOption.id && (
              <span className="text-base-500">✓</span>
            )}
          </Button>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ThemeSelector;
