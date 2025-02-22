import { Link, Outlet, useNavigate } from "react-router";
import useMenu from "../hooks/useMenu";
import logo from "../assets/amindis-logo.png";

const ConnectedLayout = () => {
  const navigate = useNavigate();
  const { menu, isLoading } = useMenu();

  const handleClick = () => {
    // logout
    // effacement du token
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-amindis-blue d-flex justify-content-between align-items-center container-fluid p-2 px-4">
        <img src={logo} alt="Amindis Logo" style={{ width: "150px" }} />
        <div className="navbar navbar-expand-lg">
          {isLoading ? (
            <p>Chargement...</p>
          ) : (
            <nav className="navbar-nav">
              {menu?.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={`/${item}`}
                    className="nav-link link-amindis-orange"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </nav>
          )}
        </div>
        <button className="btn btn-amindis-orange" onClick={handleClick}>
          Log out
        </button>
      </nav>
      <div className="container-fluid px-4 pt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default ConnectedLayout;
