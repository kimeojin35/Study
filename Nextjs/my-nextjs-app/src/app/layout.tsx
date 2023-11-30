import Link from 'next/link'
import './globals.css'
import { Control } from './Control'


export const metadata = {
  title: 'Weg tutorials',
  description: 'Kimain',
}

interface Topic {
  id: string
  title: string
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + 'topics', {cache: 'no-store'});
    const topics = await resp.json();
  return (
    <html>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          {topics.map((topic:Topic) => {
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
          {children}
          <Control />
        </body>
    </html>
  )
}
