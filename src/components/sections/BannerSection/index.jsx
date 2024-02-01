import Banner from '../../../assets/FoodBanner.png'

export const BannerSection = () => {
  return (<>
    <section>
      <div>
        <h2>Descubra o melhor aplicativo de comida</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis magni quod, rerum recusandae totam aperiam enim, quia laboriosam minima beatae error, deserunt delectus culpa sit molestiae nihil deleniti harum!</p>
        <a href="#">Saiba mais</a>
      </div>
      <div>
        <img src={Banner} alt="Comidas gostosas" />
      </div>
    </section>
  </>)
}