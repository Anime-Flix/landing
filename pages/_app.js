import { useState } from 'react'

import { NextUIProvider, createTheme, Container } from '@nextui-org/react'
import NavbarComponent from '../components/navbar'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

// NextUI Theme edit
const theme = createTheme({
  type: 'dark'
})

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <NextUIProvider theme={theme}>
        <NavbarComponent />
        <Container>
          <Component {...pageProps} />
        </Container>
      </NextUIProvider>
    </SessionContextProvider>
  )
}

export default MyApp
