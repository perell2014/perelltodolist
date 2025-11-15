export async function onRequest({ env }) {
  //const key = env.GOOGLE_CLIENT_ID; // your secret
  //return new Response("worker ok: " + Boolean(key) +  " Value: " + key);
  return new Response(
      JSON.stringify({
        GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID,
        JSONBIN_BIN_ID: env.JSONBIN_BIN_ID,
        JSONBIN_MASTER_KEY: env.JSONBIN_MASTER_KEY,
         })
         );
}

