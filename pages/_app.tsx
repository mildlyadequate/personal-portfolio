import '../styles/globals.css'
import '../styles/hamburger-icon.css'
import '../styles/section-styles.css'
import '../styles/icons.css'
import type { AppProps } from 'next/app'
import 'react-image-lightbox/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
