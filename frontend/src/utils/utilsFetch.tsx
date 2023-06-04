export default async function utilsFetch(
  url: string,
  method = 'POST',
  body = {},
  header = {}
) {
  if (!url) return
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...header,
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}
