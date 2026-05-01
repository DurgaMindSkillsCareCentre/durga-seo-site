export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/sitemap.xml') {
      return env.ASSETS.fetch(request);
    }
    try {
      return await env.ASSETS.fetch(request);
    } catch {
      return new Response('Not Found', { status: 404 });
    }
  }
};
