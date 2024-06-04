import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return(
    <div className={styles.footer}>
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.footerRow}>
            <div className={styles.footerCol}>
              <div className={styles.footerLogo}>
                <Image src="/logo-color.png" alt='' width={162} height={44} />
                <p className={styles.gray}>Somos una empresa 100% Mexicana con bastante experiencia para llevar el proceso desde la prospección, hasta la venta y postventa.</p>
              </div>
            </div>
            <div className={styles.footerCol}>
              <div className={styles.footerTitle}>
                <h3>Acerca de</h3>
                <ul >
                  <li className={styles.grayList}>
                    <a href="/#" >Nosotros </a>
                  </li >
                  <li className={styles.grayList}>
                    <a href="/#">Contacto</a> 
                  </li>
                  <li className={styles.grayList}>
                    <a href="/#">Aviso de privacidad</a>
                  </li>
                  <li className={styles.grayList}>
                    <a href="/#">Ayuda</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerCol}>
              <div className={styles.footerTitle}>
                <h3>Contacto</h3>
                <div className={styles.footerContact}>
                  <div className={styles.footerPhone}>
                    <svg className={styles.footerIcon} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"></path>
                    </svg> 806(000)8899
                  </div>
                  <div className={styles.footerPhone}>
                    <svg className={styles.footerIcon} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                    </svg> contacto@limenka360.com
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerCol}>
              <div className={styles.footerTitle}>
                <h3>Síguenos </h3>
                <div className={styles.footerSocial}>
                  <svg className={styles.footerIcon} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                  </svg>
                  <svg className={styles.footerIcon} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  <svg className={styles.footerIcon} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerCopy}>Copyright © 2023 Limenka 360. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

export default Footer