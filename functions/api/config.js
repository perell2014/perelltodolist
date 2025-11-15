// Handle requests to the /api/config endpoint
export async function onRequestGet({ env }) {
  // Set CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    // Prepare environment variables to be exposed
    const config = {
      GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID || '',
      JSONBIN_BIN_ID: env.JSONBIN_BIN_ID || '',
      JSONBIN_MASTER_KEY: env.JSONBIN_MASTER_KEY || '',
    };

    // Return the configuration
    return new Response(
      JSON.stringify(config),
      { 
        status: 200,
        headers: corsHeaders
      }
    );

  } catch (error) {
    console.error('Configuration error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }),
      { 
        status: 500, 
        headers: corsHeaders 
      }
    );
  }
}

// Handle all other requests
export async function onRequest({ request, env }) {
  // For any request that's not to /api/config, return 404
  return new Response('Not Found', { 
    status: 404,
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    }
  });
}