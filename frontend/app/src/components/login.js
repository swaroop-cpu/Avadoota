// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const { login } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await login({ email, password });
//             navigate("/expenses");
//         } catch (error) {
//             alert("Invalid credentials");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Login</h2>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import API from "../api/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Submitting login request:", { email, password }); // Debug log

        try {
            const { data } = await API.post("/auth/login", { email, password });
            console.log("Login successful:", data); // Debug log
            localStorage.setItem("token", data.token);
            alert("Login successful");
            navigate("/expence-list"); // Redirect to the "Expense" page
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message); // Debug log
            alert(error.response?.data?.message || "Login failed");
        }
    };

    // Internal CSS Styles
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            fontFamily: "Arial, sans-serif",
        },
        form: {
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            maxWidth: "400px",
            width: "100%",
            textAlign: "center",
        },
        title: {
            marginBottom: "1.5rem",
            fontSize: "1.8rem",
            color: "#333",
        },
        input: {
            width: "100%",
            padding: "0.8rem",
            marginBottom: "1rem",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "1rem",
            boxSizing: "border-box",
            transition: "border 0.3s ease",
        },
        inputFocus: {
            borderColor: "#6a11cb",
            outline: "none",
        },
        button: {
            width: "100%",
            padding: "0.8rem",
            background: "#6a11cb",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.3s ease",
        },
        buttonHover: {
            background: "#4e0ca3",
        },
        link: {
            marginTop: "1rem",
            fontSize: "0.9rem",
            color: "#666",
        },
        linkAnchor: {
            color: "#6a11cb",
            textDecoration: "none",
            fontWeight: "bold",
        },
        linkAnchorHover: {
            textDecoration: "underline",
        },
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Login
                </button>
                <p style={styles.link}>
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        style={styles.linkAnchor}
                        onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                        onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                    >
                        Register here
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
