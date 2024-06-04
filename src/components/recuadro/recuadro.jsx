import styles from './recuadro.module.css'

const Recuadro = ({servicio}) => {

  const arr = servicio
  return(
    <div className={styles.box}>
      <div className={styles.boxContainer}>
        <div className={styles.icon}>
          <svg className={styles.text} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d={arr.path}></path>
          </svg>
        </div>
        <div className={styles.video}>
          <h3>{arr.title}</h3>
          <p>{arr.text}</p>
        </div>
      </div>
    </div>
  )
}
export default Recuadro