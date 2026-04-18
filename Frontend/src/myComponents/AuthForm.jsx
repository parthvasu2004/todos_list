import { useState } from "react";
import "./AuthForm.css";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-body">
      <div className="auth-container">
        <div className="form-container">

          <div className="form-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>

          {isLogin ? (
            <div className="auth-form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forget Password?</a>
              <button>Login</button>
              <p>
                Not a member?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Signup now
                </a>
              </p>
            </div>
          ) : (
            <div className="auth-form">
              <h2>Signup Form</h2>
              <input type="email" placeholder="Email address" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
              <button>Signup</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}