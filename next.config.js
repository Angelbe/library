module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ItemsList",
        permanent: true
      }
    ];
  }
}
