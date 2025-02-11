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
      animation: {
        'scroll-left': 'scroll-left 12s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
