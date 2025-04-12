import { defineConfig } from 'astro-icon';


export default defineConfig({
    collections: {
        tabler: () => import('@iconify-json/tabler/icons.json'),
    },
}); 