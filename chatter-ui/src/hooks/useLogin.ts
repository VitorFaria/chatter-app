import { useState } from "react"
import { API_URL } from "../constants/urls";
import client from "../constants/apollo-client";

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
        setError("Something went wrong.Try again later.");
      }
      return;
    }

    setError("");
    await client.refetchQueries({ include: 'active' });
  };

  return { login, error};
}

export { useLogin }