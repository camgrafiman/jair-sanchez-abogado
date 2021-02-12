import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ContainerPrincipal from '../components/container';
import { Col, Row, Container } from 'react-bootstrap';

const error = () => {

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
                    <Col className="badge-danger">
                        <h2>Ha ocurrido un error.</h2>
                        <h3>Por favor, inténtelo de nuevo.</h3>
                    </Col>
                </Row>
        </Container>
    </ContainerPrincipal>

    )
    }

export default error