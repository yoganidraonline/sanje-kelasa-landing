# Sanje Kelasa book landing page

Static HTML, ready for the existing Cloudflare/GitHub workflow. Upload all folder contents.

## Confirm before launch
- Confirmed discounted price: INR 261 including courier. MRP INR 346.
- Existing policy text was reused; confirm the delivery/refund terms apply to this book.
- Book introduction video configured: https://www.youtube-nocookie.com/embed/uVU4V_-cLzk. It appears immediately after the hero / first checkout button. No old-book video or testimonials included.
- Confirmed domain: https://sanjekelasa.yoganidraonline.com. No DNS or Cashfree redirect changed remotely. Before publishing, change the Cashfree form amount to ₹261 and set its success redirect to https://sanjekelasa.yoganidraonline.com/thank-you.html.

## Tracking
- Meta Pixel 1091552028081790: PageView, ViewContent, InitiateCheckout.
- GA4 G-8G8H1K6BTR: page_view, view_item, begin_checkout.
- Direct GA4 is used; the shared GTM container is intentionally not loaded to prevent duplicate tags. If migrating to GTM, remove the corresponding direct tags first.
- Distinct product ID: sanje-kelasa-book. This separates the new book from gaadha-nidre-book. Filter Meta content IDs and GA4 item IDs/page URLs.
- No browser Purchase event, including on the thank-you page.
- Later Pabbly: confirmed Cashfree payment -> CAPI Purchase with currency INR, actual paid value ₹261, content_ids [sanje-kelasa-book], unique order ID as event_id. Use a new product-specific custom conversion for ad optimization. This is not configured yet.

## Live verification
Test on the public URL with Meta Test Events/Pixel Helper and GA4 DebugView/Realtime. Confirm one page view per navigation, correct item/value and one checkout event per click. External account access and deployment were not available in this task.

## Updated 160-page edition
The page uses the ten user-supplied inside-page screenshots from the 160-page edition. The earlier 88-page preview images are not used. Two supplied book lifestyle images are also included.

## Image optimization
The three large book photographs are supplied as WebP files to make the page and ZIP faster to download. Modern browsers, GitHub Pages and Cloudflare Pages support WebP.
