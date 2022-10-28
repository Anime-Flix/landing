import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'

import { NextUIProvider, createTheme, Container } from '@nextui-org/react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

import LoadingComponent from '../components/Loading'
const NavbarComponent = dynamic(() => import('../components/navbar'), {
  suspense: true
})

// NextUI Theme edit
const theme = createTheme({
  type: 'dark'
})

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <Suspense fallback={<LoadingComponent />}>
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
    </Suspense>
  )
}

export default MyApp
