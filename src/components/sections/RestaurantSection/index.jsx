import { RestaurantList } from "./RestaurantList";
import RestaurantIcon from '../../../assets/RestaurantIcon.svg';

export const RestaurantSection = () => {
  return (<>
    <section>
      <img src={RestaurantIcon} alt="Ícone Restaurante" />
      <h2>Restaurantes Famosos</h2>
      <RestaurantList />
    </section>
  </>)
}