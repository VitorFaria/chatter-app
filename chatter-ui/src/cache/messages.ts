import { ApolloCache } from "@apollo/client";
import { MessageFragmentFragment as Message } from "../gql/graphql";
import { getMessagesDocument } from "../hooks/useGetMessages";

export const updateMessages = (cache: ApolloCache<any>, message: Message) => {
  const messageQueryOptions = {
    query: getMessagesDocument,
    variables: { 
      chatId: message.chatId 
    },
  };
  const messages = cache.readQuery({ ...messageQueryOptions});

  cache.writeQuery({ 
    ...messageQueryOptions,
    data: {
      messages: (messages?.messages || []).concat(message),
    }
  });
}