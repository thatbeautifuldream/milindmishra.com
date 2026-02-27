import { cache } from "react";

export async function cachedFetch<T>(
  url: string,
  options?: RequestInit & { next?: { revalidate?: number; tags?: string[] } }
): Promise<T> {
  const cachedFetch = cache(async (fetchUrl: string, fetchOptions?: RequestInit) => {
    const response = await fetch(fetchUrl, fetchOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as Promise<T>;
  });

  return cachedFetch(url, options);
}

export function createCachedFetcher<T>(
  _cacheKey: string  // eslint-disable-line @typescript-eslint/no-unused-vars
) {
  return cache(async (...args: unknown[]) => {
    const result = await (args[0] as () => Promise<T>)();
    return result;
  });
}
