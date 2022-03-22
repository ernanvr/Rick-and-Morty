import * as React from 'react';
import Link from 'next/link'

export const Footer = (): JSX.Element => {
  return (
    <div>
      <ul>
        <li>Characters</li>
        <li>Locations</li>
        <li>Episodes</li>
      </ul>
      <Link href='/'><a>Server status</a></Link>
      <div><span>By @ernanvr</span ></div>
    </div>
  )
}
