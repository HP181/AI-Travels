/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "plus.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "unsplash.com",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
          },
          {
            protocol: "https",
            hostname: "randomuser.me",
          },
        ],
      },
};

export default nextConfig;
