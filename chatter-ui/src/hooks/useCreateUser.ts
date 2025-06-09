import { gql, useMutation } from "@apollo/client";
import { User } from "../models/User";

interface ICreateUserInput {
  createUserInput: {
    email: string;
    password: string;
  };
}

const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`

const useCreateUser = () => {
  return useMutation<User, ICreateUserInput>(CREATE_USER);
};

export { useCreateUser };