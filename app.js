const MARKETS = [
  { code: "AU", name: "Australia", domain: "amazon.com.au", flag: "🇦🇺" },
  { code: "BE", name: "Belgium", domain: "amazon.com.be", flag: "🇧🇪" },
  { code: "BR", name: "Brazil", domain: "amazon.com.br", flag: "🇧🇷" },
  { code: "CA", name: "Canada", domain: "amazon.ca", flag: "🇨🇦" },
  { code: "EG", name: "Egypt", domain: "amazon.eg", flag: "🇪🇬" },
  { code: "FR", name: "France", domain: "amazon.fr", flag: "🇫🇷" },
  { code: "DE", name: "Germany", domain: "amazon.de", flag: "🇩🇪" },
  { code: "IN", name: "India", domain: "amazon.in", flag: "🇮🇳" },
  { code: "IE", name: "Ireland", domain: "amazon.ie", flag: "🇮🇪" },
  { code: "IT", name: "Italy", domain: "amazon.it", flag: "🇮🇹" },
  { code: "JP", name: "Japan", domain: "amazon.co.jp", flag: "🇯🇵" },
  { code: "MX", name: "Mexico", domain: "amazon.com.mx", flag: "🇲🇽" },
  { code: "NL", name: "Netherlands", domain: "amazon.nl", flag: "🇳🇱" },
  { code: "PL", name: "Poland", domain: "amazon.pl", flag: "🇵🇱" },
  { code: "SG", name: "Singapore", domain: "amazon.sg", flag: "🇸🇬" },
  { code: "SA", name: "Saudi Arabia", domain: "amazon.sa", flag: "🇸🇦" },
  { code: "ES", name: "Spain", domain: "amazon.es", flag: "🇪🇸" },
  { code: "SE", name: "Sweden", domain: "amazon.se", flag: "🇸🇪" },
  { code: "TR", name: "Turkey", domain: "amazon.com.tr", flag: "🇹🇷" },
  { code: "AE", name: "United Arab Emirates", domain: "amazon.ae", flag: "🇦🇪" },
  { code: "UK", name: "United Kingdom", domain: "amazon.co.uk", flag: "🇬🇧" },
  { code: "US", name: "United States", domain: "amazon.com", flag: "🇺🇸" },
];

const DEMO_PRODUCTS = [
  {
    id: "sony-wh-1000xm5",
    brand: "Sony",
    model: "WH-1000XM5",
    title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    meta: "Black · Over-ear · International listings grouped",
    searchTerm: "Sony WH-1000XM5 black",
    tags: ["sony", "headphones", "wireless", "noise canceling", "noise cancelling", "xm5"],
    offers: [
      { market: "CA", local: "C$449.00", itemIls: 1178, shippingIls: 139, status: "likely" },
      { market: "DE", local: "€309.00", itemIls: 1248, shippingIls: 59, status: "confirmed" },
      { market: "ES", local: "€312.00", itemIls: 1261, shippingIls: 98, status: "confirmed" },
      { market: "FR", local: "€319.00", itemIls: 1289, shippingIls: 72, status: "likely" },
      { market: "IT", local: "€324.99", itemIls: 1313, shippingIls: 85, status: "likely" },
      { market: "JP", local: "¥48,500", itemIls: 1180, shippingIls: 169, status: "likely" },
      { market: "UK", local: "£279.00", itemIls: 1332, shippingIls: 129, status: "likely" },
      { market: "US", local: "$349.99", itemIls: 1274, shippingIls: 89, status: "confirmed" },
      { market: "AE", local: "AED 1,299", itemIls: 1290, shippingIls: null, status: "no" },
      { market: "AU", local: "A$499.00", itemIls: 1197, shippingIls: null, status: "no" },
    ],
  },
  {
    id: "kindle-paperwhite",
    brand: "Amazon",
    model: "Paperwhite",
    title: "Kindle Paperwhite 16 GB — glare-free display",
    meta: "Black · Wi-Fi · Equivalent current-generation listings",
    searchTerm: "Kindle Paperwhite 16GB black",
    tags: ["kindle", "paperwhite", "ereader", "e-reader", "reader", "amazon"],
    offers: [
      { market: "DE", local: "€159.99", itemIls: 646, shippingIls: 54, status: "confirmed" },
      { market: "ES", local: "€164.99", itemIls: 666, shippingIls: 66, status: "likely" },
      { market: "FR", local: "€169.99", itemIls: 686, shippingIls: 61, status: "likely" },
      { market: "IT", local: "€169.99", itemIls: 686, shippingIls: 73, status: "likely" },
      { market: "UK", local: "£149.99", itemIls: 716, shippingIls: 95, status: "likely" },
      { market: "US", local: "$159.99", itemIls: 582, shippingIls: 78, status: "confirmed" },
      { market: "CA", local: "C$184.99", itemIls: 485, shippingIls: 129, status: "likely" },
      { market: "JP", local: "¥19,980", itemIls: 486, shippingIls: null, status: "no" },
    ],
  },
  {
    id: "airpods-pro-2",
    brand: "Apple",
    model: "AirPods Pro",
    title: "Apple AirPods Pro with USB-C Charging Case",
    meta: "White · Active noise cancellation · USB-C",
    searchTerm: "Apple AirPods Pro USB-C",
    tags: ["apple", "airpods", "earbuds", "wireless", "usb-c", "noise cancelling"],
    offers: [
      { market: "US", local: "$189.99", itemIls: 691, shippingIls: 92, status: "likely" },
      { market: "DE", local: "€229.00", itemIls: 925, shippingIls: 49, status: "confirmed" },
      { market: "ES", local: "€225.00", itemIls: 909, shippingIls: 58, status: "likely" },
      { market: "FR", local: "€239.00", itemIls: 965, shippingIls: 54, status: "likely" },
      { market: "IT", local: "€234.99", itemIls: 949, shippingIls: 63, status: "likely" },
      { market: "UK", local: "£229.00", itemIls: 1093, shippingIls: 88, status: "likely" },
      { market: "AE", local: "AED 799", itemIls: 793, shippingIls: null, status: "unknown" },
      { market: "JP", local: "¥39,800", itemIls: 969, shippingIls: null, status: "no" },
    ],
  },
];

