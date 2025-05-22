
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth-slice";
import medicineImg from "../../assets/medicine-tablets.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) navigate("/admin-dashboard");
  }, [token, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <>
    <Header/>
    <div className="main-container">
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card-login p-5 shadow" >
        <img className="mb-3" src={medicineImg} alt="Medicine" style={{ width: "70px",height:"120px;", margin: "auto" }} />
        <p className="text-center text-success">
          <strong>Welcome back, enter your credentials to continue.</strong>
          <h2>This is medicine management system</h2>
        </p>
        {error && <p className="alert alert-danger">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="name@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success " disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
