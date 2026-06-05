/**
 * Public site config from env (set in .env.local as NEXT_PUBLIC_*).
 */
const readPublicEnv = (key: string, fallback: string): string => {
  const value = process.env[key];
  return typeof value === "string" && value.length > 0 ? value : fallback;
};

export const siteConfig = {
  name: readPublicEnv("NEXT_PUBLIC_APP_NAME", "Sloptimal"),
  description: readPublicEnv(
    "NEXT_PUBLIC_APP_DESCRIPTION",
    "Web preview of the Sloptimal app",
  ),
} as const;
