/** @type {import('next').NextConfig} */

const moduleExports = {
  reactStrictMode: true,
  rewrites: async () => ({
    fallback: [
      {
        source: '/:path*',
        destination: 'https://hack-n-heal.herokuapp.com/:path*'
      }
    ]
  }),
  webpack(config) {
    // inline SVG imports support
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [ /\.(js|ts)x?$/ ]
      },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false
          }
        }
      ]
    })
    return config
  },
  pageExtensions: [ 'page.tsx', 'endpoint.ts' ]
}

module.exports = moduleExports
