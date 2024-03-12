"use server";
import { createSupabaseServerClient } from "@/supabase/server";

export async function signUpUser(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) throw new Error("Email/Password required ")
  try {
    const supabase = await createSupabaseServerClient()
    const res = await supabase.auth.signUp({
      email, password
    })
    return res
  } catch (err) {
    console.log(err)
  }
}

export async function signInUser(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) throw new Error("Email/Password required ")
  try {
    const supabase = await createSupabaseServerClient()
    const res = await supabase.auth.signInWithPassword({
      email, password
    })
    return JSON.parse(JSON.stringify(res))
  } catch (err) {
    console.log(err)
  }
}

export async function signOutUser() {
  const supabase = await createSupabaseServerClient()
  await supabase.auth.signOut()
}
