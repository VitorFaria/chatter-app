import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useState } from "react";
import { extractErrorMessage } from "../../utils/errors";

const Signup = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("");

  return (
    <Auth 
      submitLabel="Signup" 
      error={error}
      onSubmit={async ({email, password}) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          })
        } catch (err) {
          const errorMessage = extractErrorMessage(err);

          if (errorMessage) {
            setError(errorMessage);
            return;
          }
          setError("Something went wrong.Try again later.")
        }
    }}>
      <Link to={'/login'} style={{alignSelf: 'center'}}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
}

export default Signup;