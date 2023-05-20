export function getKvEndpoint(
  accountId: string,
  namespaceId: string,
  key: string,
) {
  return `https://api.cloudflare.com/client/v4/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${key}`
}
