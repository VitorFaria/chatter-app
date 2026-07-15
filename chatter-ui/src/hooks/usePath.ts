import { useEffect, useState } from "react";
import Router from "../components/Routes";

const usePath = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    Router.subscribe((state) => {
      setPath(state.location.pathname);
    });
  }, [path]);

  return { path };
}

export { usePath };