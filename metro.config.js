const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
const withStorybook = require("@storybook/react-native/metro/withStorybook");

module.exports = withNativeWind(
  withStorybook(config),
  { input: "./global.css" },
  {
    websockets: {
      port: 7007,
      host: "localhost",
    },
  }
);
