/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    compiler: {
        styledComponents: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
