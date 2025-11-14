export async function onRequest({ env }) {
  const key = env.GOOGLE_CLIENT_ID; // your secret
  return new Response("worker ok: " + Boolean(key) +  " Value: " + key);
}

