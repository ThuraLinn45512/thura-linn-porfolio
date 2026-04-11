/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Useful for static exports or if not using Next.js Image component yet
    },
};

export default nextConfig;
