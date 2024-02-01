export const RestaurantCard = ({ restaurant }) => {
  return (<>
    <li>
      <img src={restaurant.image} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.description}</p>
    </li>
  </>)
}