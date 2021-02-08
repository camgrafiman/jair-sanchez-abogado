import ContainerPrincipal from '../components/container';
import Presentacion from '../components/Presentacion';
import Carrusel from '../components/carrusel';
import { WhatsappBoton } from '../components/WhatsappBoton';
import VideoFullContainer from '../components/videofullcontainer';
import Servicios from '../components/Servicios';


const Index = () => {
    return (
        <>
            <ContainerPrincipal
                title="Abogado en Las Palmas de Gran Canaria"
                description=""
            >
                
                <VideoFullContainer ruta="/videos/composicion_video.mp4" /> 
                {/* <Carrusel /> */}
                <Presentacion />
                <Servicios/>
                <WhatsappBoton/>
            </ContainerPrincipal>
            
        </>
    )
}
export default Index;



