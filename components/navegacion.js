import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/Navegacion.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navegacion = () => {

    const [scrolled, setScrolled] = useState(null);

    useEffect(() => {
        window.onscroll = function () { 
            if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
                setScrolled(true);
            } 
            else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <Navbar id="navbarPrincipal" collapseOnSelect expand="lg" bg="light" variant="light" className={ scrolled ? styles.navContainerBg + " w-100" + " " + styles.stickyNav : styles.navContainer + " w-100" + " " + styles.stickyNav } 
          collapseOnSelect>
        <Link href="/">
                <Navbar.Brand href="/" >
                    <img src="/jairsanchez_logo_horizontal.png" className={styles.logo} alt="Jair Sánchez Logo" />
                </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                    <Nav.Link href="/acercade">Acerca de mí</Nav.Link>
                <NavDropdown title="Servicios" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="servicios/penal">Penal</NavDropdown.Item>
                    <NavDropdown.Item href="servicios/civil">Civil</NavDropdown.Item>
                    <NavDropdown.Item href="servicios/laboral">Laboral</NavDropdown.Item>
                    <NavDropdown.Item href="servicios/administrativo">Administrativo</NavDropdown.Item>
                    <NavDropdown.Item href="servicios/bancario">Bancario</NavDropdown.Item>
                    <NavDropdown.Item href="servicios/familiar">Familiar</NavDropdown.Item> 
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="servicios/nacionalidad">Nacionalidad</NavDropdown.Item>
                    <NavDropdown.Item href="servicios/extranjeria">Extranjería</NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link href="/consulta">Blog</Nav.Link>
                    <Nav.Link href="/contacto">Contacto</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/consulta"><FontAwesomeIcon icon={['fas', 'address-book']} className={styles.iconos} />Solicitud consulta</Nav.Link>
                <Nav.Link href="tel:+34638672876"><FontAwesomeIcon icon={['fas', 'phone-alt']} className={styles.iconos} /> 638 67 28 76</Nav.Link>
                <Nav.Link eventKey={2} href="mailto:jairsanchezabogado@outlook.es"> <FontAwesomeIcon icon={['fas', 'envelope-open-text']} className={styles.iconos} /> jairsanchezabogado@outlook.es </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Navegacion
