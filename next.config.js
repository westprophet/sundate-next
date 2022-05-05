/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
// const withOptimizedImages = require('next-optimized-images');
// const withImages = require('next-images');
const path = require('path');

const isProduction =
  process.env.NODE_ENV === 'production' &&
  process.env.REACT_APP_MODE === 'production';

//Next Config
const nextConfig = {
  future: {
    webpack5: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  crossOrigin: 'anonymous',
  trailingSlash: true,
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    isProd: isProduction,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.modules.push(path.resolve('./src/'));
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

//Image next config
const imagesPluginSetting = {
  images: {
    // disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['localhost'],
  },
};

//SASS
const sassPluginSetting = {
  sassOptions: {
    includePaths: ['./src'],
    //Добавляем эту строку в каждый файл scss для того что бы сделать глобальными переменные или миксины
    prependData: `@import "src/scss/global.scss";`,
  },
};

//обьеденяем плагины и конфигурацию
module.exports = withPlugins(
  [imagesPluginSetting, sassPluginSetting],
  nextConfig
);
