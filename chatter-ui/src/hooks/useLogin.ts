import { useState } from "react"
import { API_URL } from "../constants/urls";
import client from "../constants/apollo-client";
import { UNKNOWN_ERROR_MESSAGE } from "../constants/errors";

interface ILoginRequest {
  email: string
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();

  const login = async (request: ILoginRequest) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(request)
    });

    if (!res.ok) {
      if (res.status === 401) {
        setError("Credentials are not valid.");
      } else {
        setError(UNKNOWN_ERROR_MESSAGE);
      }
      return;
    }

    setError("");
    await client.refetchQueries({ include: 'active' });
  };

  return { login, error};
}

export { useLogin }