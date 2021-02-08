import ContainerPrincipal from '../components/container';
import { Col, Row, Container, Image } from 'react-bootstrap';

const contacto = () => {
    
    return (
        <ContainerPrincipal title="Jair Sánchez - Abogado | Acerca de mí">
            <Container className="mt-5">
                <Row data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <Col><h3>Contacto</h3><br />
                        <hr></hr>
                    </Col>
                </Row>
                <Row data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    
                    <Col md={6} className="mt-sm-4">
                        
                        <form action="" method="post">
                            
                        </form>
                        
                       
                    </Col>
                    
                    
                </Row>
                
                
            </Container>
        </ContainerPrincipal>

    )
}

export default contacto