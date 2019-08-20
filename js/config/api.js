import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://r10.academy.red/graphql',
});

client
  .query({
    query: gql`
      {
        allConducts {
          id
          description
          title
        }
      }
    `,
  })
  .then(result => console.log(result.data.allConducts));

export default client;
