import RestaurantsList from "../../component/Restaurants/RestaurantsList"
import { AllapprovelsData } from "../../Utils/data"

const Restaurants = () => {
  return (
    <div>
      <div>
        <RestaurantsList data={AllapprovelsData } />
      </div>
    </div>
  )
}

export default Restaurants

