/**
 * Fetches the resource, registers the resource in cache
 */
export async function fetchList() {
    const fetchPath = 'http://localhost:3000/list';
    const result = await fetch(fetchPath);
    return await result.json();
}