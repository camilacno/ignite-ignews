import Image from 'next/image'
import { HamburguerMenu } from '../../components/HamburguerMenu'
import { Input } from '../../components/Input'
import { SignInButton } from '../../components/SignInButton'
import { SubscribeButton } from '../../components/SubscribeButton'
import styles from './profile.module.scss'

export default function Profile() {
  return (
    <>
      <form onSubmit={() => {}} className={styles.profileForm}>
        <img
          src="https://github.com/camilacno.png"
          alt="Imagem de perfil"
          className={styles.profileImg}
        />
        <span className={styles.photoChangeLabel}>Alterar foto</span>

        <Input title="Nome" />
        <Input title="E-mail" />

        <span className={styles.passwordAreaLabel}>Alterar senha</span>

        <Input title="Nova senha" />
        <Input title="Confirme nova senha" />
        <SubscribeButton title="Update profile" color="secondary" />
      </form>
    </>

    // <header className={styles.headerContainer}>
    //   <div className={styles.headerContent}>
    //     <h1>ig.news</h1>
    //     <nav>
    //       <ActiveLink activeClassName={styles.active} href="/">
    //         <a>Home</a>
    //       </ActiveLink>
    //       <ActiveLink activeClassName={styles.active} href="/posts">
    //         <a>Posts</a>
    //       </ActiveLink>
    //       <ActiveLink activeClassName={styles.active} href="/profile">
    //         <a>Profile</a>
    //       </ActiveLink>
    //     </nav>
    // </div>
    // </header>
  )
}
