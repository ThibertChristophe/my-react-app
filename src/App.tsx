import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router";
import logo from "./assets/amindis-logo.png";
import background from "./assets/amindis-background.jpeg";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    localStorage.setItem("token", "12345");
    navigate("/dashboard");
  };

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Couvre toute la zone
        backgroundPosition: "center", // Centrer l'image
        backgroundRepeat: "no-repeat", // Ne pas répéter l'image
      }}
    >
      <div
        className="row shadow-lg rounded-4 overflow-hidden"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        {/* Section Hero (Logo + Marque) */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-amindis-blue text-white p-4">
          <img
            src={logo}
            alt="Amindis Logo"
            className="mb-3"
            style={{ width: "250px" }}
          />
          <p className="text-center">
            Your financial analysis and management platform
          </p>
        </div>

        {/* Section Formulaire */}
        <div className="col-md-6 bg-white p-4">
          <h2 className="text-center mb-3">Connexion</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-email">
                  @
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3"></div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-password">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-key"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-amindis-blue w-100">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
