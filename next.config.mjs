/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
          port: '',
          pathname: '/**',
          search: '',
        },
      ],
    images: {
        domains: ['advantage-backend.onrender.com', 'localhost', 'i.ibb.co', 'i.ibb.co.com'],
    },
    env:{
        API_URL: 'https://advantage-backend.onrender.com',
        // API_URL: 'http://localhost:4000'
    }
};

export default nextConfig;
