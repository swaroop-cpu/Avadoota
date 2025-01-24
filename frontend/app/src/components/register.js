// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//     const { register } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await register({ name, email, password });
//             navigate("/expenses");
//         } catch (error) {
//             alert("Registration failed");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Register</h2>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
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
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // For navigation to login
import API from "../api/api"; // Axios instance

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook to handle navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post("/auth/register", {
                name,
                email,
                password,
            });
            console.log("Registration successful:", response.data); // Debug log
            alert("Registration successful");
            navigate("/"); // Redirect to login page
        } catch (error) {
            console.error("Registration error:", error.response?.data || error.message); // Debug log
            alert(error.response?.data?.message || "Registration failed");
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
            borderColor: "#ff758c",
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
            background: "#e0527e",
        },
        link: {
            marginTop: "1rem",
            fontSize: "0.9rem",
            color: "#666",
        },
        linkAnchor: {
            color: "#ff758c",
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
                <h2 style={styles.title}>Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
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
                    Register
                </button>
                <p style={styles.link}>
                    Have an account?{" "}
                    <Link
                        to="/"
                        style={styles.linkAnchor}
                        onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                        onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                    >
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
