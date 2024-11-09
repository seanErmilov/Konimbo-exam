import withMT from "@material-tailwind/react/utils/withMT"

const config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default withMT(config)

