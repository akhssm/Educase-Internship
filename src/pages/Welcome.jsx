import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="welcome">
        <div>
          <h1>Welcome to PopX</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </div>

        <div className="btn-group">
          <button
            className="primary-btn"
            onClick={() => navigate("/register")}
          >
            Create Account
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;