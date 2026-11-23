import { useState } from "react"
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timer = setTimeout(() => { setDebounceValue(debounceValue), delay });
        return () => clearTimeout(timer)
    }, [delay, value])
    return debounceValue;

}