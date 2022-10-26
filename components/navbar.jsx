import { Navbar, Text, Button, Spacer, Container, Avatar } from '@nextui-org/react';
import { useSession } from '@supabase/auth-helpers-react'
import { url } from './Avatar'

import Link from 'next/link';
import Cookies from 'js-cookie'

const NavbarComponent = () => {

    const session = useSession()

    const avatar = Cookies.get('avatar');

    const collapseItems = [
      ["Home", "/"],
      ["Blog", "/blog"],
      ["About", "/about"],
      ["Contact", "/contact"],
    ];
    return (
      <Navbar shouldHideOnScroll isBordered variant="fixed">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <Spacer x={0.8} />
          <Text b color="inherit" hideIn="xs">
            ANI<span style={{color: '#9c27b0'}}>FLIX</span>
          </Text>
        </Navbar.Brand>

          {
            session ? (
              <Navbar.Content>
                <Button auto flat href="#">
                  Go to app
                </Button>
                <Navbar.Item>
                  <Link href="/user" style={{cursor: 'pointer'}}>
                    <Avatar style={{cursor: 'pointer'}} src={avatar} size="md" />
                  </Link>
                </Navbar.Item>
              </Navbar.Content>
            ) : (
              <Navbar.Content>
              <Navbar.Link color="inherit" href="#">
                Login
              </Navbar.Link>
              <Navbar.Item>
                <Button auto flat as={Link} href="#">
                  Sign Up
                </Button>
              </Navbar.Item>
              </Navbar.Content>
            )
          }

        <Navbar.Collapse>
          <Container>
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem key={item}>
                <Link
                  style={{color: 'white'}}
                  css={{
                    minWidth: "100%",
                  }}
                  href={item[1]}
                >
                  {item[0]}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Container>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavbarComponent;
