
import Router from "../components/Routes";
import client from "../constants/apollo-client";
import { authenticatedVar } from "../constants/authenticated";
import { removeToken } from "./token";

export const onLogout = () => {
  authenticatedVar(false);
  removeToken();
  Router.navigate('/login');
  client.resetStore().catch((resetError) => {});
}