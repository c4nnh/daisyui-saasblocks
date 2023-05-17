export type ThemeId =
  | "light"
  | "dark"
  | "luxury"
  | "midnight-envy" // Saas Blocks theme
  | "eggshell-delights"; // Saas Blocks theme

export type Theme = {
  name: string;
  id: ThemeId;
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
};
