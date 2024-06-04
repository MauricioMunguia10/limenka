import Image from "next/image";
import styles from "./page.module.css";
import Recuadro from "@/components/recuadro/recuadro";

const ofrecemos = [
  {
    id:1,
    title: "Planificación en tiempo real",
    text: "Seguimiento de la prospección en tiempo real",
    path: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z",
  },
  {
    id:2,
    title: "Control Total",
    text: "Manten toda la información en un solo lugar",
    path: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z",
  },
  {
    id:3,
    title: "Convierte más clientes",
    text: "Mejora la conversión de contactos a clientes.",
    path: "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z",
  },
  {
    id:4,
    title: "Mejora la relación",
    text: "Con tus contactos, con atención personalizada",
    path: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z",
  },
]

const Home = () => {
  return(
    <div>
      {/* Primera Parte*/}
      <div className={styles.heroContainer}>
        <div className={styles.heroArea}>
          <div className={styles.heroRight}>
            <Image src="/hero-circle.png" alt="" width={120} height={120} />
          </div>
          <div className={styles.heroRightShape}>
            <Image src="/hero-circle-yellow.png" alt="" width={30} height={30} />
          </div>
          <div className={styles.heroContainerDos}>
            <div className={styles.heroMiddle}>
              <div className={styles.heroMiddleContainer}>
                <h3 className={styles.heroTitle}>Aumenta tus ventas mejora tu <span className={styles.textPurple}>negocio, </span><span className={styles.textBlack}>gestiona</span> con limenka 360
                </h3>
                <p className={styles.textPárrafo}>Una solución para tener el control y organización para un trabajo óptimo para su negocio.</p>
                <div className={styles.heroButtons}>
                  <button className={styles.Buttons}>Solicita una demostración</button>
                </div>
              </div>
            </div>
            <div className={styles.heroLeft}>
              <div className={styles.heroLeftContainer}>
                <Image className={styles.heroShape} src="/hero-shape.png" alt="" width={597} height={675} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Segunda Parte Video*/}
      <div className={styles.video}>
        <div className={styles.fluid}>
          <h4 className={styles.titleVideo}>Bienvenido a Limenka 
          <br />La mejor plataforma para la gestión de la prospección</h4>
          <div className={styles.videoContainer}>
            
          </div>
        </div>
      </div>
      {/* Tercera Parte Facts */}
      <div className={styles.factContainer}>
        <div className={styles.factLeft}>
          <div className={styles.factService}>
            <span className={styles.subtitle}>LO QUE OFRECEMOS</span>
            <h3 className={styles.subtitle2}>Obtenga una visión  clara de su <span>negocio.</span></h3>
            <p className={styles.textSub}>Accede a la información que necesitas en tiempo real que te ayudara en la toma de decisiones.</p>
            <button className={styles.buttonContact}>Contactanos</button>
          </div>
        </div>
        <div className={styles.factRight}>
          {ofrecemos.map(servicio =>(
            <Recuadro servicio={servicio} key={servicio.id}/>
          ))}
        </div>

      </div>
      {/* Cuarta Parte Feature */}
      <div className={styles.featureArea}>
        <div className={styles.featureContainer}>
          <div className={styles.featureLeft}>
            <div className={styles.featureTitle}>
              <h3 className={styles.featureFollow}>Seguimiento y <span>análisis de ventas</span> en tiempo real</h3>
              <p className={styles.párrafoFeature}>Centralice y simplifique los pagos, y obtenga información detallada sobre sus clientes.</p>
              <div className={styles.beneficiesFeature}>
                <div className={styles.beneficiesYellow}>
                  <svg className={styles.featureIcon} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>Soporte 24/7
                </div>
                <div className={styles.featureGreen}>
                  <svg className={styles.featureGreenList} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>Fácil y seguro de configurar
                  </div>
                  <div className={styles.featureBlue}>
                    <svg className={styles.featureBlueList} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>Capacitaciones personalizada por expertos
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.featureRight}>
              <div className={styles.rightTumba}>
                <Image src="/homelimenka.png" alt="" width={500} height={500} />
                  <div className={styles.subImg}>
                    <Image src="/sales.png" alt="" width={250} height={113}/>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Home