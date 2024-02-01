import { ConvertingForm } from "./ConvertingForm"
import styles from './style.module.css'

export const FormSection = () => {
  return (<>
    <section className={`${styles.formSection} section_rd section_padding`}>
      <div className="container sm">
        <h2 className="title md wht center">Conheça nosso aplicativo</h2>
        <ConvertingForm />
      </div>
    </section>
  </>)
}