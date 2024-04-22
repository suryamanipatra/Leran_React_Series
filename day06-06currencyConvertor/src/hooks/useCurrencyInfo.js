import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.app/currencies`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => console.error("Error fetching data:", error));
    }, [currency]); 

    console.log(data);

    return data;
}

export default useCurrencyInfo;
