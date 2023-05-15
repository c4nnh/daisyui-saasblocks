import Logo from "@/components/basejump-default-content/logo";
import { Theme } from "@/types/theme";
import useHeaderNavigation from "@/utils/content/use-header-navigation";
import useThemeStorage from "@/utils/use-theme-storage";
import { MenuIcon } from "@heroicons/react/outline";
import { useUser } from "@supabase/auth-helpers-react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Navbar } from "react-daisyui";

type Props = {
  toggleSidebar: () => void;
};

const ContentHeader = ({ toggleSidebar }: Props) => {
  const user = useUser();
  const router = useRouter();
  const { availableThemes, theme, setTheme } = useThemeStorage();

  const { t } = useTranslation("content");

  const navigation = useHeaderNavigation();

  return (
    <Navbar className="flex justify-between items-center md:px-8 py-4 max-w-screen-xl mx-auto">
      <div className="flex gap-2">
        {router.asPath !== "/" && (
          <Link href="/" passHref className="mr-4 cursor-pointer">
            <Logo size="sm" />
          </Link>
        )}
        <div className="hidden lg:flex gap-4">
          {navigation.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              passHref
              className="btn btn-ghost"
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex">
        <select
          className="select select-bordered w-full max-w-xs"
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
        >
          {availableThemes.map((item) => (
            <option key={item} className="capitalize">
              {item}
            </option>
          ))}
        </select>
        {!!user ? (
          <Link href="/dashboard" passHref className="btn btn-ghost">
            {t("dashboard")}
          </Link>
        ) : (
          <>
            <Link href="/login" passHref className="btn btn-ghost">
              {t("login")}
            </Link>
            <Link href="/signup" passHref className="btn btn-ghost">
              {t("signUp")}
            </Link>
          </>
        )}
      </div>
      <div className="block lg:hidden">
        <Button color="ghost" onClick={toggleSidebar}>
          <MenuIcon className="w-6 h-6" />
        </Button>
      </div>
    </Navbar>
  );
};

export default ContentHeader;
