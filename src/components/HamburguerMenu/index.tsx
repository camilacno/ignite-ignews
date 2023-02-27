import React, { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './hamburguerMenuStyles.module.scss'

export default function HamburgerMenuComponent() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.hamburgerMenu}>
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={handleMenuClick}
        width={30}
        height={20}
        strokeWidth={2}
        rotate={0}
        color="#fff"
        borderRadius={0}
        animationDuration={0.5}
      />

      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/">
            <a
              className={router.pathname === '/' ? styles.active : ''}
              onClick={handleLinkClick}
            >
              Home
            </a>
          </Link>

          <Link href="/posts">
            <a
              className={router.pathname === '/posts' ? styles.active : ''}
              onClick={handleLinkClick}
            >
              Posts
            </a>
          </Link>

          <Link href="/profile">
            <a
              className={router.pathname === '/profile' ? styles.active : ''}
              onClick={handleLinkClick}
            >
              Profile
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}
