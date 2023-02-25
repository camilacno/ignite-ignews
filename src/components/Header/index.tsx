import Image from 'next/image'
import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'
import styles from './headerStyles.module.scss'
import React, { useState, useEffect } from 'react'
import WideScreen from '../hamburguer-menu/wideScreen'
import SmallScreen from '../hamburguer-menu/smallScreen'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="ig.news"
          width={108}
          height={30}
          className={styles.image}
        />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
