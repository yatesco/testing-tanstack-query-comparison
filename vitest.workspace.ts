import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    test: {
      name: "browser-mode",
      browser: {
        provider: "playwright", // or 'webdriverio'
        enabled: true,
        name: "chromium", // browser name is required
      },
      include: ["**/browser-mode.test.tsx"],
    },
  },
  {
    test: {
      name: "node-mode",
      environment: "jsdom",
      include: ["**/node-mode.test.tsx"],
    },
    appType: "spa",
  },
]);
