/* Resolvers son las funciones usadas en las querys para filtrar y retornar los valores deseados.  */
// import axios from 'axios';

export const resolvers = { 
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
