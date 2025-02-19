import React, { useEffect } from 'react';

export default function LifeCicleTest() {
    useEffect(() => {
        console.log("Component Mounted");
        return () => console.log("Component Unmounted");
    }, []);

    return (
        <div>
            <p> Hello there</p>
        </div>
    );
}