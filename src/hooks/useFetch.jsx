//custom hook bắt buộc là hàm đồng bộ
function useFetch(url) {
    const [fetchInfo, setFetchInfo] = useState({ data: null, error: null, loading: true })

    useEffect(() => {
        async function fetchData() {
            setFetchInfo({ data: null, error: null, loading: true });
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error(`Lỗi HTTP :${res.status} `);
                }
                const data = await res.json();
                setFetchInfo({ data: data, error: null, loading: false })

            }
            catch (error) { setFetchInfo({ data: null, error: error.message, loading: false }) }
        }
        fetchData()
    }, [url])
    return fetchInfo
}