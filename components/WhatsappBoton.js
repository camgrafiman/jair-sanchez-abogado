import ReactWhatsapp from 'react-whatsapp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const WhatsappBoton = () => (
    
        <ReactWhatsapp className="whatsappBoton" number="34-634-615-832" message="Hola! este es un mensaje desde la web"><FontAwesomeIcon icon={['fab', 'whatsapp-square']} /> </ReactWhatsapp>

)
{/* <FontAwesomeIcon icon={['fab', 'apple']} />
        <FontAwesomeIcon icon={['fab', 'microsoft']} />
        <FontAwesomeIcon icon={['fab', 'google']} />
        <FontAwesomeIcon icon={['fab', 'coffee']} />
        <FontAwesomeIcon icon="angle-up" /> */}
