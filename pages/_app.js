import { AnimatePresence } from 'framer-motion'
import Navigation from '../Navigation/Navigation'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return(
    
    <Navigation>
  <Component {...pageProps} />
    </Navigation>
    
  )
}

export default MyApp
