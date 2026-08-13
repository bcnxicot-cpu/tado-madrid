import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const css = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");

test("uses working contact destinations", () => {
  assert.match(page, /mail\.google\.com\/mail\/\?view=cm/);
  assert.match(page, /instagram\.com\/tadomadrid/);
  assert.match(page, /tel:\+34642553351/);
  assert.match(page, /google\.com\/maps\/search/);
});

test("renders verified business information", () => {
  assert.match(page, /4,9/);
  assert.match(page, /45 reseñas/);
  assert.match(page, /Echegaray, 31/);
  assert.match(page, /desateliers/);
});

test("has responsive styles", () => {
  assert.match(css, /@media\(max-width:760px\)/);
});

test("all local images exist", () => {
  const images = [...page.matchAll(/src="(\/images\/[^"]+)"/g)].map((match) => match[1]);
  for (const image of images) {
    assert.ok(existsSync(new URL(`../public${image}`, import.meta.url)), `Missing ${image}`);
  }
});
