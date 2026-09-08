const fetchApi = async (url: string, method: string = 'GET', body?: any) => {
    const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
    })
    return res.json()
}
export default fetchApi;