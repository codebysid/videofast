import React from 'react'
import { createBrowserClient } from '@supabase/ssr'
import GoogleIcon from '@/icons/GoogleIcon'

const UserSigninWithGithub = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  async function handleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }
  return (
    <button className='btnIcon' onClick={() => handleSignIn()}><GoogleIcon />Login with Google</button>
  )
}

export default UserSigninWithGithub
