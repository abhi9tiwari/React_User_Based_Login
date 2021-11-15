import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Login = () => {
  const [value, setvalue] = useState('admin');
  const handleOnChange = (event) => {
    setvalue(event.target.value);
  };
  const handleOnClick = (event) => {
    event.preventDefault();
    var valuee = value;
    console.log(valuee);
    if (valuee === "employee") {
      <Navigate
        to={{
          pathname: "/employee",
        }}
      />;
    } else if (valuee === "manager") {
      return <Navigate to="/manager" />;
    } else if (valuee === "admin") {
      return <Navigate to="/admin" />;
    }
  };
  const PaperStyle = {
    padding: 20,
    height: "60vh",
    width: "400px",
    margin: "20px auto",
  };
  const avatarstyle = { backgroundColor: "red" };
  return (
    <Grid>
      <Paper elevation={10} style={PaperStyle}>
        <Grid align="center">
          <Avatar style={avatarstyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          required
          label="Username"
          type="email"
          placeholder="Enter UserName"
          fullWidth
        ></TextField>
        <TextField
          style={{ marginBottom: "10px" }}
          required
          label="Password"
          type="password"
          placeholder="Enter Password*"
          fullWidth
        ></TextField>
        <FormControl fullWidth>
          <InputLabel>Select Your Role</InputLabel>
          <Select
            // id="select1"
            labelId="select1"
            value={value ?? "admin" ?? "manager" ?? "employee"}
            label="Select Your Role"
            onChange={handleOnChange}
          >
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"manager"}>Manager</MenuItem>
            <MenuItem value={"employee"}>Employee</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          style={{ marginBottom: "5px" }}
          control={<Checkbox name="CheckedB" color="primary" />}
          label="remember me"
        />
        <Button
          onClick={handleOnClick}
          style={{ marginBottom: "15px" }}
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
        >
          sign in
        </Button>
        <Typography>
          Don't have an account? <Link href="/register">Register here</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
