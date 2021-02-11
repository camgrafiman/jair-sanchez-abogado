import { ApolloServer, gql } from 'apollo-server-micro';
/* Cliente de mongo para acceder a la base de datos */
import { MongoClient } from 'mongodb';


const typeDefs = gql`
    type Usuario {
        _id: ID!
        nombre: String
        apellido: String
        password: String
        email: String
        anoNacimiento: Int
        web: String
        tipo: String
    }

    type Query {
        getUsuarios: [Usuario]!
        getUsuariosTipo(tipo: String!) : [Usuario]
        getUsuario(_id: Int!): Usuario
    }

`;

const resolvers = { 
    Query: {
        getUsuarios: async (_parent, _args, _context, _info) => {
            try {
                /* retornar datos de la coleccion_usuarios en la database conectada: */
                return await _context.db.collection('coleccion_usuarios').findOne().then((data) => {
                    // Mismo que en la data de la coleccion, ver mongoDB Atlas:
                    console.log(data)
                    return data.usuarios
                })
            }
            catch (error) {
                throw error;
            }
        },
        getUsuariosTipo: async (_parent, args, _context) => {
            try {
                // console.log("nombre", args.nombre);
                const {tipo} = args;
                /* retornar datos de la coleccion_usuarios en la database conectada: */
                return await _context.db.collection('coleccion_usuarios').findOne().then((data) => {
                    // Mismo que en la data de la coleccion, ver mongoDB Atlas:
                    // console.log(data.usuarios);
                    const usuarioTipo = data.usuarios.filter(usuario => {
                        return usuario.tipo == tipo;
                    })
                    return usuarioTipo
                })
                
                
            } catch (error) {
                throw error;
            }
        },
        getUsuario: async (_parent, args, _context) => {
            try {
                // console.log("nombre", args.nombre);
                const {_id} = args;
                /* retornar datos de la coleccion_usuarios en la database conectada: */
                return await _context.db.collection('coleccion_usuarios').findOne().then((data) => {
                    // Mismo que en la data de la coleccion, ver mongoDB Atlas:
                    // console.log(data.usuarios);
                    const usuarioSel = data.usuarios.filter(usuario => {
                        return usuario._id == _id;
                    })[0]
                    return usuarioSel
                })
                
                
            } catch (error) {
                throw error;
            }
        }
    }
    // Query: {
    //     getUsuarios: async () => {
    //         try {
    //             const usuarios = await axios.get("https://api.github.com/users");
    //             return usuarios.data.map(({ id, login, avatar_url, name, company, blog }) => ({
    //                 id,
    //                 login,
    //                 avatar_url,
    //                 name,
    //                 company,
    //                 blog
    //             }));
    //         }
    //         catch (error) {
    //             throw error;
    //         }
    //     },
    //     getUsuario: async (_, args) => {
    //         try {
    //             const usuario = await axios.get(`https://api.github.com/users/${args.nombre}`);
    //             return {
    //                 id: usuario.data.id,
    //                 login: usuario.data.login,
    //                 avatar_url: usuario.data.avatar_url,
    //                 name: usuario.data.name,
    //                 company: usuario.data.company,
    //                 blog: usuario.data.blog
    //             };
    //         } catch (error) {
    //             throw error;
    //         }
    //     }
    // }
}


/* Se crea el esquema ejecutable pasandole los schemas definidos (typeDefs) y los resolvers*/
// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// })

let db

// console.log(process.env.MONGO_DB_URI);

// Crear el servidor a partir de una instancia de ApolloServer:
const apolloServer = new ApolloServer({
    // schema,
    typeDefs,
    resolvers,
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