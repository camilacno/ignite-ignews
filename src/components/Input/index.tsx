import styles from './inputStyles.module.scss'

type InputProps = {
  title: string
}

export function Input({ title }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        id="title"
        placeholder={title}
        className={styles.input}
        autoFocus
        onChange={() => {}}
      />
    </div>
  )
}
