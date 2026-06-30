/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All assets are downloaded into /public and referenced locally so the clone
    // is fully self-contained. Remote patterns are kept here only as a fallback
    // in case you decide to reference the original hosted images directly.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.berlinoffice-usa.com",
      },
    ],
  },
};

export default nextConfig;
