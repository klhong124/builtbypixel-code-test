import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: Using webpack instead of Turbopack because Turbopack doesn't support
  // custom webpack loaders like graphql-tag/loader yet
  webpack: (config, { isServer }) => {
    // Add GraphQL loader
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "graphql-tag/loader",
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
