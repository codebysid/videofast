"use server"

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createSupabaseServerClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

}

export async function readSupabaseUser() {
  const supabase = await createSupabaseServerClient()
  return supabase.auth.getSession()
}

export async function readSupabaseUserDetail() {
  const supabase = await createSupabaseServerClient()
  return await supabase.auth.getUser()
}
