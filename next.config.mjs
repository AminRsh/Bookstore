/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'ecx.images-amazon.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
