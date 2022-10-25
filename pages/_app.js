import '../styles/globals.css'

import { NextUIProvider, createTheme } from '@nextui-org/react'
import NavbarComponent from '../components/navbar'

// NextUI Theme edit
const theme = createTheme({
  type: 'dark'
})

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <NavbarComponent />
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
