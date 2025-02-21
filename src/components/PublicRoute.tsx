import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  const { user } = useAuth();

  if (user === null) {
    return <div>Loading</div>;
  }

  return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
