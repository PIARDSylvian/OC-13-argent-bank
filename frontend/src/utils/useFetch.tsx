export default async function utilsFetch(
  url: string,
  method = 'POST',
  body = {}
) {
  if (!url) return
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}
