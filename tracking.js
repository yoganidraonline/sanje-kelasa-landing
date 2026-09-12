/* Direct GA4 and Meta implementation. Do not add duplicate tags in GTM. Purchase is CAPI-only via later Pabbly setup. */
(function(){const c=window.BOOK_CONFIG;if(!c)return;
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};
gtag('js',new Date());gtag('config',c.ga4Id);
const ga=document.createElement('script');ga.async=true;ga.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(c.ga4Id);document.head.appendChild(ga);
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=true;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=true;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init',c.pixelId);fbq('track','PageView');
const item={item_id:c.productId,item_name:c.title,price:c.price,quantity:1};
const meta={content_name:c.title,content_ids:[c.productId],content_type:'product',value:c.price,currency:c.currency};
if(!document.body.classList.contains('thank-you-page')){fbq('track','ViewContent',meta);gtag('event','view_item',{currency:c.currency,value:c.price,items:[item]});}
document.querySelectorAll('.checkout').forEach(function(a){a.addEventListener('click',function(){fbq('track','InitiateCheckout',Object.assign({num_items:1},meta));gtag('event','begin_checkout',{currency:c.currency,value:c.price,items:[item],transport_type:'beacon'});});});
})();