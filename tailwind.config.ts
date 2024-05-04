import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['var(--font-helvetica)']
      }
    }
  },
  plugins: [require('@tailwindcss/typography'),],
};
export default config;




// const plugin = require('tailwindcss/plugin')
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//         "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//         "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//         "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//       ],
//       theme: {
//         extend: {
//           fontFamily: {
//             helvetica: ['var(--font-helvetica)']
//           }
//         }
//       },
//       plugins: [require('@tailwindcss/typography')],
// }
