/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org"
      },
      {
        hostname:"jio-clone-backend-2.onrender.com"
      }
    ],
  },
};

export default nextConfig;
