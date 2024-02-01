import styles from "./style.module.css"

export const Footer = () => {
  return (<>
    <footer className={styles.footer}>
      <div className="container">
        <p className="paragraph wht center">Todos os direitos reservados - 2023.</p>
      </div>
    </footer>
  </>)
}