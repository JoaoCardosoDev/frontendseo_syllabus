import { useEffect, useState } from "react";

export default function Relogio() {
    const [hour, setHour] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <p>Current Hour: {hour}</p>;
}