import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Head from "next/head"

import { Spacer, Text, Grid } from '@nextui-org/react';

const CardComponent = dynamic(() => import('../../components/card.jsx'), {
  suspense: true
})

export default function Blog() {
    return (
        <Suspense fallback={`Loading...`}>
            <Head>
                <title>Blog - AniFlix</title>
            </Head>

            <Spacer y={3.5} />

            <section>
              <Text h2>👋 &nbsp; Important First Reads</Text>
              <Text p>In this section we discuss about how we obtain the media, our privacy poilicy, how to get started with the <strong>free service</strong>.</Text>

              <Spacer y={0.8} />

              <div style={{display: 'flex', gap: 15, justifyContent: 'center', flexWrap: 'wrap'}}>
                <CardComponent linkURL="/blog/media-sources" title="Where do we get our media sources from?" action="Media Sources" imageURL="https://images.unsplash.com/photo-1538131587570-641359811581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=955&q=80" cred="Photo by Pinho . on Unsplash" />
                <CardComponent linkURL="/blog/privacy" title="Privacy Policy" action="User Data" imageURL="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" cred="Photo by Towfiqu barbhuiya on Unsplash" />
              </div>
            </section>
            <Spacer y={6.5} />

            <section>
              <Text h2>🗞️ &nbsp; Updates & Fixes</Text>
              <Text p>In this section we discuss about the updates & fixes to the service, so I would keep a close eye on this section since there is going to be juicy features in the future. ☺️</Text>

              <Spacer y={0.8} />

              <div style={{display: 'flex', gap: 15, justifyContent: 'center', flexWrap: 'wrap'}}>
                <CardComponent linkURL="/blog/media-sources" title="Where do we get our media sources from?" action="Media Sources" imageURL="https://images.unsplash.com/photo-1538131587570-641359811581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=955&q=80" cred="Photo by Pinho . on Unsplash" />
                <CardComponent linkURL="/blog/privacy" title="Privacy Policy" action="User Data" imageURL="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" cred="Photo by Towfiqu barbhuiya on Unsplash" />
              </div>
            </section>

            <Spacer y={3.5} />

        </Suspense>
    )
}
