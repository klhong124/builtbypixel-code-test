import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});


const createApolloClient = () => {
	return new ApolloClient({
		ssrMode: true,

		link: httpLink,
		cache: new InMemoryCache(),
	});
};

const client = createApolloClient();
export default client;
