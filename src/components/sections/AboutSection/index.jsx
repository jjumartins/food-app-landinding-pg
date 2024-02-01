import MobileIcon from '../../../assets/MobileIcon.svg'

export const AboutSection = () => {
  return (<>
    <section>
      <div>
        <img src={MobileIcon} alt="Ícone Mobile" />
        <h2 className='title lg blk'>Sobre o <span className='title rd'>aplicativo</span></h2>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias, ut ea illo laboriosam cumque minus quam officia ipsum illum nesciunt vitae itaque quae. Fuga nostrum corporis recusandae incidunt? Nemo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, delectus! Minus cumque reprehenderit incidunt! Unde eaque nostrum fugiat, provident delectus quam officiis officia beatae ex vero labore saepe eius voluptatibus?</p>
    </section>
  </>)
}