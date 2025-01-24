import React, { createContext, useState, useEffect } from "react";
import API from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            // Decode user from token (optional: you can use jwt-decode library)
            setUser({ token });
        }
    }, []);

    const login = async (credentials) => {
        const { data } = await API.post("/auth/login", credentials);
        localStorage.setItem("token", data.token);
        setUser({ token: data.token });
    };

    const register = async (credentials) => {
        const { data } = await API.post("/auth/register", credentials);
        localStorage.setItem("token", data.token);
        setUser({ token: data.token });
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
