import Head from 'next/head';
import Link from 'next/link'

import { Text, Spacer, Collapse, Button } from '@nextui-org/react'
import { RiGithubFill } from "react-icons/ri";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - AniFlix</title>
      </Head>

      <Spacer y={3.5} />

      {/* Landing Hero */}
      <section style={{margin: 15}}>
        <Text
          h1
          size={60}
          weight="bold"
        >
          AniFlix - The future of anime social
        </Text>
        <Spacer y={4} />
        <Text size={20}>
          The all in one place for anime streaming, social media, and forums. With no ads baked into the site, you will have a nice experience with the application. This application is a hobby so features will be slow to release, however you can contribute!
        </Text>
        <Spacer y={4} />

        <center>
          <div style={{display: 'flex', justifyContent: 'center', gap: 15, flexWrap: 'wrap'}}>
            <Button flat>Go to App</Button>
            <Button as={Link} href="#get-involved">Get Involved</Button>
          </div>
        </center>
      </section>

      <Spacer y={3.5} />

      {/* Features Section */}
      <section id="features" style={{background: '#0072F5', borderRadius: 15, padding: 5}}>
        <div style={{margin: 20}}>
        <Text h2>
          🧰 &nbsp; Features
        </Text>
        <Text size={18}>
          Here are the list of current features of the application, so far!
        </Text>

        <Spacer y={1.5} />

        {/* Accordian */}
        <Collapse.Group>
          <Collapse title="Automatic Anime Tracker Update">
            <Text>
              AniFlix makes it easy to keep track of your anime list. It automatically updates as you watch episodes and changes in the list are synced to your anime list.
            </Text>
          </Collapse>
          <Collapse title="No Advertisments">
            <Text>
              AniFlix is a video streaming service that offers worldwide users to watch all anime episodes. With the application they are able to watch the latest anime releases, old and new without adverts and charges.
            </Text>
          </Collapse>
          <Collapse title="Find New Friends and Discuss the Anime you Love">
            <Text>
              Join an Anime based Social Networking Community, where you can find friends, watch anime together and be a part of a fun and friendly community.
            </Text>
          </Collapse>
        </Collapse.Group>
        </div>
      </section>

      <Spacer y={3.5} />

      {/* FAQ Section */}
      <section>
      <div style={{margin: 20}}>
      <Text h2>
        ❓ &nbsp; FAQ
      </Text>
      <Text size={18}>
        Here are some of the basic questions you may ask, if you want to ask us another question that isn&apos;t there then go to the <Link href="/contact">Contact Us page</Link>.
      </Text>

      <Spacer y={1.5} />

      {/* Accordian */}
      <Collapse.Group>
        <Collapse title="How did you come about starting this application?">
          <Text>
            I was bored and wanted a challenge.
          </Text>
        </Collapse>
        <Collapse title="Is there 3rd party software? How is my data being used?">
          <Text>
            You know to be honest, I could care less about the data. All we use the data for is to improve the experience of the application, we do this by google analytics. If you don&apos;t want to be included in this then go to <strong>User Account &#187; Privacy &#187; Do not collect</strong>. Plus data is your & yours alone so I hate it when people make profits from user data.
          </Text>
        </Collapse>

        {/* Comunity Requests */}
        <Collapse title="What is the one thing you want to see on the site that isn't there?">
          <Text>
            You can ask questions by going to the contact page of this site. <Link href="/contact">Contact Us page</Link>
          </Text>
        </Collapse>
      </Collapse.Group>
      </div>
      </section>
      <Spacer y={3.5} />

      {/* Get Involved Section */}
      <section id="get-involved" style={{background: '#9750DD', borderRadius: 15, padding: 5}}>
        <div style={{margin: 20}}>
        <Text h2>
          ℹ️ &nbsp; Get Involved
        </Text>
        <Text size={18}>
          To get involved, go to the projects github organisation and pick the client you will like to work on!
        </Text>

        <Spacer y={1.5} />

        <center>
          <Button icon={<RiGithubFill />} color="primary" size="lg" as={Link} href="https://github.com/Anime-Flix"><center>Go to the github page</center></Button>
        </center>
        </div>
      </section>
      <Spacer y={1.5} />

    </div>
  )
}
