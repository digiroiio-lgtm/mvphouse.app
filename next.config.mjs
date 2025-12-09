/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';

  script-src
    'self'
    'unsafe-inline'
    'unsafe-eval'
    https://js.stripe.com
    https://www.googletagmanager.com
    https://www.google-analytics.com;

  style-src
    'self'
    'unsafe-inline'
    https://fonts.googleapis.com;

  img-src
    'self'
    data:
    blob:
    https://www.google-analytics.com;

  font-src
    'self'
    https://fonts.gstatic.com;

  connect-src
    'self'
    https://api.openai.com
    https://api.anthropic.com
    https://api.stripe.com
    https://www.google-analytics.com
    https://www.googletagmanager.com;

  frame-src
    https://js.stripe.com;

  object-src 'none';
`;

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

const nextConfig = {
  reactStrictMode: true,
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
