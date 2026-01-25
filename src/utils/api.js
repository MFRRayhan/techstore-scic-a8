export const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        return ''; // Browser should use relative path
    }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
};
