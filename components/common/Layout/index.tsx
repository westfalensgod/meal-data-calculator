import React from 'react'
import Header from '../Header'
import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
)

export default Layout