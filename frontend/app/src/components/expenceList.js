
// // // import React, { useState, useEffect } from "react";
// // // import API from "../api/api";
// // // import {
// // //   TextField,
// // //   Button,
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableContainer,
// // //   TableHead,
// // //   TableRow,
// // //   Paper,
// // //   Typography,
// // //   Box,
// // //   Alert,
// // // } from "@mui/material";
// // // import { Bar, Pie } from "react-chartjs-2";
// // // import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

// // // ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// // // const ExpenseList = () => {
// // //   const [date, setDate] = useState("");
// // //   const [amount, setAmount] = useState("");
// // //   const [category, setCategory] = useState("");
// // //   const [description, setDescription] = useState("");
// // //   const [message, setMessage] = useState("");
// // //   const [expenses, setExpenses] = useState([]);
// // //   const [editId, setEditId] = useState(null);

// // //   useEffect(() => {
// // //     fetchExpenses();
// // //   }, []);

// // //   const fetchExpenses = async () => {
// // //     try {
// // //       const { data } = await API.get("/expenses");
// // //       setExpenses(data);
// // //     } catch (error) {
// // //       console.error("Failed to fetch expenses:", error.response?.data || error.message);
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setMessage("");

// // //     if (!date || !amount || !category) {
// // //       setMessage("Date, amount, and category are required.");
// // //       return;
// // //     }

// // //     try {
// // //       if (editId) {
// // //         await API.put(`/expenses/${editId}`, { date, amount, category, description });
// // //         setMessage("Expense updated successfully!");
// // //         setEditId(null);
// // //       } else {
// // //         await API.post("/expenses", { date, amount, category, description });
// // //         setMessage("Expense added successfully!");
// // //       }

// // //       setDate("");
// // //       setAmount("");
// // //       setCategory("");
// // //       setDescription("");
// // //       fetchExpenses();
// // //     } catch (error) {
// // //       setMessage("Failed to save expense. Please try again.");
// // //     }
// // //   };

// // //   const handleEdit = (expense) => {
// // //     setEditId(expense._id);
// // //     setDate(expense.date.split("T")[0]);
// // //     setAmount(expense.amount);
// // //     setCategory(expense.category);
// // //     setDescription(expense.description);
// // //     setMessage("Editing expense...");
// // //   };

// // //   const handleDelete = async (id) => {
// // //     try {
// // //       await API.delete(`/expenses/${id}`);
// // //       setMessage("Expense deleted successfully!");
// // //       fetchExpenses();
// // //     } catch (error) {
// // //       setMessage("Failed to delete expense. Please try again.");
// // //     }
// // //   };

// // //   // Prepare data for charts
// // //   const categories = [...new Set(expenses.map((expense) => expense.category))];
// // //   const categoryData = categories.map(
// // //     (category) => expenses.filter((expense) => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0)
// // //   );

// // //   const barChartData = {
// // //     labels: categories,
// // //     datasets: [
// // //       {
// // //         label: "Expenses by Category",
// // //         data: categoryData,
// // //         backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1"],
// // //       },
// // //     ],
// // //   };

// // //   const pieChartData = {
// // //     labels: categories,
// // //     datasets: [
// // //       {
// // //         label: "Expenses by Category",
// // //         data: categoryData,
// // //         backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1"],
// // //       },
// // //     ],
// // //   };

// // //   return (
// // //     <Box
// // //       sx={{
// // //         maxWidth: "800px",
// // //         margin: "20px auto",
// // //         padding: "20px",
// // //         borderRadius: "8px",
// // //         boxShadow: 3,
// // //         backgroundColor: "#f5f5f5",
// // //       }}
// // //     >
      

// // //       {message && <Alert severity="info" sx={{ marginBottom: 2 }}>{message}</Alert>}

// // //       {/* <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
// // //         <TextField
// // //           label="Date"
// // //           type="date"
// // //           InputLabelProps={{ shrink: true }}
// // //           value={date}
// // //           onChange={(e) => setDate(e.target.value)}
// // //           required
// // //         />
// // //         <TextField
// // //           label="Amount"
// // //           type="number"
// // //           value={amount}
// // //           onChange={(e) => setAmount(e.target.value)}
// // //           required
// // //         />
// // //         <TextField
// // //           label="Category"
// // //           value={category}
// // //           onChange={(e) => setCategory(e.target.value)}
// // //           required
// // //         />
// // //         <TextField
// // //           label="Description"
// // //           multiline
// // //           rows={3}
// // //           value={description}
// // //           onChange={(e) => setDescription(e.target.value)}
// // //         />
// // //         <Button type="submit" variant="contained" color="primary">
// // //           {editId ? "Update Expense" : "Add Expense"}
// // //         </Button>
// // //       </Box> */}

// // //       <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
// // //          Expenses List
// // //       </Typography>

