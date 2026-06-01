import { useContext } from "react";
import Layout from "../components/Layout";
import { UserContext } from "../context/UserContext";
import { FaCamera } from "react-icons/fa";

const Account = () => {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <div className="account-page">
        <div className="account-header">
          <h2>Account Settings</h2>
        </div>

        <div className="account-content">
          <div className="profile-card">
            <div className="profile-image-wrapper">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="profile"
              />

              <div className="camera-icon">
                <FaCamera />
              </div>
            </div>

            <div>
              <h3>{user?.fullName || "Marry Doe"}</h3>
              <p>{user?.email || "marry@example.com"}</p>
            </div>
          </div>

          <p className="description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat, Sed Diam.
          </p>
        </div>

        <div className="bottom-line"></div>
      </div>
    </Layout>
  );
};

export default Account;