const fetchApi = async (url: string, method: string, body?:string) => {
    const res = await fetch(url, {
        method:method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
    })
    return res.json()
}
export default fetchApi;