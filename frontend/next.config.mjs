/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org"
      },
      {
        hostname:"jio-clone-backend-2.onrender.com"
      },
      {
        hostname:"lh3.googleusercontent.com"
      },
      {
        hostname:"localhost"
      }
    ],
  },
};

export default nextConfig;
