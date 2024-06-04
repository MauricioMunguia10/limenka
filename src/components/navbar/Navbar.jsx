import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'


const links = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Acerca de",
    path: "/about",
  },
  {
    title: "Planes",
    path: "/plans",
  },
  {
    title: "Contacto",
    path: "/contact",
  },
  
 
]

const Navbar = () => {
  return(
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/logo-color.png" alt="logo" width={160} height={44}/>
        </div>
        <div className={styles.links}>
          {links.map(link =>(
            <Link
              href={link.path}
              className={styles.link}
              key={link.path}
              >{link.title}</Link>
          ))}
        </div>
        <div className={styles.buttons}>
          <div className={styles.iconLogin}>
            <svg className={styles.icon} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
            <span className={styles.span}>Iniciar sesión</span>
          </div>
          <div className={styles.iconAccount}>
            Solicita una Demo
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar