import React from 'react'

function Header() {
  return (
    <div className='bg-gray-400'>
        <ul className='flex flex-row gap-14 p-5 text-2xl'>
            <li><img className='w-14  h-auto'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFAingXz3ic2s3BImlrFnCAMrWpzamUiY29zSrwtVjCA&s=10'
            alt=''/></li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Categories</a></li>
            <li><a href='#'>About Us</a></li>
        </ul>
    </div>
  )
}

export default Header