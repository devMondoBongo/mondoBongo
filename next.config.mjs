/** @type {import('next').NextConfig} */
const nextConfig = async () => {
    return {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'tailwindui.com',
                    port: '',
                    pathname: '/*/**',
                }
            ],
        },
        webpack: (
            config,
            { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
        ) => {
            config.module.rules.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            });

            // Important: return the modified config
            return config;
        },
    };
}

export default nextConfig
