import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password } = formData;

    // Required fields validation
    if (
      !fullName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone validation (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    setUser({
      fullName,
      email,
    });

    navigate("/account");
  };

  return (
    <Layout>
      <div className="page register">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <div className="input-group">
          <label>
            Full Name <span>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>
            Phone Number <span>*</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>
            Email Address <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>
            Password <span>*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            placeholder="Enter company name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="agency">
          <p>
            Are you an Agency? <span>*</span>
          </p>

          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={formData.agency === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={formData.agency === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button
          className="primary-btn bottom-btn"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </Layout>
  );
};

export default Register;