import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState<boolean | null>(null);

  useEffect(() => {
    const token: string | null = localStorage.getItem("token");

    if (token?.length === 0 || token === null) {
      setUser(false);
    } else {
      // verif du token si valide par exemple
      // fetch api ou localement
      setUser(true);
    }
  }, []);

  return { user };
};

export default useAuth;
