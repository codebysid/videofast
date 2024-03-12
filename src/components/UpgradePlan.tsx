import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const UpgradePlan = () => {
  return (
    <Link href="#" className="btnOrange w-max">
      <div className='flex flex-row items-center gap-1'>
        <Zap fill='#dd571c' color='#dd571c' />Upgrade Plan
      </div>
      <ArrowRight color='#dd571c' />
    </Link>
  )
}

export default UpgradePlan