const STATUS = {
  confirmed: { label: "Ships to Israel", className: "status-confirmed" },
  likely: { label: "AmazonGlobal — verify", className: "status-likely" },
  no: { label: "No direct shipping", className: "status-no" },
  unknown: { label: "Verify on Amazon", className: "status-unknown" },
};

const state = {
  products: [],
  shippableOnly: false,
  compareBasis: "delivered",
  query: "Sony WH-1000XM5",
  live: false,
};

export function getMarkets() {
  return MARKETS.map((market) => ({ ...market }));
}

export function buildAmazonSearchUrl(domain, query) {
  return `https://www.${domain}/s?k=${encodeURIComponent(query)}`;
}

export function totalForOffer(offer, basis = "delivered") {
  if (!offer.available || !Number.isFinite(offer.itemIls)) return Number.POSITIVE_INFINITY;
  if (basis === "item") return offer.itemIls;
  if (!["confirmed", "likely"].includes(offer.status) || !Number.isFinite(offer.shippingIls)) {
    return Number.POSITIVE_INFINITY;
  }
  return offer.itemIls + offer.shippingIls;
}

export function expandMarketplaceOffers(product) {
  const byMarket = new Map((product.offers || []).map((offer) => [offer.market, offer]));
  return MARKETS.map((market) => {
    const offer = byMarket.get(market.code);
    if (!offer) {
      return {
        ...market,
        available: false,
        status: "unknown",
        url: buildAmazonSearchUrl(market.domain, product.searchTerm || product.title),
      };
    }
    return {
      ...market,
      ...offer,
      available: offer.available !== false,
      url: offer.url || buildAmazonSearchUrl(market.domain, product.searchTerm || product.title),
    };
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatIls(value) {
  if (!Number.isFinite(value)) return "—";
  return `₪${Math.round(value).toLocaleString("en-US")}`;
}

function demoSearch(query) {
  const clean = query.trim().toLowerCase();
  if (!clean) return DEMO_PRODUCTS.slice();
  const tokens = clean.split(/\s+/).filter(Boolean);
  const scored = DEMO_PRODUCTS.map((product) => {
    const haystack = [product.title, product.brand, product.model, ...product.tags].join(" ").toLowerCase();
    const score = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
    return { product, score };
  })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ product }) => product);

  if (scored.length) return scored;
  return [
    {
      id: "search-only",
      brand: "Live connector needed",
      model: "Search preview",
      title: `Search every Amazon for “${query.trim()}”`,
      meta: "Store links are ready now; comparable live prices require the private API service.",
      searchTerm: query.trim(),
      tags: [],
      offers: [],
    },
  ];
}

async function searchProducts(query, country) {
  const apiBaseUrl = globalThis.CROSSCART_CONFIG?.apiBaseUrl?.trim();
  if (!apiBaseUrl) {
    state.live = false;
    await new Promise((resolve) => setTimeout(resolve, 260));
    return demoSearch(query);
  }

  const url = new URL(`${apiBaseUrl.replace(/\/$/, "")}/search`);
  url.searchParams.set("q", query);
  url.searchParams.set("country", country);
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`Search service returned ${response.status}`);
  const data = await response.json();
  if (!Array.isArray(data.products)) throw new Error("Search service response is missing products");
  state.live = true;
  return data.products;
}

function renderShipping(status) {
  const item = STATUS[status] || STATUS.unknown;
  return `<span class="shipping-status ${item.className}"><span class="status-dot" aria-hidden="true"></span>${item.label}</span>`;
}

