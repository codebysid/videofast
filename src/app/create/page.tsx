import UserSignUp from '@/components/UserSignUp'
import { readSupabaseUser } from '@/supabase/server'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserSignUp />
    </main>
  )
}

export default page
