/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                pathname: "**",
                port: "3000",
                hostname: "localhost",
            },
        ],
    },
};

module.exports = nextConfig;
