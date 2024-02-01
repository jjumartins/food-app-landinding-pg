import Banner from '../../../assets/FoodBanner.png'

export const BannerSection = () => {
  return (<>
    <section className='section_padding'>
      <div className='container'>
        <div>
          <h2 className='title blk lg'>Descubra o melhor <span className='title rd'>aplicativo de comida</span></h2>
          <p className='paragraph blk'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis magni quod, rerum recusandae totam aperiam enim, quia laboriosam minima beatae error, deserunt delectus culpa sit molestiae nihil deleniti harum!</p>
          <a href="#" className='btn rd'>Saiba mais</a>
        </div>
        <div>
          <img src={Banner} alt="Comidas gostosas" />
        </div>
      </div>
    </section>
  </>)
}