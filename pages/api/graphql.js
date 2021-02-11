import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro';
import { typeDefs } from './schemas/index';
import { resolvers } from './resolvers/index';
/* Esquema ejecutable de GraphQL */
// import { makeExecutableSchema } from 'graphql-tools';
/* Cliente de mongo para acceder a la base de datos */
import { MongoClient } from 'mongodb';



/* Se crea el esquema ejecutable pasandole los schemas definidos (typeDefs) y los resolvers*/
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

let db

console.log(process.env.MONGO_DB_URI);

// Crear el servidor a partir de una instancia de ApolloServer:
const apolloServer = new ApolloServer({
    schema,
    // typeDefs,
    // resolvers,
    context: async () => {
        if (!db) {
            try {
                const dbClient = new MongoClient(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
                
                if (!dbClient.isConnected()) await dbClient.connect()
                db = dbClient.db('jair-sanchez-db') // nombre de la base de datos
            }
            catch (error) {
                console.log('--> Error mientras se intentaba conectar al contexto graphQl (db) ',  error)
            }
        }
        return { db }
    },
    introspection: true,
    playground: true,
});



const handler = apolloServer.createHandler({
    path: '/api/graphql'
});

export const config = {
    api: {
        bodyParser: false
    }
};

export default handler;