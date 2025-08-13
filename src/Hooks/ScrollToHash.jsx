import { useEffect } from "react";
import { useLocation } from "react-router";


const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
