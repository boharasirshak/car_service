import { Breadcrumbs, Footer, Header } from '@/components'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import './globals.css'
import styles from './layout.module.css'
import { contacts, navigationLinks, servicesTitles } from '@/constants'

const raleWay = Raleway ({
  subsets: ['cyrillic', 'latin'],
  display: 'swap'
})


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const services = servicesTitles.map((el)=> el.title)
  return (
    <html lang="ru">
      <body className={raleWay.className}>
        <Header/>
        <main className={styles.container}>
          <Breadcrumbs/>
        {children}
        </main>
        <Footer contacts={contacts} navigation={navigationLinks} services={services}/>
      </body>
    </html>
  )
}
