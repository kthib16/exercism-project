import React from 'react'

export default function NavBar () {

  return (
    <header className='w-full'>
        <ul className='flex flex-row font-semibold'>
          <li><img src='https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg' /></li>
          <li>Dashboard</li>
          <li>Tracks</li>
          <li>Mentoring</li>
          <li>Contribute</li>
        </ul>

    </header>

  )
}
