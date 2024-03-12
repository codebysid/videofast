"use client"
import { UserResponse } from '@supabase/supabase-js'
import React, { FC, ReactNode, createContext, useLayoutEffect, useState } from 'react'
import { readSupabaseUserDetail } from "../supabase/server"

export const UserContext = createContext<UserResponse | undefined>(undefined)

type TUserProvider = {
  children: ReactNode
}

const UserProvider: FC<TUserProvider> = ({ children }) => {
  const [user, setUser] = useState<UserResponse>()

  const initialise = async () => {
    const user = await readSupabaseUserDetail()
    if (!user) return
    setUser(user)
  }

  useLayoutEffect(() => {
    initialise()
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
