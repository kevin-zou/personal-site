import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/blog.module.scss'
import { getSortedPostsData } from '../../lib/posts'

export default function Blog({allPostsData}) {
  return (
    <Layout>
      <h2>All posts</h2>
      <ul className={styles["posts-list"]}>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className={styles.post}>
            <div>{date}</div>
            <Link href={`/blog/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
