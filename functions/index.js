// Environment variables configuration endpoint
export async function onRequest({ request, env }) {
  // Set CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
      status: 204
    });
  }

  try {
    // Only allow GET requests
    if (request.method !== 'GET') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }), 
        { status: 405, headers: corsHeaders }
      );
    }

    // Prepare environment variables to be exposed
    const config = {
      // Required environment variables
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

