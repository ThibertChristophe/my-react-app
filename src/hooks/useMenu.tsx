import { useState, useEffect } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // fetch pour recuperer le menu
    setMenu(["Dashboard", "Produits", "A propos"]);
    setIsLoading(false);
  }, []);

  return { menu, isLoading };
};

export default useMenu;
