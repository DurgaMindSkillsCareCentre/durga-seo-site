export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve the sitemap directly, bypassing all bot blocks
    if (url.pathname === '/sitemap.xml') {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://durga-mindskillscare.pages.dev/</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/about.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/services.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/consultations.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/workshops.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/gallery.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/videos.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/contact.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/mindskillscare.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/social.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/best-psychologist-in-chennai.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/anxiety-treatment-chennai.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/depression-counselling-chennai.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/relationship-counselling-chennai.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/family-counseling-chennai.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://durga-mindskillscare.pages.dev/online-therapy-india.html</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>`;

      return new Response(sitemap, {
        headers: {
          'Content-Type': 'application/xml; charset=UTF-8',
          'Cache-Control': 'public, max-age=3600'
        }
      });
    }

    // All other pages are served from your static site
    return env.ASSETS.fetch(request);
  }
};
