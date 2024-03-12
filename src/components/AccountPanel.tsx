"use client"
import { readSupabaseUserDetail } from '@/supabase/server'
import { UserResponse } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
import CustomImage from './CustomImage'
import { CircleHelp, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { signOutUser } from '@/actions/user'
import { useRouter } from 'next/navigation'
import AccountModal from './AccountModal'
import useUser from '@/hooks/useUser'
import { emailToName } from '@/utils/emailToName'
import CloseAccountModal from './CloseAccountModal'

const items = [
  {
    id: 1,
    name: "Account",
    icon: <User size={20} />
  },
  {
    id: 2,
    name: "Support",
    icon: <CircleHelp size={20} />
  },
  {
    id: 3,
    name: "Logout",
    icon: <LogOut size={20} />
  }
]

const AccountPanel = () => {
  const [openAccountModal, setOpenAccountModal] = useState(false)
  const user = useUser()
  const router = useRouter()

  async function handleSignOut() {
    await signOutUser()
    router.refresh()
  }

  return (
    <div className='absolute top-5 right-10 bg-white border border-customGray rounded-lg text-sm p-4'>
      <div className='relative'>
        <div className='flex flex-row gap-2 border-b border-gray-200 pb-3'>
          <CustomImage url="/avatar.jpeg" />
          <div className='flex flex-col'>
            <div className='flex flex-row gap-4'>
              <p className='text-gray-800 font-bold'>{emailToName(user?.data.user?.email as string)}</p>
              <span className='bg-gray-200 text-gray-800 font-bold px-1 border border-gray-300'>Free</span>
            </div>
            <p className='text-gray-800'>{user?.data.user?.email}</p>
          </div>
        </div>
        <div >
          {
            items.map((ele) => <p className='flex flex-row items-center border-b border-gray-200 p-3 gap-2 cursor-pointer' key={ele.id} onClick={() => {
              if (ele.name === "Logout") {
                handleSignOut()
              }
              if (ele.name === "Account") setOpenAccountModal(prev => !prev)
            }}>
              {ele.icon}
              {ele.name}</p>)
          }
          {
            openAccountModal && <>
              <AccountModal />
              <CloseAccountModal setOpenAccountModal={setOpenAccountModal} />
            </>
          }
          <div className='flex flex-row items-center gap-2'>
            <Link href="#" className='accountLinks'>Privacy Policy</Link>
            <Link href="#" className='accountLinks'>Terms & condition</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPanel
