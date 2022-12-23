import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Mr Men Listing | Home </title>
      <meta name="keywords" content="Mr men"></meta>
    </Head>
    <div >
      {/* <Navbar /> */}
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>More text homepage 1</p>
      <p className={styles.text}>More text homepage 2</p>
      <Link href="./mrmen">
        <p className={styles.btn}>See the Mr Men</p>
      </Link>
      {/* <Footer /> */}
    </div>
    </>
  )
}
