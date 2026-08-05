import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  buildAmazonProductUrl,
  buildAmazonSearchUrl,
  expandMarketplaceOffers,
  getMarkets,
  totalForOffer,
} from "../app.js";

test("includes all supported Creators API marketplaces", () => {
  const markets = getMarkets();
  assert.equal(markets.length, 22);
  assert.equal(new Set(markets.map((market) => market.code)).size, 22);
  assert.ok(markets.some((market) => market.domain === "amazon.co.uk"));
  assert.ok(markets.some((market) => market.domain === "amazon.com"));
});

test("keeps unavailable marketplaces visible inside a product group", () => {
  const offers = expandMarketplaceOffers({
    title: "Test item",
    searchTerm: "Test item",
    asin: "B09XS7JWHH",
    offers: [{ market: "US", local: "$10", itemIls: 35, shippingIls: 12, status: "confirmed" }],
  });
  assert.equal(offers.length, 22);
  assert.equal(offers.filter((offer) => offer.available).length, 1);
  assert.equal(offers.filter((offer) => !offer.available).length, 21);
  assert.equal(offers.find((offer) => offer.code === "US").url, "https://www.amazon.com/dp/B09XS7JWHH");
  assert.match(offers.find((offer) => offer.code === "DE").url, /\/s\?k=/);
});

test("computes item and delivered comparison values correctly", () => {
  const offer = { available: true, itemIls: 100, shippingIls: 20, status: "confirmed" };
  assert.equal(totalForOffer(offer, "item"), 100);
  assert.equal(totalForOffer(offer, "delivered"), 120);
  assert.equal(
    totalForOffer({ ...offer, shippingIls: null, status: "unknown" }, "delivered"),
    Number.POSITIVE_INFINITY,
  );
});

test("builds encoded Amazon marketplace search links", () => {
  assert.equal(
    buildAmazonSearchUrl("amazon.de", "Sony XM5 black"),
    "https://www.amazon.de/s?k=Sony%20XM5%20black",
  );
});

test("builds direct product-detail links from ASINs", () => {
  assert.equal(
    buildAmazonProductUrl("amazon.co.uk", "B09Y2LL45F"),
    "https://www.amazon.co.uk/dp/B09Y2LL45F",
  );
});

test("page contains the key search and comparison surfaces", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /Every Amazon/);
  assert.match(html, /id="search-form"/);
  assert.match(html, /id="results"/);
  assert.match(html, /Not affiliated with or endorsed by Amazon/);
});
