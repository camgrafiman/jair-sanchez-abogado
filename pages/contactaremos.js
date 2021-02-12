import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ContainerPrincipal from '../components/container';
import { Col, Row, Container} from 'react-bootstrap';

const contactaremos = () => {

    const router = useRouter();

    useEffect(() => {
        const temporal = setTimeout(() => {
            router.push("/");
        }, 3000);
        return () => {
            clearTimeout(temporal);
      };
    }, [])

    return (
    <ContainerPrincipal title="Jair Sánchez - Abogado | Acerca de mí">
        <Container>
                <Row>
                    <Col className="badge-success">
                        <h2>Gracias, su mensaje ha sido enviado.</h2>
                        <h3>En breve contactaremos con usted.</h3>
                    </Col>
                </Row>
        </Container>
    </ContainerPrincipal>

    )
    }

export default contactaremos