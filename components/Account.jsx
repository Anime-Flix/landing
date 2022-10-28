import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

import { Input, Spacer, Button, Loading, Image, Dropdown } from '@nextui-org/react';


export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
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
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
        <Dropdown>
          <Dropdown.Trigger>
            <Image
              style={{cursor: 'pointer'}}
              width={320}
              height={180}
              src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
              alt="Default Image"
              objectFit="cover"
            />
          </Dropdown.Trigger>
          <Dropdown.Menu aria-label="Dynamic Actions">
            <Dropdown.Item key="change">Change Avatar</Dropdown.Item>
            <Dropdown.Item key="remove">Remove Avatar</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      <Spacer y={2.5} />
      <div>
        <Input css={{minWidth: '100%'}} labelPlaceholder="Email" value={session.user.email} disabled />
      </div>
      <Spacer y={2.5} />
      <div>
        <Input css={{minWidth: '100%'}} labelPlaceholder="Username" value={username || ''} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <Spacer y={2.5} />
      <div>
        <Input css={{minWidth: '100%'}} labelPlaceholder="Website" value={website || ''} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <Spacer y={1.5} />

      <center>
        <Button.Group>
          {
            loading ? (<Button clickable={false}><Loading type="spinner" color="white" size="sm" /></Button>) : (<Button onClick={() => updateProfile({ username, website, avatar_url })}>Update</Button>)
          }
          <Button onClick={() => supabase.auth.signOut()}>Sign Out</Button>
        </Button.Group>
      </center>
    </div>
  )
}
