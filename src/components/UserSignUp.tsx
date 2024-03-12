"use client"
import { signUpUser } from "@/actions/user";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Logo from "./Logo";

const UserSignUp = () => {
  const router = useRouter()
  async function handleSignUp(formData: FormData) {
    const res = await signUpUser(formData)
    console.log(res)
    router.refresh()
  }
  return (
    <div className='flex flex-col items-center gap-20'>
      <Logo />
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold'>Create Account</h1>
        </div>
        <form action={handleSignUp} className='flex flex-col gap-4'>
          <label htmlFor='email'>Enter name<span className='text-red-500'>*</span></label>

          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            id="email"
            className="input"
            required
          />
          <label htmlFor='password'>Set password<span className='text-red-500'>*</span></label>

          <input
            name="password"
            type="password"
            placeholder="********"
            id="password"
            className="input passwordInput"
            required
          />
          <button type="submit" className="btnPrimary">Sign Up</button>
        </form>
        <p className="text-center">Already have an account?<Link href="/" className="links">Log in</Link></p>
      </div>
    </div>
  );
};

export default UserSignUp;
