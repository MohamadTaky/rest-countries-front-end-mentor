import isDarkMode from "@/utils/isDarkMode";
import ThemeSwitcherButton from "../theme/ThemeSwitcherButton";
import Link from "next/link";
import Button from "../common/Button";

export default function Header() {
  const theme = isDarkMode();

  return (
    <div className="bg-element-3 sticky top-0 z-50 mx-auto px-4 py-6 shadow-md md:px-16">
      <header className="flex items-center justify-between">
        <Button asChild variant="ghost">
          <Link href="/">
            <h1 className="font-bold">Where in the world?</h1>
          </Link>
        </Button>
        <ThemeSwitcherButton darkMode={theme} />
      </header>
    </div>
  );
}
