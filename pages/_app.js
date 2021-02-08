import '../styles/globals.scss'
import '../styles/variables.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

/* FONT AWESOME. fal: light icons, far: regular icons, fas: solid icons, fab: brand icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
