import { Navbar, Text, Button } from '@nextui-org/react';
import Link from 'next/link';

const NavbarComponent = () => {
    return (
        <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            ANI<span style={{color: '#9c27b0'}}>FLIX</span>
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link as={Link} href="/">Home</Navbar.Link>
          <Navbar.Link as={Link} href="/blog">Blog</Navbar.Link>
          <Navbar.Link as={Link} href="/about">About</Navbar.Link>
          <Navbar.Link as={Link} href="/contact">Contact</Navbar.Link>
        </Navbar.Content>
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
      </Navbar>
    )
}

export default NavbarComponent;