/**
 * Fetches the resource, registers the resource in cache
 */
export default async function listLoader() {
    const fetchPath = 'http://localhost:3000/list';
    const result = await fetch(fetchPath);
    const body = await result.json();
    console.log('listLoader', body);
    return body;
}