// // //       {expenses.length === 0 ? (
// // //         <Typography align="center" color="textSecondary">
// // //           No expenses available
// // //         </Typography>
// // //       ) : (
// // //         <TableContainer component={Paper} sx={{ marginTop: 2 }}>
// // //           <Table>
// // //             <TableHead>
// // //               <TableRow>
// // //                 <TableCell><strong>Date</strong></TableCell>
// // //                 <TableCell><strong>Amount</strong></TableCell>
// // //                 <TableCell><strong>Category</strong></TableCell>
// // //                 <TableCell><strong>Description</strong></TableCell>
// // //                 {/* <TableCell><strong>Actions</strong></TableCell> */}
// // //               </TableRow>
// // //             </TableHead>
// // //             <TableBody>
// // //               {expenses.map((expense) => (
// // //                 <TableRow key={expense._id}>
// // //                   <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
// // //                   <TableCell>{expense.amount}</TableCell>
// // //                   <TableCell>{expense.category}</TableCell>
// // //                   <TableCell>{expense.description}</TableCell>
                  
// // //                 </TableRow>
// // //               ))}
// // //             </TableBody>
// // //           </Table>
// // //         </TableContainer>
// // //       )}

// // //       {/* Charts Section */}
// // //       <Box sx={{ marginTop: 4 }}>
// // //         <Typography variant="h6" align="center">
// // //           Expense Analysis
// // //         </Typography>
// // //         <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 4 }}>
// // //           <Box sx={{ width: "45%" }}>
// // //             <Typography align="center">Bar Chart</Typography>
// // //             <Bar data={barChartData} />
// // //           </Box><br/><br/>
// // //           <Box sx={{ width: "45%" }}>
// // //             <Typography align="center">Pie Chart</Typography>
// // //             <Pie data={pieChartData} />
// // //           </Box>
// // //         </Box>
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default ExpenseList;
// // import React, { useState, useEffect } from "react";
// // import API from "../api/api";
// // import {
// //   TextField,
// //   Button,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   Typography,
// //   Box,
// //   Alert,
// // } from "@mui/material";
// // import { Bar, Pie } from "react-chartjs-2";
// // import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
// // import { useNavigate } from "react-router-dom"; // For routing

// // ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// // const ExpenseList = () => {
// //   const [expenses, setExpenses] = useState([]);
// //   const [message, setMessage] = useState("");
// //   const navigate = useNavigate(); // For navigation

// //   useEffect(() => {
// //     fetchExpenses();
// //   }, []);

// //   const fetchExpenses = async () => {
// //     try {
// //       const { data } = await API.get("/expenses");
// //       setExpenses(data);
// //     } catch (error) {
// //       console.error("Failed to fetch expenses:", error.response?.data || error.message);
// //     }
// //   };

// //   // Prepare data for charts
// //   const categories = [...new Set(expenses.map((expense) => expense.category))];
// //   const categoryData = categories.map(
// //     (category) =>
// //       expenses.filter((expense) => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0)
// //   );

// //   const barChartData = {
// //     labels: categories,
// //     datasets: [
// //       {
// //         label: "Expenses by Category",
// //         data: categoryData,
// //         backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1"],
// //       },
// //     ],
// //   };

// //   const pieChartData = {
// //     labels: categories,
// //     datasets: [
// //       {
// //         label: "Expenses by Category",
// //         data: categoryData,
// //         backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1"],
// //       },
// //     ],
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         width: "100vw", // Full width
// //         height: "100vh", // Full height
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //         padding: "20px",
// //         backgroundColor: "#f9f9f9",
// //       }}
// //     >
// //       <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //         <Typography variant="h4" sx={{ margin: 2 }}>
// //           Expense List
// //         </Typography>
// //         <Button variant="contained" color="primary" onClick={() => navigate("/add-expense")} sx={{ margin: 2 }}>
// //           Add New Expense
// //         </Button>
// //       </Box>

// //       {message && <Alert severity="info" sx={{ width: "100%", marginBottom: 2 }}>{message}</Alert>}

// //       {expenses.length === 0 ? (
// //         <Typography align="center" color="textSecondary">
// //           No expenses available
// //         </Typography>
// //       ) : (
// //         <TableContainer component={Paper} sx={{ width: "90%", maxHeight: "50%", overflow: "auto" }}>
// //           <Table stickyHeader>
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell><strong>Date</strong></TableCell>
// //                 <TableCell><strong>Amount</strong></TableCell>
// //                 <TableCell><strong>Category</strong></TableCell>
// //                 <TableCell><strong>Description</strong></TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {expenses.map((expense) => (
// //                 <TableRow key={expense._id}>
// //                   <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
// //                   <TableCell>{expense.amount}</TableCell>
// //                   <TableCell>{expense.category}</TableCell>
// //                   <TableCell>{expense.description}</TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       )}

// //       {/* Charts Section */}
// //       <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%", marginTop: 4 }}>
// //         <Box sx={{ width: "45%" }}>
// //           <Typography align="center">Bar Chart</Typography>
// //           <Bar data={barChartData} />
// //         </Box>
// //         <Box sx={{ width: "45%" }}>
// //           <Typography align="center">Pie Chart</Typography>
// //           <Pie data={pieChartData} />
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default ExpenseList;

