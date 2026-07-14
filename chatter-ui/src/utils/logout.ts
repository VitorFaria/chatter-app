
import Router from "../components/Routes";
import client from "../constants/apollo-client";
import { authenticatedVar } from "../constants/authenticated";

export const onLogout = () => {
  authenticatedVar(false);
  Router.navigate('/login');
  client.resetStore().catch((resetError) => {});
}