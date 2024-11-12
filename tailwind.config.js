// tailwind.config.js
import clipPath from 'tailwind-clip-path';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'triangle': 'polygon(100% 0, 0 100%, 100% 100%)',
      },
    },
  },
  plugins: [clipPath],
}
