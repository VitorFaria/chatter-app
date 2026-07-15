import { Container, createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import Snackbar from "./components/snackbar/Snackbar";
import ChatList from "./components/chat-list/ChatList";
import { usePath } from "./hooks/usePath";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

const App = () => {
  const { path } = usePath();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Header/>
        <Guard>
          {path === "/" ? (
            <Grid container>
              <Grid size={{ md: 3}}>
                <ChatList/>
              </Grid>
              <Grid size={{ md: 9}}>
                <Routes/>
              </Grid>
            </Grid>
          ) : (
            <Routes/>
          )}
        </Guard>
        <Snackbar/>
      </ThemeProvider>
    </ApolloProvider>
  );
}

const Routes = () => {
  return (
    <Container>
      <RouterProvider router={Router} />
    </Container>
  )
}

export default App;
