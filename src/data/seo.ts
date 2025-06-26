export const defaultSEO = {
  title: 'New York English Teacher',
  description: 'Professional Business English Coaching and Corporate Training',
  image: '/images/logos/new-york-english-og.jpg',
  imageAlt: 'New York English Teacher logo',
  siteUrl: import.meta.env.SITE || 'https://www.nyenglishteacher.com',
  twitterHandle: '@nyenglishteacher',
  locale: 'en_US',
};

export const generateOGImage = (image: string) => {
  const siteUrl = import.meta.env.SITE || 'https://www.nyenglishteacher.com';
  return new URL(image.startsWith('/') ? image : `/${image}`, siteUrl).toString();
};
