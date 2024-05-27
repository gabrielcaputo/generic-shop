import { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '@/src/assets/logo.svg'

import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Generic Shop" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

export default App
