import { JSX, useEffect } from "react";
import { useGetMe } from "../../hooks/useGetMe";
import excludedRoutes from "../../constants/excluded-routes";
import { authenticatedVar } from "../../constants/authenticated";
import { UNKNOWN_ERROR_SNACK_MESSAGE } from "../../constants/errors";
import { snackVar } from "../../constants/snack";

interface IGuardProps {
  children: JSX.Element;
}

const Guard = ({children}: IGuardProps) => {
  const { data: user, error } = useGetMe();

  useEffect(() => {
    if (user) authenticatedVar(true);

  }, [user]);

  useEffect(() => {
    if (error?.networkError) snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);

  }, [error]);

  return (
    <>
      {
        excludedRoutes.includes(window.location.pathname) 
        ? children 
        : user && children
      }
    </>
  )
};

export default Guard;