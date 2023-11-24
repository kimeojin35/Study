import Link from 'next/link'
import './globals.css'


export const metadata = {
  title: 'Weg tutorials',
  description: 'Kimain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><Link href="/read/1">html</Link></li>
          <li><Link href="/read/2">css</Link></li>
        </ol>
          {children}
          <ul>
            <li><Link href='/create'>Create</Link></li>
            <li><Link href='/update/1'>Update</Link></li>
            <li><input type="button" value="delete" /></li>
          </ul>
        </body>
    </html>
  )
}
