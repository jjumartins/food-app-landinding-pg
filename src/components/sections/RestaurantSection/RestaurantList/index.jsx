import { restaurants } from "../../../../data/restaurant"
import { RestaurantCard } from "./RestaurantCard"

export const RestaurantList = () => {
  return (<>
    <ul>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  </>)
}