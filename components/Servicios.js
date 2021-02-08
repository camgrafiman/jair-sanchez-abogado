import styles from '../styles/Servicios.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Servicios = () => {
    return (
        <Container fluid className={styles.contenedorServicios}>
            <Row className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center">Áreas de Actuación</h1>
                <p className="text-center">Nuestra práctica profesional se desarrolla en varios ámbitos jurídicos, apostamos por un servicio próximo y personalizado para cada cliente particular o empresarial.</p>
            </Row>
            
            <Row className="d-flex flex-row  flex-grow-1  flex-fill justify-content-center align-items-stretch">
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2 mt-2">
                    <div className={styles.caja + " " + styles.efectoSombra + " " + "d-flex flex-column justify-content-start align-items-center bd-highlight m-1"}>
                                <FontAwesomeIcon icon={['fas', 'balance-scale']} className={styles.iconos} />
                                <div>
                                    <p className={styles.titulos}>Derecho Penal</p>
                                    <p className={styles.textos}>Especialización en todo tipo de procedimientos incluídos en el ámbito del Derecho Penal como: delitos societarios, apropiación indebida, blanqueo de capitales, denuncias, querellas, alcoholemia, accidentes, amenazas, etc.</p>
                                    
                                </div>
                            </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2 mt-2">
                    <div className={styles.caja + " " + styles.efectoSombra + " " + "d-flex flex-column justify-content-start align-items-center bd-highlight m-1"}>
                                <FontAwesomeIcon icon={['fas', 'handshake']} className={styles.iconos} />
                                <div>
                                    <p className={styles.titulos}>Derecho Civil</p>
                                    <p className={styles.textos}>Prestamos servicios legales en toda clase de asuntos relacionados con el derecho civil, redacción de contratos, herencias y sucesiones, arrendamientos, desahucios, etc.</p>
                                    
                                </div>
                            </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2 mt-2">
                    <div className={styles.caja + " " + styles.efectoSombra + " " + "d-flex flex-column justify-content-start align-items-center bd-highlight m-1"}>
                                <FontAwesomeIcon icon={['fas', 'users']} className={styles.iconos} />
                                <div>
                                    <p className={styles.titulos}>Derecho de Familia</p>
                                    <p className={styles.textos}>Resolvemos problemas relativos al matrimonio, separaciones, divorcios, patria potestad de hijos menores, guardia y custodia, separación de bienes, etc.</p>
                                    
                                </div>
                            </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2 mt-2">
                    <div className={styles.caja + " " + styles.efectoSombra + " " + "d-flex flex-column justify-content-start align-items-center bd-highlight m-1"}>
                                <FontAwesomeIcon icon={['fas', 'briefcase']} className={styles.iconos} />
                                <div>
                                    <p className={styles.titulos}>Derecho Laboral</p>
                                    <p className={styles.textos}>Despidos, contratos, expedientes de regulación de empleo, pensiones, sanciones, jubilación, accidentes laborales, procedimientos judiciales laborales, seguridad social, reclamaciones de cantidad, etc.</p>
                                    
                                </div>
                            </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2 mt-2">
                    <div className={styles.caja + " " + styles.efectoSombra + " " + "d-flex flex-column justify-content-start align-items-center bd-highlight m-1"}>
                                <FontAwesomeIcon icon={['fas', 'user-tie']} className={styles.iconos} />
                                <div>
                                    <p className={styles.titulos}>Derecho Administrativo</p>
                                    <p className={styles.textos}>Recursos administrativos, procedimientos, escritos, alegaciones, expropiaciones, contratos, sanciones, multas, expedientes, permisos, licencias, concesiones, autorizaciones, subvenciones, urbanismo, ruido, catastro, etc.</p>
                                    
                                </div>
                            </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2 mt-2">
                    <div className={styles.caja + " " + styles.efectoSombra + " " + "d-flex flex-column justify-content-start align-items-center bd-highlight m-1"}>
                                <FontAwesomeIcon icon={['fas', 'money-check']} className={styles.iconos} />
                                <div>
                                    <p className={styles.titulos}>Derecho Bancario</p>
                                    <p className={styles.textos}>Banca de consumo, operaciones, renting, tarjetas de crédito, financiación hipotecaria y de consumo, financiación de activos y asesoramiento en la prestación de servicios financieros.</p>
                                    
                                </div>
                            </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2 mt-2">
                    <div className={styles.caja + " " + styles.efectoSombra + " " + "d-flex flex-column justify-content-start align-items-center bd-highlight m-1"}>
                                <FontAwesomeIcon icon={['fas', 'hands-helping']} className={styles.iconos} />
                                <div>
                                    <p className={styles.titulos}>Extranjería</p>
                                    <p className={styles.textos}>Actuación eficaz para la obtención de cualquier tipo de autorización de residencia, visados, permisos de trabajo, estancias de estudios, renovaciones, homologaciones de estudios realizados en el extranjero y otros temas de interés para los extranjeros.</p>
                                    
                                </div>
                            </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2 mt-2">
                    <div className={styles.caja + " " + styles.efectoSombra + " " + "d-flex flex-column justify-content-start align-items-center bd-highlight m-1"}>
                                <FontAwesomeIcon icon={['fas', 'passport']} className={styles.iconos} />
                                <div>
                                    <p className={styles.titulos}>Nacionalidad</p>
                                    <p className={styles.textos}>Servicio de asesoramiento para la adquisición de nacionalidad española por residencia, nacimiento, origen, exilio, expedientes, demandas por silencio administrativo, recursos contra la denegación de la nacionalidad </p>
                                    
                                </div>
                            </div>
                    </Col>
                
            </Row>
        </Container>
    )
}

export default Servicios
