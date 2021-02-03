import Head from 'next/head';
import Navegacion from './navegacion';
import styles from '../styles/Index.module.scss';


const Container = (props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{ props.title }</title>
                <link rel="icon" href="/ley.ico" />
            </Head>
            <main className={styles.main}>
                <Navegacion />
                {/* Contenido dentro del container */}
                {props.children}
            </main>
            <footer className={styles.footer}>
                <a href="/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Diseño por Alejandro Gallego 
                
                </a>
            </footer>
        </div>

    )
}

export default Container
