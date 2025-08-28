import { create } from "zustand";

export const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("chat-theme") || "light";
  console.log("Loaded theme from localStorage:", savedTheme); // Debug log
  return {
    theme: savedTheme,
    setTheme: (theme) => {
      console.log("Setting theme to:", theme); // Debug log
      localStorage.setItem("chat-theme", theme);
      set({ theme });
    },
  };
});