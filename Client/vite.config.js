import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0',
  //   port: 5173,
  //   https: {
  //     key: fs.readFileSync('./ssl/localhost.key'),
  //     cert: fs.readFileSync('./ssl/localhost.crt'),
  //   },
  // },
})
