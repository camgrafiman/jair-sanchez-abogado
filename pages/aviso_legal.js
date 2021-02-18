import styles from '../styles/Legal.module.scss';
import ContainerGeneral from '../components/container';
import { Container, Row, Col } from 'react-bootstrap';
const AvisoLegal = () => {
    return (
        <ContainerGeneral title="Jair Sánchez - Abogado | Acerca de mí" >
            <Container md={10} className="mt-5 mb-5">
                <Row>
                    <Col>
                        <h1 data-aos="fade-up"
                                data-aos-anchor-placement="top-center">Aviso legal</h1>
                        <p data-aos="fade-up"
                                data-aos-anchor-placement="top-center">Esta página Web es propiedad de Jair Sánchez Bonilla.
                        Para cualquier consulta o propuesta, contáctenos en el e-mail: <a className={styles.enlace} href="mailto:info@jairsanchez.es">info@jairsanchez.es</a><br/>

                        Esta página Web se rige por la normativa exclusivamente aplicable en España y en espacio que comprende la Unión Europea, quedando sometida a ella, tanto nacionales como extranjeros que utilicen esta Web.<br/>

                        El acceso a nuestra página Web por parte del USUARIO está condicionado a la previa lectura y aceptación integra, expresa y sin reservas de las presentes CONDICIONES GENERALES DE USO vigentes en el momento del acceso, que rogamos lea detenidamente. El USUARIO en el momento que utiliza nuestro portal, sus contenidos o servicios, acepta y se somete expresamente a las condiciones generales de uso del mismo. Si el usuario no estuviere de acuerdo con las presentes condiciones de uso, deberá abstenerse de utilizar este portal y operar por medio del mismo.<br/>

                        En cualquier momento podremos modificar la presentación y configuración de nuestra Web, ampliar o reducir servicios, e incluso suprimirla de la Red, así como los servicios y contenidos prestados, todo ello de forma unilateral y sin previo aviso.</p>
                    </Col>
                </Row>
            
            </Container>
            
        </ContainerGeneral>

    )
}

export default AvisoLegal