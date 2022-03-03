import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
    <ul>
    <Link href='/about'><a><li>HOME</li></a></Link>
      <li>ABOUT</li>
      <li>PAGES</li>
      <li>CONTECT US</li>
      </ul>
  </nav>
  )
}

export default Navbar