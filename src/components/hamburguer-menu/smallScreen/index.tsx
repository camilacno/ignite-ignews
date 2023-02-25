import { useState } from 'react'
import styles from './smallScreenStyles.module.scss'

export default function SmallScreen() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.hamburgerMenu}>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.isActive : ''}`}
        onClick={handleMenuToggle}
      >
        <span className={styles.hamburgerIcon}></span>
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.isOpen : ''}`}>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
