import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>Homepage</h1>
      <p>More text homepage 1</p>
      <p>More text homepage 2</p>
      <Link href="./mrmen">
        <p>See the Mr Men</p>
      </Link>
      {/* <Footer /> */}
    </div>
  )
}
