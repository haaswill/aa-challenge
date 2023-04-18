import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    env: {
      apiUrl: 'https://agencyanalytics-api.vercel.app/images.json',
    },
  },
});
