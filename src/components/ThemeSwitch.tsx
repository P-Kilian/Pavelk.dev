"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Switch from "@mui/material/Switch";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setIsDark(window.matchMedia("(prefers-color-scheme:dark)").matches);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const isChecked = theme === "dark" || (theme === "system" && isDark);

  return (
    <Switch
      checked={isChecked}
      onChange={() => {
        setTheme(isChecked ? "light" : "dark");
      }}
    />
  );
};

export default ThemeSwitch;
