import { useState } from "react";

const Button = () => {
    const [verified, setVerified] = useState(false)

    return (
        <div>
            <div> Verified: {verified.toString()}</div>
            <button onClick={() => setVerified(!verified)}>Verify</button>
        </div>
    )
}
export default Button;