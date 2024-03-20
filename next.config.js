/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
        config,
        {isServer}
      ) => {
        // rule to handle canvas.node module
        config.module.rules.push({test: /\.node$/, use: 'url-loader'})
        if(!isServer) {
            config.externals.push('canvas');
        }
        return config
      },
    
}

module.exports = nextConfig
