import { ApolloServer, gql } from 'apollo-server-micro';
/* Cliente de mongo para acceder a la base de datos */
import { MongoClient } from 'mongodb';
const objectID = require('mongodb').ObjectID;


const typeDefs = gql`
    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String
        password: String!
        email: String!
        anoNacimiento: Int
        web: String
        tipo: String!
    }

    type Contacto {
        _id: ID!
        nombre: String!
        email: String!
        telefono: String!
        ciudad: String
        consulta: String
        mensaje: String
        confirmacion: Boolean
    }

    type Query {
        getUsuarios: [Usuario]!
        getUsuariosTipo(tipo: String!) : [Usuario]
        getUsuario(_id: ID!): Usuario
        getContactos: [Contacto]!
        getContacto(_id: ID!): Contacto
        getContactosConsulta(consulta: String!): Contacto
    }

    type Mutation {
        addUsuarios(nombre: String!, password:String!, email: String!, tipo: String!, apellido: String, anoNacimiento: Int, web: String): Usuario!
        addContacto(nombre: String!, email: String!, telefono: String!, ciudad: String, consulta: String, mensaje: String, confirmacion: Boolean): Contacto!

    }

`;


const resolvers = { 
    Query: {
        getUsuarios: async (_parent, _args, _context, _info) => {
            try {
                /* retornar datos de la coleccion_usuarios en la database conectada: */
                // return await _context.db.collection('coleccion_usuarios').findOne().then((data) => {
                //     // Mismo que en la data de la coleccion, ver mongoDB Atlas:
                //     console.log(data)
                //     return data.usuarios
                // })
                // /* retornar datos de la coleccion_usuarios en la database conectada: */
                //console.log(_context.db.collection('coleccion_usuarios').find())
                const datos = await _context.db.collection('coleccion_usuarios').find({}).toArray();
                // await datos.forEach(d => {
                //     console.log(d)
                // })

                return datos
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
                const usuariostipo = await _context.db.collection('coleccion_usuarios').find({ tipo: tipo }).toArray();
                console.log(usuariostipo)

                return usuariostipo;
                
                
            } catch (error) {
                throw error;
            }
        },
        getUsuario: async (_parent, args, _context) => {
            try {
                // console.log("nombre", args.nombre);
                const {_id} = args;
                /* retornar datos de la coleccion_usuarios en la database conectada: */
                return await _context.db.collection('coleccion_usuarios').findOne({ _id: new objectID(_id) });
                
                
            } catch (error) {
                throw error;
            }
        },
        getContactos: async (_parent, _args, _context, _info) => {
            try {
                /* retornar datos de la coleccion_usuarios en la database conectada: */
                // return await _context.db.collection('coleccion_usuarios').findOne().then((data) => {
                //     // Mismo que en la data de la coleccion, ver mongoDB Atlas:
                //     console.log(data)
                //     return data.usuarios
                // })
                // /* retornar datos de la coleccion_usuarios en la database conectada: */
                //console.log(_context.db.collection('coleccion_usuarios').find())
                const datos = await _context.db.collection('coleccion_contactos').find({}).toArray();
                // await datos.forEach(d => {
                //     console.log(d)
                // })

                return datos
            }
            catch (error) {
                throw error;
            }
        },
        getContactosConsulta: async (_parent, args, _context) => {
            try {
                // console.log("nombre", args.nombre);
                const {consulta} = args;
                /* retornar datos de la coleccion_usuarios en la database conectada: */
                const contactosConsulta = await _context.db.collection('coleccion_contactos').find({ consulta: consulta }).toArray();
                console.log(contactosConsulta)

                return contactosConsulta;
                
                
            } catch (error) {
                throw error;
            }
        },
        getContacto: async (_parent, args, _context) => {
            try {
                // console.log("nombre", args.nombre);
                const {_id} = args;
                /* retornar datos de la coleccion_usuarios en la database conectada: */
                return await _context.db.collection('coleccion_contactos').findOne({ _id: new objectID(_id) });
                
                
            } catch (error) {
                throw error;
            }
        },
        // getContactos: async (_parent, _args, _context, _info) => {
        //     try {
        //         /* retornar datos de la coleccion_usuarios en la database conectada: */
        //         return await _context.db.collection('coleccion_contactos').findOne().then((data) => {
        //             // Mismo que en la data de la coleccion, ver mongoDB Atlas:
        //             console.log(data)
        //             return data.contactos
        //         })
        //     }
        //     catch (error) {
        //         throw error;
        //     }
        // },
        // getContactosConsulta: async (_parent, args, _context, _info) => {
        //     try {
        //         // console.log("nombre", args.nombre);
        //         const {consulta} = args;
        //         /* retornar datos de la coleccion_usuarios en la database conectada: */
        //         return await _context.db.collection('coleccion_contactos').findOne().then((data) => {
        //             // Mismo que en la data de la coleccion, ver mongoDB Atlas:
        //             const contactoSel = data.contactos.filter(contacto => {
        //                 return contacto.consulta == consulta;
        //             })[0]
        //             return contactoSel
        //         })
                
                
        //     } catch (error) {
        //         throw error;
        //     }
        // },
        // getContacto: async (_parent, args, _context) => {
        //     try {
        //         // console.log("nombre", args.nombre);
        //         const {_id} = args;
        //         /* retornar datos de la coleccion_usuarios en la database conectada: */
        //         return await _context.db.collection('coleccion_contactos').findOne({_id: new objectID(_id)}).then((data) => {
        //             // Mismo que en la data de la coleccion, ver mongoDB Atlas:
        //             const contactoSel = data.contactos.filter(contactos => {
        //                 return contactos._id == _id;
        //             })[0]
        //             return contactoSel
        //         })
                
                
        //     } catch (error) {
        //         throw error;
        //     }
        // }
    },
    Mutation: {
        addUsuarios: async (_parent, args, _context, _info) => {
            const nuevoUsuario = {
                    nombre: args.nombre,
                    email: args.email,
                    password: args.password,
                    tipo: args.tipo,
                    apellido: args.apellido,
                    anoNacimiento: args.anoNacimiento,
                    web: args.web
                }
            try {
                // _context.db.collection('coleccion_usuarios').insertOne(nuevoUsuario);
                _context.db.collection('coleccion_usuarios').insertOne(nuevoUsuario);
                return nuevoUsuario;
                
            }
            catch (error) {
                throw error;
            }
        },
        addContacto: async (_parent, args, _context, _info) => {
            const nuevoContacto = {
                    nombre: args.nombre,
                    email: args.email,
                    telefono: args.telefono,
                    ciudad: args.ciudad,
                    consulta: args.consulta,
                    mensaje: args.mensaje,
                    confirmacion: args.confirmacion
            }
            
            try {
                _context.db.collection('coleccion_contactos').insertOne(nuevoContacto);
                return nuevoContacto;
            }
            catch (error) {
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