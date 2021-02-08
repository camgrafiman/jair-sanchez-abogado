import styles from '../styles/Index.module.scss';
import ContainerPrincipal from '../components/container';
import { Col, Row, Container, Image } from 'react-bootstrap';

const AcercaDe = () => {

    
    
    return (
        <ContainerPrincipal title="Jair Sánchez - Abogado | Acerca de mí">
            <Container className="mt-5">
                <Row data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <Col><h3>Jair Sánchez Bonilla</h3><br />
                        <hr></hr>
                    </Col>
                </Row>
                <Row data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <Col md={6} className="mt-sm-4">
                        <Image src="/fotos/jair_sanchez_abogado_derecho_penal.jpg" rounded fluid className="float-start" />
                        <figcaption className="figure-caption">Jair Sánchez Bonilla. Colegiado Nº: 6677 ULPGC</figcaption>
                    </Col>
                    <Col md={6} className="mt-sm-4">
                        
                        <div>
                        
                        <p>Es un reconocido abogado que aporta la mejor defensa y la tranquilidad de contar con la intervención de un experto penalista.    
                        Profesionalmente cuenta con una exitosa experiencia en la resolución de casos de Derecho Penal, Laboral y Extranjería. </p>
                        <ul>
                            <li>Licenciatura en Derecho. Universidad de Las Palmas de Gran Canaria</li>
                            <li>Máster</li>
                            <li>...</li>
                            <li>...</li>
                        </ul>
                        <p>Como abogado especializado en Extranjería, Inmigración, Nacionalidad, Derecho Penal y Laboral, colabora con aquellas personas que quieren establecerse en España de manera regular, asesora y defiende los intereses de sus clientes. Para ello, brinda las herramientas necesarias que les permiten desarrollar sus ideas, sueños y proyectos. Siempre de manera eficaz y ofreciéndoles una amplia cobertura legal.</p>
                        <p>La confianza y el trato cercano que tengo con mis clientes me lleva a dedicar a cada caso una absoluta dedicación, centrándome en cada uno de mis clientes y en sus objetivos para dar el mejor servicio posible, guiandoles y teniendo como premisa la satisfacción plena de sus intereses.</p>
                        <p>El éxito viene definido especialmente por la calidad del servicio prestado, con los resultados obtenidos y las relaciones de confianza recíproca con los clientes.</p>
                        <p>Es por eso que estoy comprometido a brindar un servicio accesible y cercano para todo tipo de personas, con precios económicos, contribuyendo al desarrollo personal, defendiendo intereses, gestionando conflictos y asesorando cada caso, asi como la profundidad en el análisis e interpretación del Derecho y que en definitiva ofrece el mejor servicio a mis clientes, brindando algo único.</p>
                        </div>
                        
                       
                    </Col>
                    
                    
                </Row>
                
                
            </Container>
        </ContainerPrincipal>

    )
}

export default AcercaDe