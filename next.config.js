const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ["res.cloudinary.com"],
      },
      pageExtensions: ["mdx", "jsx", "js"],

      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
          config.resolve.fallback.dns = false;
          config.resolve.fallback.net = false;
        }

        return config;
      },

      reactStrictMode: true,
      trailingSlash: true,

      env: {
        MONGODB_URI:
          "",
      },
    };
  } else {
    return {
      images: {
        domains: ["res.cloudinary.com"],
      },
      pageExtensions: ["mdx", "jsx", "js"],

      reactStrictMode: true,
      trailingSlash: true,

      env: {
        MONGODB_URI:
          "",
      },
    };
  }
};
