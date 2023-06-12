const nextConfig = {
    reactStrictMode: true, // Enable strict mode for React
    images: { domains: ["img.icons8.com"] },
    // Add other configuration options here
    // For example:
    // target: 'serverless', // Configure the target build

    // Add your custom webpack configuration
    webpack: (config, { dev, isServer }) => {
        // Add your custom webpack configuration here
        // For example:
        // config.plugins.push(new MyCustomPlugin())

        // You can conditionally modify the webpack configuration based on the environment
        if (dev && isServer) {
            // Modify the configuration for development server
        }

        // Add watchOptions configuration
        config.watchOptions = {
            poll: 300, // Set the polling interval to 300 milliseconds
        };

        return config;
    },
};

module.exports = nextConfig;
