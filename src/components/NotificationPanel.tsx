import React from 'react'

const notifications = [
  {
    id: 1,
    notification: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit e",
    date: "12 May, 2025"
  },
  {
    id: 2,
    notification: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint.",
    date: "5 Jan, 2025"
  },
  {
    id: 3,
    notification: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet",
    date: "10 Dec, 2025"
  }


]

const NotificationPanel = () => {
  return (
    <div className='absolute right-10 top-10 bg-white border border-customGray rounded-lg text-sm p-2'>
      <div className='flex flex-row gap-40 items-center border-b border-customGray pb-2'>
        <p className='font-bold'>Notification</p>
        <p className='w-max text-xs text-customGray'>Clear All</p>
      </div>
      <div>
        {
          notifications.map((ele) => <div key={ele.id} className='border-b border-customGray p-3'>
            <p>{ele.notification}</p>
            <span className='text-xs text-customGray'>{ele.date}</span>
          </div>)
        }
      </div>
    </div>
  )
}

export default NotificationPanel
