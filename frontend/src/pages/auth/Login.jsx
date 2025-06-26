import { Button, TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await loginUser(form);
    console.log("Logged in successfully:", res.data);
    navigate("/dashboard");
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
  }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={6}>
      <Typography variant="h5" gutterBottom>
        Login to Your Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="password"
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
  );
}
