import { useState } from 'react'
import styles from './wideScreenStyles.module.scss'

import { ActiveLink } from '../../ActiveLink'

export default function WideScreen() {
  return (
    <div className={styles.container}>
      <nav>
        <ActiveLink activeClassName={styles.active} href="/">
          <a>Home</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/posts">
          <a>Posts</a>
        </ActiveLink>
      </nav>
    </div>
  )
}
