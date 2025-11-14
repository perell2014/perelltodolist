// Middleware to handle CORS for all routes
export async function onRequest(context) {
  // Handle OPTIONS request for CORS preflight
  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  // Handle config endpoint
  const url = new URL(context.request.url);
  if (url.pathname === '/api/config') {
    return new Response(
      JSON.stringify({
        GOOGLE_CLIENT_ID: context.env.GOOGLE_CLIENT_ID,
        JSONBIN_BIN_ID: context.env.JSONBIN_BIN_ID,
        JSONBIN_MASTER_KEY: context.env.JSONBIN_MASTER_KEY,
      }),
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  // For all other requests, continue to the next handler
  return context.next();
}