// import React, { useState, useEffect } from "react";
// import API from "../api/api";
// import {
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Box,
//   Alert,
// } from "@mui/material";
// import { Bar, Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
// import { useNavigate } from "react-router-dom"; // For routing

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// const ExpenseList = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate(); // For navigation

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   const fetchExpenses = async () => {
//     try {
//       const { data } = await API.get("/expenses");
//       setExpenses(data);
//     } catch (error) {
//       console.error("Failed to fetch expenses:", error.response?.data || error.message);
//     }
//   };

//   // Prepare data for charts
//   const categories = [...new Set(expenses.map((expense) => expense.category))];
//   const categoryData = categories.map((category) =>
//     expenses
//       .filter((expense) => expense.category === category)
//       .reduce((sum, expense) => sum + expense.amount, 0)
//   );

//   const barChartData = {
//     labels: categories,
//     datasets: [
//       {
//         label: "Expenses by Category",
//         data: categoryData,
//         backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1"],
//       },
//     ],
//   };

//   const pieChartData = {
//     labels: categories,
//     datasets: [
//       {
//         label: "Expenses by Category",
//         data: categoryData,
//         backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1"],
//       },
//     ],
//   };

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         padding: 4,
//         boxSizing: "border-box",
//         gap: 4,
//         backgroundColor: "#f9f9f9",
//       }}
//     >
//       {/* Header Section */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h4">Expense Tracker</Typography>
//         <Button variant="contained" color="primary" onClick={() => navigate("/add-expense")}>
//           Add New Expense
//         </Button>
//       </Box>

//       {/* Message Section */}
//       {message && <Alert severity="info">{message}</Alert>}

//       {/* Expense List Section */}
//       <Box>
//         <Typography variant="h5" sx={{ marginBottom: 2 }}>
//           Expense List
//         </Typography>
//         {expenses.length === 0 ? (
//           <Typography align="center" color="textSecondary">
//             No expenses available
//           </Typography>
//         ) : (
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell><strong>Date</strong></TableCell>
//                   <TableCell><strong>Amount</strong></TableCell>
//                   <TableCell><strong>Category</strong></TableCell>
//                   <TableCell><strong>Description</strong></TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {expenses.map((expense) => (
//                   <TableRow key={expense._id}>
//                     <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
//                     <TableCell>{expense.amount}</TableCell>
//                     <TableCell>{expense.category}</TableCell>
//                     <TableCell>{expense.description}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//       </Box>

//       {/* Charts Section */}
//       <Box>
//         <Typography variant="h5" sx={{ marginBottom: 2 }}>
//           Expense Analysis
//         </Typography>
//         <Box sx={{ }}>
//           <Box sx={{  }}>
//             <Typography align="center">Bar Chart</Typography>
//             <Bar data={barChartData} />
//           </Box><br/>
//           <Box sx={{ flex: 1 }}>
//             <Typography align="center">Pie Chart</Typography>
//             <Pie data={pieChartData} />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ExpenseList;

import React, { useState, useEffect } from "react";
import API from "../api/api";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { useNavigate } from "react-router-dom"; // For routing
import Footer from "./Footer";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const { data } = await API.get("/expenses");
      setExpenses(data);
    } catch (error) {
      console.error("Failed to fetch expenses:", error.response?.data || error.message);
    }
  };

  // Prepare data for charts
  const categories = [...new Set(expenses.map((expense) => expense.category))];
  const categoryData = categories.map((category) =>
    expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0)
  );

  const barChartData = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: categoryData,
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1"],
      },
    ],
  };

  const pieChartData = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: categoryData,
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1"],
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        boxSizing: "border-box",
        gap: 4,
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Expense Tracker</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/expense-form")}>
          Add Dlt Modify
        </Button>
      </Box>

      {/* Message Section */}
      {message && <Alert severity="info">{message}</Alert>}

      {/* Expense List Section */}
      <Box>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Expense List
        </Typography>
        {expenses.length === 0 ? (
          <Typography align="center" color="textSecondary">
            No expenses available
          </Typography>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center"><strong>Date</strong></TableCell>
                  <TableCell align="center"><strong>Amount</strong></TableCell>
                  <TableCell align="center"><strong>Category</strong></TableCell>
                  <TableCell align="center"><strong>Description</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {expenses.map((expense) => (
                  <TableRow key={expense._id}>
                    <TableCell align="center">{new Date(expense.date).toLocaleDateString()}</TableCell>
                    <TableCell align="center">{expense.amount}</TableCell>
                    <TableCell align="center">{expense.category}</TableCell>
                    <TableCell align="center">{expense.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      {/* Charts Section */}
      <Box>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Expense Analysis
        </Typography>
        <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
          <Box sx={{ width: "50%" }}>
            <Typography align="center">Bar Chart</Typography>
            <Bar data={barChartData} />
          </Box>
          <Box sx={{ width: "30%" }}>
            <Typography align="center">Pie Chart</Typography>
            <Pie data={pieChartData} />
          </Box>
        </Box>
      </Box>
<Footer/>
    </Box>
  );
};

export default ExpenseList;
