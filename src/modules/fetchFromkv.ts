import { getKvEndpoint } from "./getKvEndpoint";

export function fetchFromKv(key: string) {
  const endpoint = getKvEndpoint(
    process.env.CLOUDFLARE_ACCOUNT_ID as string,
    process.env.CLOUDFLARE_KV_NAMESPACE_ID as string,
    key
  );

  return fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CLOUDFLARE_KV_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.text());
}
