// // // import React, { useState } from "react";
// // // import API from "../api/api";

// // // const AddExpense = () => {
// // //     const [date, setDate] = useState("");
// // //     const [amount, setAmount] = useState("");
// // //     const [category, setCategory] = useState("");
// // //     const [description, setDescription] = useState("");

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             await API.post("/expenses", { date, amount, category, description });
// // //             alert("Expense added successfully");
// // //         } catch (error) {
// // //             alert("Failed to add expense");
// // //         }
// // //     };

// // //     return (
// // //         <form onSubmit={handleSubmit}>
// // //             <h2>Add Expense</h2>
// // //             <input
// // //                 type="date"
// // //                 value={date}
// // //                 onChange={(e) => setDate(e.target.value)}
// // //             />
// // //             <input
// // //                 type="number"
// // //                 placeholder="Amount"
// // //                 value={amount}
// // //                 onChange={(e) => setAmount(e.target.value)}
// // //             />
// // //             <input
// // //                 type="text"
// // //                 placeholder="Category"
// // //                 value={category}
// // //                 onChange={(e) => setCategory(e.target.value)}
// // //             />
// // //             <input
// // //                 type="text"
// // //                 placeholder="Description"
// // //                 value={description}
// // //                 onChange={(e) => setDescription(e.target.value)}
// // //             />
// // //             <button type="submit">Add Expense</button>
// // //         </form>
// // //     );
// // // };

// // // export default AddExpense;
// // import React, { useState } from "react";
// // import API from "../api/api";

// // const AddExpense = () => {
// //     const [date, setDate] = useState("");
// //     const [amount, setAmount] = useState("");
// //     const [category, setCategory] = useState("");
// //     const [description, setDescription] = useState("");

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await API.post("/expenses", { date, amount, category, description });
// //             alert("Expense added successfully");
// //         } catch (error) {
// //             alert("Failed to add expense");
// //         }
// //     };

// //     return (
// //         <form onSubmit={handleSubmit}>
// //             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
// //             <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
// //             <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
// //             <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
// //             <button type="submit">Add Expense</button>
// //         </form>
// //     );
// // };

// // export default AddExpense;
// // import React, { useState } from "react";
// // import API from "../api/api";

// // const AddExpense = () => {
// //     const [date, setDate] = useState("");
// //     const [amount, setAmount] = useState("");
// //     const [category, setCategory] = useState("");
// //     const [description, setDescription] = useState("");
// //     const [message, setMessage] = useState("");

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         setMessage("");

// //         if (!date || !amount || !category) {
// //             setMessage("Date, amount, and category are required.");
// //             return;
// //         }

// //         try {
// //             await API.post("/expenses", { date, amount, category, description });
// //             setMessage("Expense added successfully!");
// //             setDate("");
// //             setAmount("");
// //             setCategory("");
// //             setDescription("");
// //         } catch (error) {
// //             setMessage("Failed to add expense. Please try again.");
// //         }
// //     };

// //     return (
// //         <form onSubmit={handleSubmit}>
// //             {message && <p>{message}</p>}
// //             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
// //             <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
// //             <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
// //             <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
// //             <button type="submit">Add Expense</button>
// //         </form>
// //     );
// // };

// // export default AddExpense;

// import React, { useState, useEffect } from "react";
// import API from "../api/api";

// const ExpenseForm = () => {
//     const [date, setDate] = useState("");
//     const [amount, setAmount] = useState("");
//     const [category, setCategory] = useState("");
//     const [description, setDescription] = useState("");
//     const [message, setMessage] = useState("");
//     const [expenses, setExpenses] = useState([]); // State to store existing expenses
//     const [editId, setEditId] = useState(null); // Track the expense being edited

//     // Fetch all expenses on component mount
//     useEffect(() => {
//         fetchExpenses();
//     }, []);

//     const fetchExpenses = async () => {
//         try {
//             const { data } = await API.get("/expenses");
//             setExpenses(data);
//         } catch (error) {
//             console.error("Failed to fetch expenses:", error.response?.data || error.message);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         if (!date || !amount || !category) {
//             setMessage("Date, amount, and category are required.");
//             return;
//         }

//         try {
//             if (editId) {
//                 // Update existing expense
//                 await API.put(`/expenses/${editId}`, { date, amount, category, description });
//                 setMessage("Expense updated successfully!");
//                 setEditId(null);
//             } else {
//                 // Add new expense
//                 await API.post("/expenses", { date, amount, category, description });
//                 setMessage("Expense added successfully!");
//             }

