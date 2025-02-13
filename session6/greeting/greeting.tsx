import * as React from "react";

const Greeting = ({ fname }: {fname:string}) => {
    return <div>Hey, {fname}!</div>
};

export default Greeting