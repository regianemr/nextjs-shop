import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
globalStyles()

function Myapp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Myapp