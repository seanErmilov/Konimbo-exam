import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { BASE_URL } from "./src/api/api.js";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
})