import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import styles from '../styles/Presentacion.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Presentacion = () => {
    return (
        <Container className={styles.presentacion}>
            <Row className="d-flex flex-row justify-content-center align-items-center">
                <Col sm={10}>
                    <Jumbotron className={styles.jumbo} >
                        <h1>¿Buscas un abogado en Las Palmas de Gran Canaria?</h1>
                        <br />
                                <p>
                                    <span className={styles.negrita}>¡Bienvenid@!</span> aquí encontrarás asesoría jurídica de calidad con soluciones prácticas adaptadas a las necesidades de cada cliente, actuando con profesionalidad, transparencia y seriedad. <br /><br/>
                                    Me esfuerzo por alcanzar la excelencia en el desarrollo de la profesión con un único objetivo: la satisfacción de cada cliente. Es por ello que me encargo de manera personalizada de gestionar los temas jurídicos que a usted le es imposible atender.<br/><br/>

                                    Trabajo día a día buscando siempre la resolución más favorable para mis clientes, por eso, me encuentro siempre dedicado a una continua formación para ofrecer siempre la mejor defensa a sus intereses con seriedad y rigor.<br />
                                    No dude en realizar su consulta por vía telefónica o por nuestro formulario.<br />
                                    Contactaremos con usted tan pronto como sea posible.
                                </p>
                                <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
                                    <Link className={styles.link} href="/servicios"><button className={styles.botonGeneral + " " + styles.btn5}><FontAwesomeIcon icon={['fas', 'chevron-circle-right']} className={styles.iconoBoton} /> <span className={styles.textoBoton}>Ver servicios</span></button></Link>
                                    <Link href="/contacto"><button className={styles.botonGeneral + " " + styles.btn5} ><FontAwesomeIcon icon={['fas', 'hand-point-right']} className={styles.iconoBoton} /> <span className={styles.textoBoton}>Solicitar consulta</span> </button></Link>
                                </div>
                                    
                                    
                                
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Presentacion
