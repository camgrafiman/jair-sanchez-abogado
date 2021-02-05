import Container from '../components/container';
import Carrusel from '../components/carrusel';
import VideoFullContainer from '../components/videofullcontainer';


const Index = () => {
    return (
        <>
            <Container title="Jair Sánchez - Abogado | Inicio">
                
                <VideoFullContainer ruta="/videos/composicion_video.mp4" /> 
                {/* <Carrusel /> */}
            </Container>
            
        </>
    )
}
export default Index;



