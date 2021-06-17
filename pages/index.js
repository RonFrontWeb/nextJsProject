import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from "next/link"


export default function Home() {
  return (
    <>
    <Head>
      <title>Photo Blog | Home</title>
      <meta name="keyword" content="homepage" />
    </Head>
    <div >
     <h1 className={styles.title}>NextJS PROJECT</h1>
     <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iusto? Aliquam ratione repellat, eligendi quibusdam tempore unde porro consectetur deserunt sint suscipit facilis corporis dolor tempora vitae, nemo sed accusantium!</p>
     <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iusto? Aliquam ratione repellat, eligendi quibusdam tempore unde porro consectetur deserunt sint suscipit facilis corporis dolor tempora vitae, nemo sed accusantium!</p>
     <Link href="/gallery"><a className={styles.btn}>See Gallery</a></Link>
    </div>
    </>
  )
}