function renderOffer(offer, cheapestValue, basis) {
  const offerValue = totalForOffer(offer, basis);
  const isCheapest = Number.isFinite(offerValue) && offerValue === cheapestValue;
  const delivered = totalForOffer(offer, "delivered");
  const itemPrice = offer.available
    ? `<strong>${escapeHtml(offer.local || formatIls(offer.itemIls))}</strong><span>${formatIls(offer.itemIls)} converted</span>`
    : `<span class="empty-price">No matching offer</span>`;
  const total = Number.isFinite(delivered)
    ? `<strong>${formatIls(delivered)}</strong><span>item + known shipping</span>${isCheapest ? '<span class="cheapest-badge">Cheapest</span>' : ""}`
    : `<span class="empty-price">Not available</span>${isCheapest ? '<span class="cheapest-badge">Lowest item price</span>' : ""}`;
  const actionText = offer.available ? "View listing" : "Search store";
  const actionClass = offer.available ? "" : " secondary";

  return `
    <li class="offer-row${isCheapest ? " cheapest" : ""}${offer.available ? "" : " unavailable"}">
      <div class="market-cell">
        <span class="flag" aria-hidden="true">${offer.flag}</span>
        <span class="market-name"><strong>Amazon ${escapeHtml(offer.name)}</strong><span>${escapeHtml(offer.domain)}</span></span>
      </div>
      <div class="price-cell">${itemPrice}</div>
      <div class="shipping-cell">${offer.available ? renderShipping(offer.status) : renderShipping("unknown")}</div>
      <div class="total-cell">${total}</div>
      <div class="action-cell"><a class="amazon-link${actionClass}" href="${escapeHtml(offer.url)}" target="_blank" rel="noopener noreferrer">${actionText}<span aria-hidden="true">↗</span></a></div>
    </li>`;
}

function renderProduct(product) {
  let offers = expandMarketplaceOffers(product);
  if (state.shippableOnly) {
    offers = offers.filter((offer) => offer.available && ["confirmed", "likely"].includes(offer.status));
  }
  offers.sort((a, b) => {
    const difference = totalForOffer(a, state.compareBasis) - totalForOffer(b, state.compareBasis);
    return Number.isFinite(difference) && difference !== 0 ? difference : a.name.localeCompare(b.name);
  });
  const cheapestValue = Math.min(...offers.map((offer) => totalForOffer(offer, state.compareBasis)));
  const availableCount = expandMarketplaceOffers(product).filter((offer) => offer.available).length;

  return `
    <article class="product-card">
      <header class="product-top">
        <div class="product-art" aria-hidden="true"><span>${escapeHtml(product.model || "ITEM")}</span></div>
        <div>
          <p class="product-brand">${escapeHtml(product.brand)}</p>
          <h3 class="product-name">${escapeHtml(product.title)}</h3>
          <p class="product-meta">${escapeHtml(product.meta || "Equivalent marketplace listings grouped")}</p>
        </div>
        <div class="store-count"><strong>${availableCount}</strong> offers · 22 stores shown</div>
      </header>
      <div class="offers-head" aria-hidden="true">
        <span>Marketplace</span><span>Item price</span><span>Shipping to Israel</span><span>Delivered estimate</span><span>Open</span>
      </div>
      <ul class="offers-list">${offers.map((offer) => renderOffer(offer, cheapestValue, state.compareBasis)).join("")}</ul>
    </article>`;
}

function render() {
  const results = document.querySelector("#results");
  const summary = document.querySelector("#results-summary");
  const notice = document.querySelector("#preview-notice");
  if (!results || !summary || !notice) return;

  notice.classList.toggle("hidden", state.live);
  const offerCount = state.products.reduce(
    (total, product) => total + expandMarketplaceOffers(product).filter((offer) => offer.available).length,
    0,
  );
  summary.textContent = `22 stores checked · ${offerCount} offers found · ${state.products.length} product group${state.products.length === 1 ? "" : "s"}`;
  results.innerHTML = state.products.length
    ? state.products.map(renderProduct).join("")
    : `<div class="empty-state"><h3>No matching products</h3><p>Try a broader keyword, model number, ASIN, or full Amazon product URL.</p></div>`;
}

async function runSearch(query, country = "IL") {
  const button = document.querySelector(".search-button");
  if (button) {
    button.disabled = true;
    button.querySelector("span:first-child").textContent = "Checking stores…";
  }
  try {
    state.query = query;
    state.products = await searchProducts(query, country);
    render();
    document.querySelector("#results-title")?.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    state.products = [];
    render();
    const results = document.querySelector("#results");
    if (results) {
      results.innerHTML = `<div class="empty-state"><h3>We could not reach the price service</h3><p>${escapeHtml(error.message)}. Please try again shortly.</p></div>`;
    }
  } finally {
    if (button) {
      button.disabled = false;
      button.querySelector("span:first-child").textContent = "Compare prices";
    }
  }
}

function initialize() {
  const form = document.querySelector("#search-form");
  const shippableOnly = document.querySelector("#shippable-only");
  const compareBasis = document.querySelector("#compare-basis");
  if (!form || !shippableOnly || !compareBasis) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const query = String(formData.get("query") || "").trim();
    if (!query) return;
    runSearch(query, String(formData.get("destination") || "IL"));
  });

  shippableOnly.addEventListener("change", () => {
    state.shippableOnly = shippableOnly.checked;
    render();
  });

  compareBasis.addEventListener("change", () => {
    state.compareBasis = compareBasis.value;
    render();
  });

  state.products = demoSearch(state.query);
  render();
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initialize);
}
