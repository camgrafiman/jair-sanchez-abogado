import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'isomorphic-unfetch';

export default function crearApolloCliente(estadoInicial, ctx) {
    // The `ctx` (NextPageContext) will only be present on the server.
    // use it to extract auth headers (ctx.req) or similar.
    console.log("crearApolloCliente ejecutado");
    console.log("graphql uri: ", process.env.NEXT_PUBLIC_GRAPHQL_URL);
    const client = new ApolloClient({
        // ssrMode: Boolean(ctx),
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_GRAPHQL_URL, // Server URL (must be absolute)
            //uri: "https://jair-sanchez-abogado.vercel.app/api/graphql",
            // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            fetch,
        }),
        cache: new InMemoryCache()
        // cache: new InMemoryCache().restore(estadoInicial),
    });
    return client
}