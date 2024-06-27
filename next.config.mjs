import nextPWA from "next-pwa";
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withPWA = nextPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.gamezop.com',
            }
        ]
    },
    webpack: (config) => {
        config.resolve.alias['@icons'] = path.join(__dirname, 'src/assets/images/icons')
        return config;
    }
};

export default withPWA(nextConfig);