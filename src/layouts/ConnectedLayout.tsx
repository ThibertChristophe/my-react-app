import { Link, Outlet, useNavigate } from "react-router";
import useMenu from "../hooks/useMenu";

const ConnectedLayout = () => {
  const navigate = useNavigate();
  const { menu, isLoading } = useMenu();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <nav className="d-flex justify-content-between align-items-center container-fluid p-2 border">
        <div>ConnectedLayout</div>
        <div className="navbar navbar-expand-lg">
          {isLoading ? (
            <p>Chargement...</p>
          ) : (
            <nav className="navbar-nav">
              {menu?.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link to={`/${item}`} className="nav-link">
                    {item}
                  </Link>
                </li>
              ))}
            </nav>
          )}
        </div>
        <button onClick={handleClick}>Log out</button>
      </nav>
      <div className="container-fluid">
        <Outlet />
      </div>
    </div>
  );
};

export default ConnectedLayout;
