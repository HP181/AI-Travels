"use client";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme;

  return (
    <div className="">
      <button
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors transform ${
          currentTheme === "light" ? "bg-indigo-500 text-white" : "bg-yellow-400 text-white"
        }`}
        onClick={toggleTheme}
        style={{
          transition: "transform 0.2s ease, background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.15)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.target.style.transform = "scale(1.15)")}
      >
        <div className="text-2xl flex justify-center items-center">
          {currentTheme === "light" ? (
            <BsMoon className="text-white" size={15}/>
          ) : (
            <BsSun className="text-white" size={15}/>
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeSwitch;
