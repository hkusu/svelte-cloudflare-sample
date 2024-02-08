/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  webServer: {
    command: "npm run dev",
    port: 8787,
  },
  testDir: "tests",
  testMatch: /(.+\.)?(test|spec)\.[jt]s/,
};

export default config;
