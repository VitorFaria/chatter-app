import { JSX } from "react";
import { useGetMe } from "../../hooks/useGetMe";
import excludedRoutes from "../../constants/excluded-routes";

interface IGuardProps {
  children: JSX.Element;
}

const Guard = ({children}: IGuardProps) => {
  const { data: user } = useGetMe();

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