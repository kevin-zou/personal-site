import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <Layout>
      <div className={styles["profile-picture"]}>
        <img
          src="/static/profile_picture.jpg"
          alt="Picture of Kevin"
        />
      </div>
      <div>
        <h2>Hi, I'm Kevin!</h2>
        <p>I’m a software developer currently studying at the University of British Columbia. When it comes to tech and development, I love thinking about how to improve engineering processes and create thoughtfully designed and pleasing experiences for the user.</p>
        <p>In my spare time you can find me on one of BC’s beautiful trails, playing a game of ultimate, playing video games, or relaxing with friends and family.</p>
      </div>
    </Layout>
  )
}