//             setDate("");
//             setAmount("");
//             setCategory("");
//             setDescription("");
//             fetchExpenses(); // Refresh the list
//         } catch (error) {
//             setMessage("Failed to save expense. Please try again.");
//         }
//     };

//     const handleEdit = (expense) => {
//         setEditId(expense._id);
//         setDate(expense.date.split("T")[0]); // Format date
//         setAmount(expense.amount);
//         setCategory(expense.category);
//         setDescription(expense.description);
//         setMessage("Editing expense...");
//     };

//     const handleDelete = async (id) => {
//         try {
//             await API.delete(`/expenses/${id}`);
//             setMessage("Expense deleted successfully!");
//             fetchExpenses(); // Refresh the list
//         } catch (error) {
//             setMessage("Failed to delete expense. Please try again.");
//         }
//     };

//     return (
//         <div>
//             <h2>{editId ? "Edit Expense" : "Add Expense"}</h2>
//             {message && <p>{message}</p>}

//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Date:</label>
//                     <input
//                         type="date"
//                         value={date}
//                         onChange={(e) => setDate(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Amount:</label>
//                     <input
//                         type="number"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Category:</label>
//                     <input
//                         type="text"
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     ></textarea>
//                 </div>
//                 <button type="submit">{editId ? "Update Expense" : "Add Expense"}</button>
//             </form>

//             <h2>Existing Expenses</h2>
//             {expenses.length === 0 ? (
//                 <p>No expenses available</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Date</th>
//                             <th>Amount</th>
//                             <th>Category</th>
//                             <th>Description</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {expenses.map((expense) => (
//                             <tr key={expense._id}>
//                                 <td>{new Date(expense.date).toLocaleDateString()}</td>
//                                 <td>{expense.amount}</td>
//                                 <td>{expense.category}</td>
//                                 <td>{expense.description}</td>
//                                 <td>
//                                     <button onClick={() => handleEdit(expense)}>Edit</button>
//                                     <button onClick={() => handleDelete(expense._id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default ExpenseForm;
// import React, { useState, useEffect } from "react";
// import API from "../api/api";

// const ExpenseForm = () => {
//     const [date, setDate] = useState("");
//     const [amount, setAmount] = useState("");
//     const [category, setCategory] = useState("");
//     const [description, setDescription] = useState("");
//     const [message, setMessage] = useState("");
//     const [expenses, setExpenses] = useState([]); // State to store existing expenses
//     const [editId, setEditId] = useState(null); // Track the expense being edited

//     // Fetch all expenses on component mount
//     useEffect(() => {
//         fetchExpenses();
//     }, []);

//     const fetchExpenses = async () => {
//         try {
//             const { data } = await API.get("/expenses");
//             setExpenses(data);
//         } catch (error) {
//             console.error("Failed to fetch expenses:", error.response?.data || error.message);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         if (!date || !amount || !category) {
//             setMessage("Date, amount, and category are required.");
//             return;
//         }

//         try {
//             if (editId) {
//                 // Update existing expense
//                 await API.put(`/expenses/${editId}`, { date, amount, category, description });
//                 setMessage("Expense updated successfully!");
//                 setEditId(null);
//             } else {
//                 // Add new expense
//                 await API.post("/expenses", { date, amount, category, description });
//                 setMessage("Expense added successfully!");
//             }

//             setDate("");
//             setAmount("");
//             setCategory("");
//             setDescription("");
//             fetchExpenses(); // Refresh the list
//         } catch (error) {
//             setMessage("Failed to save expense. Please try again.");
//         }
//     };

//     const handleEdit = (expense) => {
//         setEditId(expense._id);
//         setDate(expense.date.split("T")[0]); // Format date
//         setAmount(expense.amount);
//         setCategory(expense.category);
//         setDescription(expense.description);
//         setMessage("Editing expense...");
//     };

//     const handleDelete = async (id) => {
//         try {
//             await API.delete(`/expenses/${id}`);
//             setMessage("Expense deleted successfully!");
//             fetchExpenses(); // Refresh the list
//         } catch (error) {
//             setMessage("Failed to delete expense. Please try again.");
//         }
//     };

