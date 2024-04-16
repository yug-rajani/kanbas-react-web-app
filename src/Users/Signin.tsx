import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";

export default function Signin() {
    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "", password: "", firstName: "", lastName: "", role: "USER"
    });
    const navigate = useNavigate();
    const signin = async () => {
        try {
            await client.signin(credentials);
            navigate("/Kanbas/Account/Profile");
        }
        catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <h1>Signin</h1>
            <input value={credentials.username} onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })} />
            <br /><br />
            <input value={credentials.password} onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })} />
            <br /><br />
            <button onClick={signin}> Signin </button>
            <br /><br />
            <button onClick={() => navigate("/Kanbas/Account/Signup")}>
                Go to Signup
            </button>
        </div>
    );
}
