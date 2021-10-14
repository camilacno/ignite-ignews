import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './signInButtonStyles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;

  return (
    <button type='button' className={styles.signInButton}>
      <FaGithub color={isUserLoggedIn ? '#04d361' : '#eba417'} />
      {isUserLoggedIn ? 'Sign in with Github' : 'Camila Nepomuceno'}
      <FiX className={styles.closeIcon} style={!isUserLoggedIn && { display: 'none' }} />
    </button>
  );
}
