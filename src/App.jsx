import { login } from "./utils";
import "./index.css";
import { useState } from "react";

// Instructions:
// * You have an INCOMPLETE login form
// * Adding new HTML elements is not allowed
// * It is not allowed to use refs
//
// Tasks:
// TODO - The Login button must call the login() function, imported at the top of this file, and pass the necessary data.
// TODO - Disable the Login button if the email is blank OR the password is less than 6 digits.
// TODO - Disable the Login button while you are performing the login.
// TODO - Show a login() error message if Login fails. The message must to be cleared in each new login attempt.
// TODO - Show an alert if the login is successful (javascript alert). Investigate the login() function to understand how to succeed the request.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const handleLoginClick = async () => {
    setLoading(true);
    setError(undefined);
    try {
      await login({ email, password });
      alert("Successful login!");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        {/* Put the login error message in the div below. Show the div only if there is an error message. */}
        {error ? <div className="errorMessage">{error}</div> : null}
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            autoComplete="off"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            value={password}
            onChange={handleChangePassword}
          />
        </div>

        <div className="button">
          <button
            disabled={loading || !email || password.length < 6}
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
