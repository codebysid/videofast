"use client"
import { Bell, ChefHat, SquarePlus } from 'lucide-react'
import React, { useState } from 'react'
import CustomImage from './CustomImage'
import AccountPanel from './AccountPanel'
import NotificationPanel from './NotificationPanel'
import CreditPanel from './CreditPanel'
import CloseAccountModal from './CloseAccountModal'

const Header = () => {
  const [openAccountPanel, setOpenAccountPanel] = useState(false)
  const [openNotificationPanel, setOpenNotificationPanel] = useState(false)
  const [openCreditPanel, setOpenCreditPanel] = useState(false)

  return (
    <div className='flex flex-row justify-between w-full'>
      <h1 className='text-2xl font-bold'>Projects</h1>
      <div className='flex flex-row items-center gap-12'>
        <button className='btnOrangeBorder' onClick={() => setOpenCreditPanel(prev => !prev)}>
          <div className=' flex flex-row gap-1 items-center'>
            <ChefHat className='rotate-180' />
            Your Credits
          </div>
          <SquarePlus fill='#ea580c' color='white' className='p-1 h-8 w-8' />
        </button>
        <div className='relative flex flex-row gap-6 items-center'>
          <div onClick={() => setOpenNotificationPanel(prev => !prev)} className='cursor-pointer'>
            <Bell />
          </div>
          <div onClick={() => setOpenAccountPanel(prev => !prev)}>
            <CustomImage url="/avatar.jpeg" />
          </div>
          {
            openAccountPanel && <AccountPanel />
          }
          {
            openNotificationPanel && <NotificationPanel />
          }
          {
            openCreditPanel && <>
              <CreditPanel />
              <CloseAccountModal setOpenAccountModal={setOpenCreditPanel} credit />
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Header