//     // Inline styles
//     const styles = {
//         container: {
//             fontFamily: "'Arial', sans-serif",
//             padding: "20px",
//             maxWidth: "800px",
//             margin: "0 auto",
//             backgroundColor: "#f9f9f9",
//             borderRadius: "8px",
//             boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//         },
//         heading: {
//             textAlign: "center",
//             color: "#333",
//         },
//         form: {
//             display: "flex",
//             flexDirection: "column",
//             gap: "15px",
//             marginBottom: "30px",
//         },
//         input: {
//             padding: "10px",
//             fontSize: "14px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//         },
//         button: {
//             padding: "10px 15px",
//             fontSize: "14px",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//         },
//         buttonSecondary: {
//             padding: "8px 12px",
//             fontSize: "12px",
//             backgroundColor: "#6c757d",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//             marginLeft: "5px",
//         },
//         table: {
//             width: "100%",
//             borderCollapse: "collapse",
//         },
//         th: {
//             backgroundColor: "#007bff",
//             color: "#fff",
//             padding: "10px",
//             textAlign: "left",
//         },
//         td: {
//             padding: "10px",
//             borderBottom: "1px solid #ddd",
//         },
//         message: {
//             textAlign: "center",
//             padding: "10px",
//             color: "green",
//         },
//         errorMessage: {
//             color: "red",
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.heading}>{editId ? "Edit Expense" : "Add Expense"}</h2>
//             {message && <p style={styles.message}>{message}</p>}

//             <form style={styles.form} onSubmit={handleSubmit}>
//                 <div>
//                     <label>Date:</label>
//                     <input
//                         style={styles.input}
//                         type="date"
//                         value={date}
//                         onChange={(e) => setDate(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Amount:</label>
//                     <input
//                         style={styles.input}
//                         type="number"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Category:</label>
//                     <input
//                         style={styles.input}
//                         type="text"
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         style={styles.input}
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     ></textarea>
//                 </div>
//                 <button style={styles.button} type="submit">
//                     {editId ? "Update Expense" : "Add Expense"}
//                 </button>
//             </form>

//             <h2 style={styles.heading}>Existing Expenses</h2>
//             {expenses.length === 0 ? (
//                 <p style={styles.errorMessage}>No expenses available</p>
//             ) : (
//                 <table style={styles.table}>
//                     <thead>
//                         <tr>
//                             <th style={styles.th}>Date</th>
//                             <th style={styles.th}>Amount</th>
//                             <th style={styles.th}>Category</th>
//                             <th style={styles.th}>Description</th>
//                             <th style={styles.th}>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {expenses.map((expense) => (
//                             <tr key={expense._id}>
//                                 <td style={styles.td}>
//                                     {new Date(expense.date).toLocaleDateString()}
//                                 </td>
//                                 <td style={styles.td}>{expense.amount}</td>
//                                 <td style={styles.td}>{expense.category}</td>
//                                 <td style={styles.td}>{expense.description}</td>
//                                 <td style={styles.td}>
//                                     <button
//                                         style={styles.buttonSecondary}
//                                         onClick={() => handleEdit(expense)}
//                                     >
//                                         Edit
//                                     </button>
//                                     <button
//                                         style={styles.buttonSecondary}
//                                         onClick={() => handleDelete(expense._id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default ExpenseForm;

///////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import API from "../api/api";
import {
  TextField,
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

const ExpenseForm = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editId, setEditId] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!date || !amount || !category) {
      setMessage("Date, amount, and category are required.");
      return;
    }

    try {
      if (editId) {
        await API.put(`/expenses/${editId}`, { date, amount, category, description });
        setMessage("Expense updated successfully!");
        setEditId(null);
      } else {
        await API.post("/expenses", { date, amount, category, description });
        setMessage("Expense added successfully!");
      }

      setDate("");
      setAmount("");
      setCategory("");
      setDescription("");
      fetchExpenses();
    } catch (error) {
      setMessage("Failed to save expense. Please try again.");
    }
  };

  const handleEdit = (expense) => {
    setEditId(expense._id);
    setDate(expense.date.split("T")[0]);
    setAmount(expense.amount);
    setCategory(expense.category);
    setDescription(expense.description);
    setMessage("Editing expense...");
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/expenses/${id}`);
      setMessage("Expense deleted successfully!");
      fetchExpenses();
    } catch (error) {
      setMessage("Failed to delete expense. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: 3,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        {editId ? "Edit Expense" : "Add Expense"}
      </Typography>

      {message && <Alert severity="info" sx={{ marginBottom: 2 }}>{message}</Alert>}

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <TextField
          label="Description"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          {editId ? "Update Expense" : "Add Expense"}
        </Button>
      </Box>

      <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
        Existing Expenses
      </Typography>

      {expenses.length === 0 ? (
        <Typography align="center" color="textSecondary">
          No expenses available
        </Typography>
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Amount</strong></TableCell>
                <TableCell><strong>Category</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((expense) => (
                <TableRow key={expense._id}>
                  <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                  <TableCell>{expense.amount}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(expense)}
                      sx={{ marginRight: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(expense._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ExpenseForm;


