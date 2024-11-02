import React, { useState } from "react";
import LoginForm from "./loginForm";

export default function Title() {
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    
    return (
    <>
    <h1 class="p-3 mb-2 bg-dark-subtle text-dark-emphasis">Expense Tracker</h1>
    <button onClick={() => setIsLoginVisible(!isLoginVisible)} class="btn btn-primary" style={{ position: "absolute", top: 20, right: 20 }}>
        Login
    </button>
    <LoginForm isVisible={isLoginVisible} />
    </>
    );
}

