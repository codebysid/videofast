"use client"
import { signOutUser } from '@/actions/user'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserSignOut = () => {
  const router = useRouter()
  const handleSignout = async () => {
    await signOutUser()
    router.refresh()
  }
  return (
    <form action={handleSignout}>
      <button type='submit'>Signout</button>
    </form>
  )
}

export default UserSignOut
