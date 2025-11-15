export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  
  if (url.pathname === '/api/config' && request.method === 'GET') {
    // Your existing onRequestGet logic here
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
    
    const config = {
      GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID || '',
      JSONBIN_BIN_ID: env.JSONBIN_BIN_ID || '',
      JSONBIN_MASTER_KEY: env.JSONBIN_MASTER_KEY || '',
    };
    
    return new Response(JSON.stringify(config), { 
      status: 200,
      headers: corsHeaders
    });
  }
  
  // For all other routes, let the static file handler serve the files
  // This allows index.html to be served by the default file handler
  return env.ASSETS.fetch(request);
}

