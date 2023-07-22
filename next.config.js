/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "www.dnd5eapi.co",
            },
            {
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
};

module.exports = nextConfig;
