import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut } from 'next-auth/client'

import styles from './signInButtonStyles.module.scss'

export function SignInButton() {
  const [session] = useSession()

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color={'#38A980'} />
      <p>{session.user.name}</p>
      <FiX className={styles.closeIcon} color="#737388" />
    </button>
  ) : (
    <button
      type="button"
      title="Entrar com github"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color={'#eba417'} />
      <p>Entrar com Github</p>
    </button>
  )
}
