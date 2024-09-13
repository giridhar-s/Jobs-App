/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   colors: {
    primary: "#1D4ED8",
    secondary: "#F97316",
    lightBlue: "#60A5FA",
    background: "#F9FAFB",
    lightGray: "#E5E7EB",
    darkGray: "#374151",
    black: "#111827",
    success: "#10B981",
    error: "#EF4444",
   },
  },
 },
 plugins: [],
};
