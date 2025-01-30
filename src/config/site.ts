export type SiteConfig = typeof siteConfig;

export const APP_URL = process.env.APP_URL as string;

export const siteConfig = {
  name: 'Blog AI',
  metaTitle: 'Bring your visions to life by innovative technologies ',
  description: 'Convert your video or audio into a Blog Post in seconds with the power of AI!',
  ogImage: `${APP_URL}/og-image.jpg`,
  telegram: 'https://t.me/var-meta',
  twitter: 'https://twitter.com/var-meta',
  linkedin: 'https://www.linkedin.com/showcase/var-meta',
  facebook: 'https://www.facebook.com/var-meta',
  email: 'contact@var-meta.com',
};