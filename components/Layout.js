import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styles from './Layout.module.scss'

export default function Layout({children}) {
  return (
    <div>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1>Kevin Zou</h1>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </div>

      {/* Page content */}
      <main className={styles.content}>
        {children}
      </main>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.icon}>
          <a href="https://github.com/kevin-zou" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://twitter.com/therealkevinzoo" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  )
}
