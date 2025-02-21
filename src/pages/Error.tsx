import { Link } from "react-router";

const Error = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="fs-3 text-dark">Oups! Page introuvable</h2>
      <p className="fs-5 text-muted">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default Error;
