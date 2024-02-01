import { RestaurantList } from "./RestaurantList";
import RestaurantIcon from '../../../assets/RestaurantIcon.svg';
import styles from './style.module.css'

export const RestaurantSection = () => {
  return (<>
    <section className={`${styles.restaurantSection} section_grn section_padding`}>
      <div className="container">
        <img src={RestaurantIcon} alt="Ícone Restaurante" />
        <h2 className="title md wht">Restaurantes Famosos</h2>
        <RestaurantList />
      </div>
    </section>
  </>)
}