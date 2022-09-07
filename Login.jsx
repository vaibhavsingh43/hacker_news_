import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const initialValue = { Username: "", Password: "" };
  const admin = { Username: "admin", Password: "admin" };
  const [formValues, setFormvalues] = useState(initialValue);
  const [formErrors, setFormerrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormerrors(validate(formValues));
    setIssubmit(true);
    // setFormvalues({ name: "", email: "", password: "" });
  };
  const validate = (values) => {
    let error = {};
    if (!values.Username) {
      error.Username = "Username is required";
    } else if (values.Username != admin.Username) {
      error.Username = "Username is incoorect";
    }
    if (!values.Password) error.Password = "password is required";
    else if (values.Password != admin.Password)
      error.Password = "Password is incorrect";

    return error;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    }
  }, [formErrors]);

  return (
    <div className="login-container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <h2>Successful Login</h2>
      ) : null}
      <h1>Log In to Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label>Username</label>
          <br></br>
          <input
            type="text"
            name="Username"
            placeholder="Username"
            value={formValues.Username}
            onChange={handleChange}
          />
        </div>
        <span style={{ color: "red" }}> {formErrors.Username}</span>

        <div>
          <label>Passwoed</label> 
          <br></br>
          <input
            type="text"
            name="Password"
            placeholder="Password"
            value={formValues.Password}
            onChange={handleChange}
          />
        </div>
        <span style={{ color: "red" }}>{formErrors.Password}</span>
        <div>
          <br></br>

         <center><input type="submit" /></center> 
        </div>
      </form>
    </div>
  );
};

export default Login;
