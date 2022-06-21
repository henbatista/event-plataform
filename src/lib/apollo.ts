import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nzzhr0002j01z71zmsgimb/master',
  cache: new InMemoryCache()
})