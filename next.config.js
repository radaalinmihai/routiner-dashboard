/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: "",
  swcMinify: true,
  redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      }
    ]
  },
  experimental: {
    appDir: true,
    swcMinify: true,
  }
}
