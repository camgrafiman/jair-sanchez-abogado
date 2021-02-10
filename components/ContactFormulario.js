import { useForm } from 'react-hook-form';
import {Container, Col, Row, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Presentacion.module.scss';

const ContactFormulario = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Container fluid className={styles.fullContainer}>
            <Container className={styles.contacto + " mt-5"}>
                <Row data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <Col>
                    <h3>Contacto</h3><br />
                    <p>
                        ¿Necesitas un abogado? déjenos sus datos y nosotros le llamamos.<br />
                        Rellene el formulario y le llamaremos lo antes posible, o si lo prefiere puede llamar al 638 67 28 76 y
                        concertaremos una cita.
                    </p>
                    <hr>
                            </hr>

                    </Col>
                </Row>
                <Row data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <Col md={12} className="mt-sm-4">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Row>
                            <Form.Group as={Col} sm={12} md={6} controlId="formGridNombre">
                                <Form.Label>Nombre y apellidos *</Form.Label>
                                        <Form.Control as="input" name="nombre" type="text" placeholder="Escriba su nombre"
                                            ref={
                                                register({
                                                    required: { value: true, message: 'Debe introducir un nombre.'}
                                                })
                                            } />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors?.nombre?.message}
                                </span>
                                        
                            </Form.Group>

                            <Form.Group as={Col} sm={12} md={6} controlId="formGridEmail">
                                <Form.Label>Correo electrónico *</Form.Label>
                                <Form.Control name="email" type="email" placeholder="miemail@gmail.com" 
                                    ref={
                                        register({
                                            required: { value: true, message: 'Debe introducir un correo de contacto.'}
                                                })
                                        }
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors?.email?.message}
                                </span>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} sm={12} md={4} controlId="formGridTelefono">
                                <Form.Label>Teléfono *</Form.Label>
                                <Form.Control name="telefono" placeholder="+34 699 999 999" 
                                    ref={
                                        register({
                                            required: { value: true, message: 'Introduzca un teléfono de contacto.'}
                                                })
                                        }
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors?.telefono?.message}
                                </span>
                            </Form.Group>

                            <Form.Group as={Col} sm={12} md={4} controlId="formGridCity">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control name="ciudad" placeholder="Las Palmas de Gran Canaria" 
                                    ref={
                                        register({
                                            required: { value: false, message: 'Introduzca su localidad.'}
                                                })
                                        }
                                />
                            </Form.Group>
                            <Form.Group as={Col} sm={12} md={4} controlId="formGridConsulta">
                                <Form.Label>Tipo de consulta / caso</Form.Label>
                                <Form.Control as="select" custom name="consulta"
                                    ref={
                                        register({
                                            required: { value: false, message: 'Elija el tipo de servicio de su consulta.'}
                                                })
                                        }>
                                    <option value="no-elegido">Elegir..</option>
                                    <option value="penal">Penal</option>
                                    <option value="civil">Civil</option>
                                    <option value="laboral">Laboral</option>
                                    <option value="administrativo">Administrativo</option>
                                    <option value="bancario">Bancario</option>
                                    <option value="familiar">Familiar</option>
                                    <option value="nacionalidad">Nacionalidad</option>
                                    <option value="extranjeria">Extranjería</option>
                                </Form.Control>
                            </Form.Group>


                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridMensaje">
                                <Form.Label>Mensaje:</Form.Label>
                                <Form.Control as="textarea" type="textarea" name="mensaje"
                                    placeholder="Detalle su caso y contactaremos con usted." rows={3} 
                                    ref={
                                        register({
                                            required: { value: false, message: 'Escriba los detalles de su consulta'}
                                                })
                                        }
                                    />

                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" name="confirmacion"
                                label="Confirmo que he leído la Política de Privacidad" />
                        </Form.Group>

                        <Button className={styles.botonGeneral + " " + styles.btn5} type="submit">
                                    <FontAwesomeIcon icon={['fas', 'chevron-circle-right']} className={styles.iconoBoton} />
                                    <span className={styles.textoBoton}>Enviar</span>
                        </Button>
                
                        </Form>
                    </Col>


                </Row>


            </Container>
        </Container>
        
        
    )
}

export default ContactFormulario
