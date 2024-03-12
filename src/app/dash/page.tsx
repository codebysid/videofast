import AddandDisplayVideo from '@/components/AddandDisplayVideo'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Templates from '@/components/Templates'
import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='flex flex-row w-full'>
        <div className='basis-2/12'>
          <Navbar />
        </div>
        <div className='flex flex-col flex-1 gap-4'>
          <Header />
          <AddandDisplayVideo />
          <Templates />
        </div>
      </div>
    </main>
  )
}

export default page
