import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-4 p-6 bg-green-300'>
      <Link href="\">Home page</Link>
      <Link href="\about">about page</Link>
      <Link href="\address">address page</Link>
      <Link href="\contact">contact page</Link>
    </div>
  )
}

export default Header
