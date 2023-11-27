import Link from 'next/link'
import './globals.css'


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
    const resp = await fetch('http://localhost:9999/topics');
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
          <ul>
            <li><Link href='/create'>Create</Link></li>
            <li><Link href='/update/1'>Update</Link></li>
            <li><input type="button" value="delete" /></li>
          </ul>
        </body>
    </html>
  )
}
