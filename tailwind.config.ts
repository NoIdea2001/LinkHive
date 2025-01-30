import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      opacity: {
        '10':'0.1',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'sf-display': ['SF Compact Display', 'system-ui', 'sans-serif'],
        'sf-text': ['SF Compact Text', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
