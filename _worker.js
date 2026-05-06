export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/sitemap.xml') {
      return env.ASSETS.fetch(request);
    }
    // Every other page works exactly as before
    return env.ASSETS.fetch(request);
  }
};
