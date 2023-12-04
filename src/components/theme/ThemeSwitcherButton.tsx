"use client";

import Button from "@/components/common/Button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { setCookie } from "@/utils/cookies";

type ThemeSwitcherButtonProps = {
  darkMode: boolean;
};

export default function ThemeSwitcherButton({ darkMode }: ThemeSwitcherButtonProps) {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);
  const handleClick = () => {
    if (isDarkMode) {
      document.body.classList.remove("dark");
      setCookie(`dark=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`);
    } else {
      document.body.classList.add("dark");
      setCookie(`dark=1; expires=${new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)}; path=/`);
    }
    setIsDarkMode((prev) => !prev);
  };
  return (
    <Button variant="ghost" onClick={handleClick}>
      {isDarkMode ? (
        <>
          <MoonIcon />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <SunIcon />
          <span>Light Mode</span>
        </>
      )}
    </Button>
  );
}
