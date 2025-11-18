import { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    // Only initialize on first mount if theme is not set
    if (!theme || theme === undefined) {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    // Apply dark class whenever theme changes
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            src={assets.sun_icon}
            alt=""
            className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setTheme("light")}
            title="Switch to light mode"
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            alt=""
            title="Switch to dark mode"
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
