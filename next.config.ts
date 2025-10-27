import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' https: data:;
      font-src 'self' https: data:;
      connect-src 'self' https:;
      frame-ancestors 'none';
    `.replace(/\n/g, ""),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 🔧 Segurança e performance
  poweredByHeader: false, // oculta "X-Powered-By: Next.js"
  compress: true, // habilita compressão gzip

  // 🔍 Imagens seguras (adicione os domínios que você usa)
  images: {
    domains: ["images.unsplash.com", "cdn.pexels.com", "yourcdn.com"],
    formats: ["image/avif", "image/webp"],
  },

  // 🧱 Headers de segurança globais
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
