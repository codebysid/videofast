import { NextRequest, NextResponse } from "next/server"
import { readSupabaseUser } from "./supabase/server"

const protectedRoutes = ["/dash"]
const userRoutes = ["/create", "/"]
export async function middleware(req: NextRequest) {
  const { data } = await readSupabaseUser()
  if (protectedRoutes.includes(req.nextUrl.pathname) && !data.session) {
    const absoluteUrl = new URL("/", req.nextUrl.origin)
    return NextResponse.redirect(absoluteUrl.toString())
  }
  if (userRoutes.includes(req.nextUrl.pathname) && data.session) {
    const absoluteUrl = new URL("/dash", req.nextUrl.origin)
    return NextResponse.redirect(absoluteUrl.toString())
  }
}
