/* Esquemas de GraphQL */
import { gql } from 'apollo-server-micro';

// Aquí defino un tipo Usuario que describe los campos que tiene, id, login y avatar.
// en el type query tengo los querys posibles para retornar un array de usuarios o un usuario unico que pide el nombre para conseguir el dato.
// export const typeDefs = gql`
//     type Usuario {
//         id: ID
//         login: String
//         avatar_url: String
//         name: String
//         company: String
//         blog: String
//     }

//     type Query {
//         getUsuarios: [Usuario]
//         getUsuario(nombre: String!): Usuario!
//     }

// `

export const typeDefs = gql`
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

`