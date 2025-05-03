const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8181'

type FetchOptions = RequestInit & {
  searchParams?: Record<string, string | number | boolean | undefined | null>
}

export const apiClient = async <T>(
  path: string,
  { searchParams, headers, ...options }: FetchOptions = {}
): Promise<T> => {
  const url = new URL(path, API_URL)

  if (searchParams) {
    const params = Object.fromEntries(
      Object.entries(searchParams).filter(
        ([, v]) => v !== undefined && v !== null && v !== ''
      )
    ) as Record<string, string>
    url.search = new URLSearchParams(params).toString()
  }

  console.log(options.method ?? 'GET', url.toString())
  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}
