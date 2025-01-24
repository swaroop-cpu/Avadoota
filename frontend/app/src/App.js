// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/login";
import Register from "./components/register";
// import ExpenseList from "./components/expenceList";
// import AddExpense from "./components/addExpence";
import ExpenseForm from "./components/addExpence";
import ExpenseList from "./components/expenceList";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/expence-list" element={< ExpenseList/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/expenses" element={<ExpenseList />} />
                    <Route path="/expense-form" element={<ExpenseForm />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
