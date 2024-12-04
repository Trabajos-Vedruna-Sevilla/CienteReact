import { useState, useEffect } from "react";

export function useFetch(url){
    
    const [data, setData] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .finally(() => setloading(false));
    }, []);

    return {data, loading};
}

