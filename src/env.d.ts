/// <reference types="astro/client" />

declare module "*.astro" {
  import type { AstroComponentFactory } from "astro/runtime/server/index.js";
  const Component: AstroComponentFactory;
  export default Component;
  export type { ConnectItem } from "@components/Footer.astro";
}

// Environment variables for Neon PostgreSQL (via Vercel integration)
interface ImportMetaEnv {
  readonly POSTGRES_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
