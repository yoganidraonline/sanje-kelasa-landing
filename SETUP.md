# Sanje Kelasa book landing page

Static HTML, ready for the existing Cloudflare/GitHub workflow. Upload all folder contents.

## Confirm before launch
- Confirmed price: INR 165 including courier. MRP INR 243.
- Existing policy text was reused; confirm the delivery/refund terms apply to this book.
- Book introduction video configured: https://www.youtube-nocookie.com/embed/uVU4V_-cLzk. It appears immediately after the hero / first checkout button. No old-book video or testimonials included.
- Confirmed domain: https://sanjekelasa.yoganidraonline.com. No DNS or Cashfree redirect changed remotely. After publishing, set Cashfree success redirect to https://sanjekelasa.yoganidraonline.com/thank-you.html.

## Tracking
- Meta Pixel 1091552028081790: PageView, ViewContent, InitiateCheckout.
- GA4 G-8G8H1K6BTR: page_view, view_item, begin_checkout.
- Direct GA4 is used; the shared GTM container is intentionally not loaded to prevent duplicate tags. If migrating to GTM, remove the corresponding direct tags first.
- Distinct product ID: sanje-kelasa-book. This separates the new book from gaadha-nidre-book. Filter Meta content IDs and GA4 item IDs/page URLs.
- No browser Purchase event, including on the thank-you page.
- Later Pabbly: confirmed Cashfree payment -> CAPI Purchase with currency INR, actual paid value, content_ids [sanje-kelasa-book], unique order ID as event_id. Use a new product-specific custom conversion for ad optimization. This is not configured yet.

## Live verification
Test on the public URL with Meta Test Events/Pixel Helper and GA4 DebugView/Realtime. Confirm one page view per navigation, correct item/value and one checkout event per click. External account access and deployment were not available in this task.

## Scan quality
The website now uses five user-supplied clean screenshots without AI editing: contents, 3-minute reset, 7-day plan, Yoga Nidra introduction and QR audio page. The photographed 15-minute reset page was removed from the gallery because a replacement screenshot was not supplied. The 15-minute method remains described in the book features.
