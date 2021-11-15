import React from "react";
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

const Register = () => {
  const PaperStyle = {
    padding: 20,
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
          <h2>Register</h2>
        </Grid>
        <TextField
          required
          label="Name"
          type="text"
          placeholder="Enter Your Name"
          fullWidth
        ></TextField>
        <TextField
          required
          label="PhoneNo"
          type="PhoneNo"
          placeholder="Enter PhoneNo"
          fullWidth
        ></TextField>
        <TextField
          required
          label="Username"
          type="email"
          placeholder="Enter UserName"
          fullWidth
        ></TextField>
        <TextField
          style = {{marginBottom : '10px'}}
          required
          label="Password"
          type="password"
          placeholder="Enter Password*"
          fullWidth
        ></TextField>
        <FormControl fullWidth style={{marginBottom : '10px'}}>
          <InputLabel>Select Your Gender</InputLabel>
          <Select
            // value={age}
            label="Select Your Gender"
            // onChange={handleChange}
          >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
            <MenuItem value={'other'}>Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Select Your Role</InputLabel>
          <Select
            // value={age}
            label="Select Your Role"
            // onChange={handleChange}
          >
            <MenuItem value={'admin'}>Admin</MenuItem>
            <MenuItem value={'manager'}>Manager</MenuItem>
            <MenuItem value={'employee'}>Employee</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          style = {{marginBottom : '5px'}}
          control={<Checkbox name="CheckedB" color="primary" />}
          label="remember me"
        />
        <Button
          style={{ marginBottom: "15px",}}
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
        >
          sign up
        </Button>
        {/* <Typography>
          <Link href="#">Forgot Password ?</Link>
        </Typography> */}
        <Typography>
          Already have an account? <Link href="/">Login here</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Register;
