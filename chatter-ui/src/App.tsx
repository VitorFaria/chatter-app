import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from "./components/auth/Guard";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Container>
          <Guard>
            <RouterProvider router={Router} />
          </Guard>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
