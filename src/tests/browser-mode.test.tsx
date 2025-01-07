import "@vitest/browser/matchers.d.ts";
import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import App from "../App";

const handlers = [
  http.get("*/react-query", () => {
    return HttpResponse.json({
      name: "mocked-react-query",
    });
  }),
];

const server = setupWorker(...handlers);

beforeAll(() => server.start());
afterAll(() => server.stop());

describe("App", () => {
  it("renders the name", async () => {
    const screen = render(<App />);
    await expect
      .element(screen.getByText(/name/i))
      .toHaveTextContent("mocked-react-query");
  });
});
