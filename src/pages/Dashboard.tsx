import { Link } from "react-router";

export const Dashboard = () => {
  return (
    <div className="pt-2">
      <h2>Dashboard</h2>
      <div className="row gap-2">
        <Link to="/" replace>
          Login
        </Link>
        <Link to="/produits" replace>
          Produits
        </Link>
      </div>
    </div>
  );
};
