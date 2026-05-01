export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname === '/sitemap.xml') {
      const response = await fetch(
        'https://raw.githubusercontent.com/DurgaMindSkillsCareCentre/durga-seo-site/main/sitemap.xml'
      );
      return new Response(response.body, {
        headers: {
          'Content-Type': 'application/xml; charset=UTF-8',
          'Cache-Control': 'public, max-age=3600'
        }
      });
    }
    
    // All other requests go to your static site
    try {
      return await env.ASSETS.fetch(request);
    } catch {
      return new Response('Not Found', { status: 404 });
    }
  }
};
