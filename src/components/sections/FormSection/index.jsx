import { ConvertingForm } from "./ConvertingForm"

export const FormSection = () => {
  return (<>
    <section className="section_rd section_padding">
      <div className="container sm">
        <h2 className="title md wht center">Conheça nosso aplicativo</h2>
        <ConvertingForm />
      </div>
    </section>
  </>)
}