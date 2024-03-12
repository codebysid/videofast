'use client'
import { signInUser } from '@/actions/user'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import UserSigninWithGithub from './UserSigninWithGithub'
import Logo from './Logo'
import { Lock } from 'lucide-react';

const UserSignin = () => {
  const router = useRouter()

  async function handleSignin(formData: FormData) {
    const res = await signInUser(formData)
    console.log(res)
    router.refresh()
  }

  return (
    <div className='flex flex-col items-center gap-20'>
      <Logo />
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold'>Log in</h1>
          <p>Lets get started by creating your account</p>
        </div>
        <UserSigninWithGithub />
        <p className='text-center'>or</p>
        <form action={handleSignin} className='flex flex-col gap-4'>
          <label htmlFor='email'>Enter name<span className='text-red-500'>*</span></label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className='input'
            id='email'
            required
          />
          <label htmlFor='password'>Enter password<span className='text-red-500'>*</span></label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className='input passwordInput'
            id='password'
            required
          />
          <div className='flex flex-row items-center justify-around'>
            <Link href="#" className='links text-sm'>Remember Me</Link>
            <Link href="#" className='links text-sm'>Forgot Password?</Link>
          </div>
          <button type="submit" className='btnPrimary'>Login</button>
        </form>
        <p className='text-center'>Don't have an account? <Link href="/create" className='links'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default UserSignin
