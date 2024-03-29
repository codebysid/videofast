import { X } from 'lucide-react'
import React, { Dispatch, FC, SetStateAction } from 'react'

type TCloseAccountModal = {
  setOpenAccountModal: Dispatch<SetStateAction<boolean>>,
  credit?: boolean
}

const CloseAccountModal: FC<TCloseAccountModal> = ({ setOpenAccountModal, credit }) => {
  return (
    <div className={`absolute top-[105%] ${credit && "top-[165%]"} right-[310%] z-30 cursor-pointer`} onClick={() => setOpenAccountModal(prev => !prev)}><X /></div>
  )
}

export default CloseAccountModal
