import { RestaurantList } from "./RestaurantList";
import RestaurantIcon from '../../../assets/RestaurantIcon.svg';

export const RestaurantSection = () => {
  return (<>
    <section className="section_grn">
      <div className="container">
        <img src={RestaurantIcon} alt="Ícone Restaurante" />
        <h2 className="title md wht">Restaurantes Famosos</h2>
        <RestaurantList />
      </div>
    </section>
  </>)
}