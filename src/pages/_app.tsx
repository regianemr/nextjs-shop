import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

globalStyles()

import logoImg from '../assets/logo.svg'

import Image from "next/image"

import { Container, Header } from "../styles/pages/app"

function Myapp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

export default Myapp 