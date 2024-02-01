import styles from './style.module.css'

export const RestaurantCard = ({ restaurant }) => {
  return (<>
    <li className={styles.restaurantCard}>
      <img src={restaurant.image} alt={restaurant.name} />
      <h3 className="title wht sm">{restaurant.name}</h3>
      <p className="paragraph wht">{restaurant.description}</p>
    </li>
  </>)
}