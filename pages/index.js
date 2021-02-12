import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';
import ContainerPrincipal from '../components/container';
import Presentacion from '../components/Presentacion';
import Carrusel from '../components/carrusel';
import { WhatsappBoton } from '../components/WhatsappBoton';
import VideoFullContainer from '../components/videofullcontainer';
import Servicios from '../components/Servicios';
import ContactFormulario from '../components/ContactFormulario';


const Index = (props) => {
    console.log("datos de getStaticProps: ", props.usuarios);
    return (
        <>
            <ContainerPrincipal
                title="Abogado en Las Palmas de Gran Canaria"
                description=""
            >
                
                <VideoFullContainer ruta="/videos/composicion_video.mp4" /> 
                {/* <Carrusel /> */}
                <Presentacion />
                <Servicios />
                <ContactFormulario/>
                <WhatsappBoton/>
            </ContainerPrincipal>
            
        </>
    )
}
export default Index;

// //getServerSideProps 
// export async function getStaticProps(context) {

//     /* Traer datos API SPACEX - EXTERNA */

//     // const client = new ApolloClient({
//     //     uri: 'https://api.spacex.land/graphql',
//     //     cache: new InMemoryCache()
//     // })

//     // const { data } = await client.query({
//     //     query: gql`
//     //     query GetLaunches {
//     //         launchesPast(limit:10) {
//     //             id
//     //             mission_name
//     //             launch_date_local
//     //             launch_site {
//     //                 site_name_long
//     //             }
//     //             links {
//     //                 article_link
//     //                 video_link
//     //                 mission_patch
//     //             }
//     //             rocket {
//     //                 rocket_name
//     //             }
//     //         }
//     //     }
        
//     //     `
//     // })

// /* USAR API GRAPHQL  */
//     console.log('URL DE GRAPHQL: ', process.env.GRAPHQL_URI)
//     console.log(process.env.SALUDO)

//     const client = new ApolloClient({
//         ssrMode: typeof window === "undefined",
//         link: new HttpLink({
//             uri: process.env.GRAPHQL_URI,
//             // credentials: 'same-origin'
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//                 'Access-Control-Allow-Credentials': true,
//             }
//         }),
//         cache: new InMemoryCache(),
        
//     })

   
//         const {data} = await client.query({
//                 query: gql`
//                 query users {
//                     getUsuarios {
//                         _id
//                         nombre
//                         apellido
//                         email
//                     }
//                 }
                
//                 `
//             })

//             console.log('data ', data.getUsuarios);
    
    

    

//     return {
//         props: {
//             usuarios: data.getUsuarios
//         }, // Será pasado al componente pagina como props.
//     }
// }


