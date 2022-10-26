import { Container, Button, Text, Spacer } from "@nextui-org/react";
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function FourOhFour() {
  return (
    <div>
      <Head>
        <title>Oh no... not again! - AniFlix</title>
      </Head>
      <Spacer y={5} />
      <center>
        <Image
          src="/images/undraw_page_not_found_re_e9o6.svg"
          width={350}
          height={350}
          alt="404"
        />
        <Text h1>Oh no... not again!</Text>
        <Text b width={500}>You have stumbled to an invalid link or a unknown page to me, <Text color="secondary" b>could you be the choosen one?</Text></Text>
        <Spacer y={5} />
        <Button as={Link} href="/" shadow color="secondary" auto>Go Back Home</Button>
      </center>
    </div>
  )
}
