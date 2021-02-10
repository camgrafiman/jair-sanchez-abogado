import styles from '../styles/Index.module.scss';
import ContainerGeneral from '../components/container';
import { Container, Row, Col } from 'react-bootstrap';
const Condiciones = () => {
    return (
        <ContainerGeneral title="Jair Sánchez - Abogado | Acerca de mí" >
            <Container>
                 <h1 data-aos="fade-up"
                    data-aos-anchor-placement="top-center">Condiciones de acceso</h1>
            <p data-aos="fade-up"
                    data-aos-anchor-placement="top-center">El envío de datos personales implica la aceptación expresa por parte del USUARIO de nuestra política de privacidad, con la habilitación del check respectivo en el momento del envío de sus datos.

            El usuario debe acceder a nuestra página Web conforme a la buena fé, las normas de orden público y a las presentes Condiciones Generales de uso. El acceso a nuestro sitio Web se realiza bajo la propia y exclusiva responsabilidad del usuario, que responderá en todo caso de los daños y perjuicios que pueda causar a terceros o a nosotros mismos.

            Teniendo en cuenta la imposibilidad de control respecto a la información, contenidos y servicios que contengan otras páginas web a los que se pueda acceder a través de los enlaces que nuestra página web pueda poner a su disposición, le comunicamos que quedamos eximidos de cualquier responsabilidad por los daños y perjuicios de toda clase que pudiesen derivar por la utilización de esas páginas web, ajenas a nuestro sitio web, por parte del usuario.</p>
            </Container>
           
        </ContainerGeneral>

    )
}

export default Condiciones