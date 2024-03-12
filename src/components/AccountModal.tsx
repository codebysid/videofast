import useUser from '@/hooks/useUser'
import { emailToName } from '@/utils/emailToName'
import { userInfo } from 'os'
import React, { use } from 'react'
import UpgradePlan from './UpgradePlan'
import { ArrowRight, Info } from 'lucide-react'



const AccountModal = () => {
  const user = useUser()
  const item = [
    {
      id: 1,
      heading: "Display Name",
      para: emailToName(user?.data.user?.email as string)
    },
    {
      id: 2,
      heading: "Email Address",
      para: user?.data.user?.email
    },
    {
      id: 3,
      heading: "Current Plan",
      para: "Free"
    }
  ]
  return (
    <div className='absolute top-[100%] right-[300%] bg-white p-4 z-20 w-[300%] border border-customGray flex flex-col gap-5 rounded-lg'>
      <div className='border-b border-gray-200 pb-10 flex flex-col gap-4'>
        <div className='flex flex-col pb-4'>
          <h2 className='font-bold text-lg'>Account</h2>
          <p>Choose the avatar that best describes your use case</p>
        </div>
        <div className='flex flex-col gap-4'>
          {
            item.map((ele) => {
              return <div key={ele.id}>
                <h2 className='accountModalHeading'>{ele.heading}</h2>
                <div className={`flex flex-row justify-betwwen items-center gap-96`}>
                  <p className='accountModalPara'>{ele.para}</p>
                  <div>
                    {
                      ele.heading === "Current Plan" && <UpgradePlan />
                    }
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <div className='bg-gray-200 p-3 rounded text-gray-700 font-semibold flex flex-row items-center gap-2'>
          <Info fill='gray' color='white' />Your Credits=24
        </div>
        <div className='orangeGradient flex flex-row justify-between items-center p-2 rounded-lg'>
          <p>Want to join the affiliate program ?</p>
          <button className='btnTernaryOrange'>Join Now <ArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default AccountModal
