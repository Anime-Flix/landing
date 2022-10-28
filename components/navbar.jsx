import { Navbar, Text, Button, Spacer, Container, Avatar, Dropdown } from '@nextui-org/react';
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

import { useEffect, useState } from 'react'
import { RiUser3Fill } from 'react-icons/ri'

import Link from 'next/link';

const NavbarComponent = () => {

    const session = useSession()
    const [userAvatar, setUserAvatar] = useState(null)
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    async function getUserAvatar() {
      let img = await fetch('https://api.waifu.pics/sfw/smile').then((resp) => resp.json());
      setUserAvatar(img.url)
    }

    useEffect(() => {
      getUserAvatar()
      getProfile()
    }, [session])

    async function getProfile() {
      try {
        setLoading(true)

        let { data, error, status } = await supabase
          .from('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', user.id)
          .single()

        if (error && status !== 406) {
          throw error
        }
        console.log(data);
        if (data) {
          setUsername(data.username)
          setWebsite(data.website)
          setAvatarUrl(data.avatar_url)
        }
      } catch (error) {
        console.log('Error loading user data!')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

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
                    <Dropdown placement="bottom-right">
                      <Dropdown.Trigger>
                        <Avatar style={{cursor: 'pointer'}} squared src={userAvatar} />
                      </Dropdown.Trigger>
                      <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                        <Dropdown.Item key="profile" css={{ height: "$18" }}>
                          <Link href="/profile" style={{color: 'white', width: '100%'}}>
                            <div>
                            <Text b color="inherit" css={{ d: "flex" }}>
                              Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: "flex" }}>
                              {username}
                            </Text>
                            </div>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item key="settings" withDivider>
                          <Link href="/profile/settings" style={{color: 'white', width: '100%'}}>
                            My Settings
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item key="list" style={{color: 'white', width: '100%'}}>
                          <Link href="/profile/list/anime" style={{color: 'white', width: '100%'}}>
                            Anime List
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item key="help_and_feedback" withDivider>
                          <Link href="/help" style={{color: 'white', width: '100%'}}>
                            Help & Feedback
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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
