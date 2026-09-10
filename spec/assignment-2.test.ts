import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("assignment 2 spec", () => {
  it("keeps the three digits the repo was provisioned with", () => {
    expect(api.course.code.slice(-3)).toBe("308");
  });

  it("runs a session in every one of the twelve teaching weeks", () => {
    const weeks = byType("sessions")
      .map((node) => node.meta?.week)
      .sort((a, b) => Number(a) - Number(b));
    expect(weeks).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("adds assessment weights up to 100%", () => {
    const total = byType("assessments").reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  it("links at least one lecture to a deck that actually built", () => {
    const decked = byType("lectures").filter((node) =>
      typeof node.meta?.slides === "string" && /^\/decks\/[a-z0-9-]+\/$/.test(node.meta.slides),
    );
    expect(decked.length).toBeGreaterThan(0);
    const built = decked.some((node) =>
      existsSync(resolve("dist", (node.meta!.slides as string).slice(1), "index.html")),
    );
    expect(built).toBe(true);
  });
});
