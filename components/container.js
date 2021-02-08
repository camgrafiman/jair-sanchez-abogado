import { useEffect } from 'react'; 
import Head from 'next/head';
import Navegacion from './navegacion';
import Footer from '../components/Footer';
import styles from '../styles/Index.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';



const ContainerPrincipal = (props) => {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, [])
    return (
        <div className={styles.container}>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={ props.description}/>
                <link rel="icon" href="/jairsanchez_icono.ico" />
                
            </Head>
            <main className={styles.main}>
                <Navegacion />
                {/* Contenido dentro del container */}
                {props.children}
            </main>
            <Footer />

        </div>

    )
}



ContainerPrincipal.defaultProps = {
    title: 'Jair Sánchez',
    description: 'Abogado en Las Palmas de Gran Canaria. Defendemos sus intereses'
}

export default ContainerPrincipal
