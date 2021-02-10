import styles from '../styles/Index.module.scss';
import ContainerPrincipal from '../components/container';
import ServiciosComponent from '../components/Servicios';
const Servicios = () => {
    return (
        <ContainerPrincipal title="Jair Sánchez - Abogado | Servicios">
            <br/>
            <h1>Servicios</h1>  
            <ServiciosComponent/>
        </ContainerPrincipal>

    )
}

export default Servicios
