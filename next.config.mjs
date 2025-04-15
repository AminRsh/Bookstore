/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'ecx.images-amazon.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'tij3v6m9v1tiszdk.public.blob.vercel-storage.com',
                pathname: '**',
            },
        ],
    },
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        return config;
    },
};

export default nextConfig;


