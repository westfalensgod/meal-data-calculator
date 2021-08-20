import { Typography } from 'antd'
import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const Header: React.FC = ({ children }) => (
  <nav className={styles.nav}>
    <Link href="/submit-ingridient" ><a className={styles.link}>Ingridient Form</a></Link>
    <Link href="/"><a className={styles.link}>Recipe Form</a></Link>
    <Link href="/ingridients-database"><a className={styles.link}>Ingridients</a></Link>
    <Link href="/recipes-database"><a className={styles.link}>Recipes</a></Link>
  </nav>
)

export default Header;