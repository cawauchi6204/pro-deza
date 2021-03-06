import '../styles/globals.css'
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
