// In your Cloudflare Worker or Pages Function
export async function onRequest(context) {
    return new Response(`
        <script>
            // Make environment variables available to the client
            window.GOOGLE_CLIENT_ID = '${context.env.GOOGLE_CLIENT_ID}';
            window.JSONBIN_BIN_ID = '${context.env.JSONBIN_BIN_ID}';
            window.JSONBIN_MASTER_KEY = '${context.env.JSONBIN_MASTER_KEY}';
        </script>
    `, {
        headers: { 'Content-Type': 'text/html' }
    });
}