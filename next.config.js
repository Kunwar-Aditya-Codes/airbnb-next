/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'images.unsplash.com'],
  },
  env: {
    mapbox_key:
      'pk.eyJ1Ijoia3Vud2FyLWFkaXR5YSIsImEiOiJjbDI4a21vczIwYWR4M2dtbW5hYmkwMDFrIn0.qKdztzlKabzjBxWjcX5npA',
  },
};

module.exports = nextConfig;
