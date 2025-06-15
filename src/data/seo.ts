export const defaultSEO = {
  title: 'New York English Teacher',
  description: 'Professional Business English Coaching and Corporate Training',
  image: '/images/logos/new-york-english-og.jpg',
  whatsappImage: '/images/logos/new-york-english-sq-og.jpg', // Square format for WhatsApp
  linkedinImage: '/images/logos/new-york-english-og.jpg', // Using standard OG image for LinkedIn
  siteUrl: import.meta.env.SITE || 'https://www.nyenglishteacher.com',
  twitterHandle: '@nyenglishteacher',
  locale: 'en_US',
  type: 'website'
};

export const generateOGImage = (image: string) => {
  const siteUrl = import.meta.env.SITE || 'https://www.nyenglishteacher.com';
  return new URL(image.startsWith('/') ? image : `/${image}`, siteUrl).toString();
};
