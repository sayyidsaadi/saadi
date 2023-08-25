"use client";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useState, useEffect } from "react";

const Mode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <div className="mode absolute top-3 right-3">
        <button
          className="bg-color-bg-primary-variant p-2 rounded-full "
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <LightModeIcon className="dard-st" />
          ) : (
            <NightlightIcon className="dard-st" />
          )}
        </button>
      </div>
    </>
  );
};

export default Mode;
