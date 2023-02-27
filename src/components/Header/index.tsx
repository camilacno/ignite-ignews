import Image from 'next/image'
import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'
import styles from './headerStyles.module.scss'
import { useEffect, useState } from 'react'
import HamburgerMenuComponent from '../../components/HamburguerMenu'

export function Header() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 539px)')
    const handleMediaQueryChange = (e) => setIsMobile(e.matches)

    handleMediaQueryChange(mediaQuery)
    mediaQuery.addListener(handleMediaQueryChange)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>ig.news</h1>

        <div className={styles.menuComponent}>
          <div className={styles.a}>
            {isMobile ? (
              <HamburgerMenuComponent />
            ) : (
              <nav>
                <ActiveLink activeClassName={styles.active} href="/">
                  <a>Home</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/posts">
                  <a>Posts</a>
                </ActiveLink>
              </nav>
            )}
          </div>

          <div className={styles.b}>
            <SignInButton />
          </div>
        </div>
      </div>
    </header>
  )
}
