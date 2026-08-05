# CrossCart

CrossCart is a static, GitHub Pages-ready frontend for comparing the same product across Amazon marketplaces. Every supported marketplace stays visible inside the product group, and the cheapest known option is marked automatically.

## What works now

- Responsive one-page search and comparison interface.
- All 22 Amazon Creators API marketplaces represented.
- Full marketplace rows stay visible by default, including stores with no matching offer.
- Cheapest option can be calculated by item price or estimated delivered price.
- Shipping states distinguish confirmed, AmazonGlobal/likely, unavailable, and unknown.
- Built-in, clearly labelled sample catalog for interface testing.
- Useful Amazon marketplace search links for queries outside the sample catalog.

## Run locally

The site has no runtime dependencies. Serve the repository with any static server, for example:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Validate and build

```sh
node --check app.js
node --test tests/*.test.mjs
node scripts/build.mjs
```

The build output is written to `dist/`. GitHub Pages can also publish the repository root directly because the project is fully static and includes `.nojekyll`.

## Connect live pricing later

Set `apiBaseUrl` in `config.js` to a private HTTPS service implementing:

```http
GET /search?q=Sony%20WH-1000XM5&country=IL
```

The response shape is:

```json
{
  "products": [
    {
      "id": "stable-product-id",
      "brand": "Sony",
      "model": "WH-1000XM5",
      "title": "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      "meta": "Black · Over-ear",
      "searchTerm": "Sony WH-1000XM5 black",
      "offers": [
        {
          "market": "DE",
          "local": "€309.00",
          "itemIls": 1248,
          "shippingIls": 59,
          "status": "confirmed",
          "url": "https://www.amazon.de/dp/example"
        }
      ]
    }
  ]
}
```

Valid shipping statuses are `confirmed`, `likely`, `no`, and `unknown`.

Do not put Amazon Creators API credentials in this repository or in `config.js`. GitHub Pages is public and cannot protect secrets. The future API service should hold OAuth credentials, query marketplaces in parallel, normalize currencies, group equivalent products, and return only safe display data.

## Legal/product note

CrossCart is independent and is not affiliated with or endorsed by Amazon. Amazon prices and shipping eligibility can change, and checkout is the final authority. Production use of Amazon catalog content must comply with the applicable Amazon Associates and Creators API terms.
