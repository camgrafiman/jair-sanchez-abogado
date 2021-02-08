import { Col, Row, Container, Image } from 'react-bootstrap';
import styles from '../styles/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
            <footer className={styles.footer}>
                <Container className="pt-3" >
                    <Row className="d-flex flex-row justify-content-center align-items-start" >
                        <Col xs={12} lg={3}>
                            <div className="d-flex flex-row justify-content-center align-items-center bd-highlight mb-3 mr-3">
                                <FontAwesomeIcon icon={['fas', 'marker']} className={styles.iconos} />
                                <div className={styles.textoIconos}> 
                                    <p className={styles.tituloFooter}>Solicitar cita</p>
                                    <p>Contacte conmigo a través del formulario</p>
                                </div>
                            </div>
                            
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="d-flex flex-row justify-content-center align-items-center bd-highlight mb-3 mr-3">
                                <FontAwesomeIcon icon={['fas', 'balance-scale']} className={styles.iconos} />
                                <div className={styles.textoIconos}>
                                    <p className={styles.tituloFooter}>Servicios legales</p>
                                    <ul className={styles.listado + " " + "list-group list-group-flush"}>
                                        <li className="list-group-item flex-fill">Derecho Penal | Derecho Civil</li>
                                        <li className="list-group-item flex-fill">Derecho de Familia | Derecho Laboral</li>
                                        <li className="list-group-item flex-fill">Derecho Administrativo | Derecho Bancario</li>
                                        <li className="list-group-item ">Extranjería | Nacionalidad</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div className="d-flex flex-row justify-content-center align-items-center bd-highlight mb-3 mr-3">
                                <FontAwesomeIcon icon={['fas', 'clock']}  className={styles.iconos}/>
                                <div className={styles.textoIconos}>
                                    <p className={styles.tituloFooter}>Horario de atención</p>
                                    <p>De Lunes a Viernes de 9:00 a 14:30 horas y de 16:00 a 19:00 horas</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row className="justify-content-md-center">
                        <Col xs lg="3" className="text-center"><a href="/aviso_legal" className={styles.enlaceEfecto}>Aviso Legal</a></Col>
                        <Col xs lg="3" className="text-center"><a href="/politica_privacidad" className={styles.enlaceEfecto}>Política de Privacidad</a></Col>
                        <Col xs lg="3" className="text-center"><a href="/cookies" className={styles.enlaceEfecto}>Política de Cookies</a></Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col><p className="text-center">Copyright © 2021 | www.jairsanchez.es | Tlf. <a href="tel:+34638672876" data-hover="+34 638 672 876" className={styles.enlaceEfecto}>+34 638 672 876</a></p> </Col>
                    </Row>
                    <Row>
                        <Col><p className="text-center">Diseño y desarrolo por <a href="#" data-hover="Alejandro Gallego" className={styles.enlaceEfecto}>Alejandro Gallego</a></p> </Col>
                    </Row>
                </Container>
                
            </footer>

        
    )
}

export default Footer
