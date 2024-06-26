/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import typography from "@tailwindcss/typography"

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["lemonade"],
  },
}

