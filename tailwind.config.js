/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Rebrand: "Parallel" Palette
                indigo: {
                    500: '#4F46E5', // Primary Action
                },
                sky: {
                    400: '#0EA5E9', // Highlight
                    500: '#0EA5E9',
                },
                gray: {
                    100: '#F3F4F6', // "Cool White" text replacement
                },
                slate: {
                    950: '#020617', // Deep consistent background
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
